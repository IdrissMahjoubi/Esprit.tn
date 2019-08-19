import React, { Component } from 'react';
import { editRdi, getRdi } from '../../actions/rdiActions';
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

class updateRdi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rdi: {},
      title: '',
      description: '',
      type: '',
      image: '',
      selectedImage: null,
      imageLoaded: false,
      url: ''
    };
  }

  componentDidMount() {
    this.props.getRdi(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.rdi.title,
      description: nextProps.rdi.description,
      image: nextProps.rdi.image,
      sport: nextProps.rdi.sport,
      url: nextProps.rdi.url
    });
  }

  handleSubmit = event => {
    const updateRdi = new FormData();

    if (this.state.imageLoaded) {
      updateRdi.append('image', this.state.selectedImage, this.state.selectedImage.name);
      this.state.rdi.image = this.state.selectedImage.name;
    }
    updateRdi.append('title', this.state.title);
    updateRdi.append('description', this.state.description);
    updateRdi.append('url', this.state.url);

    this.props.editRdi(updateRdi, this.props.match.params.id);

    this.props.history.push('/rdi');
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  imageSelectedHandler = event => {
    this.setState({
      selectedImage: event.target.files[0],
      imageLoaded: true
    });
  };

  render() {
    const { rdi } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Rdi : Image</strong>
              </CardHeader>
              <CardBody>
                <CardImg
                  src={`http://localhost:4000/${rdi.image}`}
                  alt={rdi.image}
                />
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <strong> Rdi : </strong> Modifer
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
                    <FormText color="muted">Titre du rdi</FormText>
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
                    <FormText color="muted">url de l'article rdi</FormText>
                  </Col>
                </FormGroup>
                <CardFooter>
                  <center>
                    <Button type="submit" block onClick={this.handleSubmit} color="primary">
                      <i className="fa fa-dot-circle-o"></i> Modifier
                    </Button>
                    <Button type="reset" block color="danger">
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
  rdi: state.rdi.rdi
});

export default connect(
  mapStateToProps,
  { getRdi, editRdi }
)(updateRdi);
