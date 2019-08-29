import React, { Component } from 'react';
import { editPress, getPress, setIsModifiedPressLoading } from '../../actions/pressActions';
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

class updatePress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      press: {},
      title: '',
      description: '',
      type: '',
      image: '',
      archived: false,
      selectedFile: null,
      selectedImage: null,
      imageLoaded: false,
      fileLoaded: false,
      file: '',
      url: ''
    };
  }

  componentDidMount() {
    this.props.setIsModifiedPressLoading();
    this.props.getPress(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.press.title,
      description: nextProps.press.description,
      type: nextProps.press.type,
      image: nextProps.press.image,
      file: nextProps.press.file,
      url: nextProps.press.url,
      archived: nextProps.press.archived
    });
    if( nextProps.isModified)
    this.props.history.push('/presse');
  }

  handleSubmit = event => {
    const updateArticle = new FormData();

    if (this.state.fileLoaded) {
      updateArticle.append('files', this.state.selectedFile, this.state.selectedFile.name);
      this.state.press.file = this.state.selectedFile.name;
    }
    if (this.state.imageLoaded) {
      updateArticle.append('files', this.state.selectedImage, this.state.selectedImage.name);
      this.state.press.image = this.state.selectedImage.name;
    }
    updateArticle.append('title', this.state.title);
    updateArticle.append('description', this.state.description);
    updateArticle.append('archived', this.state.archived);
    updateArticle.append('type', this.state.type);
    updateArticle.append('url', this.state.url);

    this.props.editPress(updateArticle, this.props.match.params.id);
    this.props.history.push('/presse');
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

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      fileLoaded: true
    });
  };
  render() {
    const { press } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Evénement : Image</strong>
              </CardHeader>
              <CardBody>
                <CardImg src={`http://localhost:4000/${press.image}`} alt={press.image} />
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <strong> Evénement : </strong> Modifer
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
                    <FormText color="muted">Titre de l'article</FormText>
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
                      <option disabled value="empty">
                        veuillez choisir le type
                      </option>
                      <option value="0">veuillez choisir le type</option>
                      <option value="rapport">rapport</option>
                      <option value="article">article</option>
                      <option value="brochure">brochure</option>
                      <option value="communique">communique</option>
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
                    <Label htmlFor="text-input">File :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" name="file" onChange={this.fileSelectedHandler} />
                  </Col>
                  <Col xs="12" md="9">
                    <a href={`http://localhost:4000/${press.file}`}>{this.state.file}</a>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Url :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input
                      name="url"
                      value={this.state.url || ''}
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="text..."
                    />
                    <FormText color="muted">url de l'article presse</FormText>
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
  press: state.press.press,
  isModified: state.press.isModified
});

export default connect(
  mapStateToProps,
  { getPress, editPress , setIsModifiedPressLoading }
)(updatePress);
