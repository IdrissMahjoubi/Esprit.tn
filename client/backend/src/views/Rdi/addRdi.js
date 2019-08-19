import React, { Component } from 'react';
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
  FormText
} from 'reactstrap';
import { addRdi } from '../../actions/rdiActions';
import { connect } from 'react-redux';

class addRdis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      sport: '',
      selectedImage: null,
      url: ''
    };
  }

  handleSubmit = event => {
    const newArticle = new FormData();
    try {
      if (this.state.imageLoaded)
        newArticle.append('image', this.state.selectedImage, this.state.selectedImage.name);
      newArticle.append('title', this.state.title);
      newArticle.append('description', this.state.description);
      newArticle.append('url', this.state.url);
      this.props.addRdi(newArticle);
      this.props.history.push('/rdi');
    } catch (error) {
      console.log(error);
    }
  };

  handlerCancel = e => {
    this.setState({
      title: '',
      description: '',
      image: null,
      selectedImage: null,
      url: ''
    });
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
    return (
      <Card>
        <CardHeader>
          <strong> Rdi : </strong> Ajouter
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
              <FormText color="muted">Titre du partenariat à ajouter</FormText>
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
                placeholder="url..."
              />
              <FormText color="muted">url du partenaire à ajouter</FormText>
            </Col>
          </FormGroup>
          <CardFooter>
            <center>
              <Button type="submit" size="sm" onClick={this.handleSubmit} color="primary">
                <i className="fa fa-dot-circle-o"></i> Ajouter
              </Button>
              <Button type="reset" size="sm" onClick={this.handlerCancel} color="danger">
                <i className="fa fa-ban"></i> Annuler
              </Button>
            </center>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors,
  rdi: state.rdi
});

export default connect(
  mapStateToProps,
  { addRdi }
)(addRdis);
