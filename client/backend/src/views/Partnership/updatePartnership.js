import React, { Component } from 'react';
import { editPartnership, getPartnership, setIsModifiedPartnershipLoading } from '../../actions/partnershipActions';
import {
  Card,
  CardBody,
  Input,
  CardHeader,
  Col,
  FormGroup,
  Label,
  CardFooter,
  Button,
  FormText,
  Row,
  CardImg
} from 'reactstrap';

import { connect } from 'react-redux';

class updatePartnership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partnership: {},
      title: '',
      description: '',
      type: '',
      image: '',
      selectedImage: null,
      imageLoaded: false,
      url: '',
      imagePreviewUrl :''
    };
  }

  componentDidMount() {
    this.props.setIsModifiedPartnershipLoading();
    this.props.getPartnership(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.partnership.title,
      description: nextProps.partnership.description,
      type: nextProps.partnership.type,
      image: nextProps.partnership.image,
      sport: nextProps.partnership.sport,
      url: nextProps.partnership.url
    });
    if( nextProps.isModified)
    this.props.history.push('/partnership');
  }

  handleSubmit = event => {
    const updatePartnership = new FormData();

    if (this.state.imageLoaded) {
      updatePartnership.append('image', this.state.selectedImage, this.state.selectedImage.name);
    }
    updatePartnership.append('title', this.state.title);
    updatePartnership.append('description', this.state.description);
    updatePartnership.append('type', this.state.type);
    updatePartnership.append('url', this.state.url);

    this.props.editPartnership(updatePartnership, this.props.match.params.id);
    this.props.history.push('/partnership');
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  imageSelectedHandler = event => {
    event.preventDefault();
    let reader = new FileReader();
    let selectedImage = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        selectedImage,
        imagePreviewUrl: reader.result,
        loaded: true,
        imageLoaded: true
      });
    };
    reader.readAsDataURL(selectedImage);
  };

  handleCancel = event => {
    this.props.history.push('/partnership');
  }

  render() {
    const { partnership } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Partnership : Image</strong>
              </CardHeader>
              <CardBody>
                <CardImg
                  src={
                    this.state.imagePreviewUrl
                      ? this.state.imagePreviewUrl
                      : `http://localhost:4000/${partnership.image}`}
                  alt={partnership.image}
                />
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <strong> Partnership : </strong> Modifer
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Titre :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      placeholder="Titre..."
                    />
                    <FormText color="muted">Titre du partnership</FormText>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">description</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="textarea"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                      placeholder="Description..."
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Type :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      type="select"
                      name="type"
                      value={this.state.type}
                      onChange={this.handleInputChange}
                    >
                      <option value="0">veuillez choisir le type du partnership</option>
                      <option value="technological">Technologique</option>
                      <option value="academic">Académique</option>
                      <option value="industrial">Industirelle</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Image :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" name="image" onChange={this.imageSelectedHandler} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Url :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      name="url"
                      value={this.state.url}
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="text..."
                    />
                    <FormText color="muted">url de l'article partnership</FormText>
                  </Col>
                </FormGroup>
                <CardFooter>
                  <center>
                    <Button type="submit" block onClick={this.handleSubmit} color="primary">
                      <i className="fa fa-dot-circle-o"></i> Modifier
                    </Button>
                    <Button type="reset" block onClick={this.handleCancel} color="danger">
                      <i className="fa fa-ban"></i> Annuler
                    </Button>
                  </center>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors,
  partnership: state.partnership.partnership,
  isModified: state.partnership.isModified
});

export default connect(
  mapStateToProps,
  { getPartnership, editPartnership, setIsModifiedPartnershipLoading }
)(updatePartnership);
