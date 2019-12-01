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
import { addClub } from '../../actions/clubActions';
import { connect } from 'react-redux';

class addClubs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      type: 'other',
      sport: '',
      selectedImage: null,
      url: '',
      display:true,
    };
  }

  handleSubmit = event => {
    const newArticle = new FormData();
    try {
    if(this.state.imageLoaded)
    newArticle.append('image', this.state.selectedImage,this.state.selectedImage.name);
    newArticle.append('title', this.state.title);
    newArticle.append('description', this.state.description);
    newArticle.append('type', this.state.type);
    newArticle.append('sport', this.state.sport);
    newArticle.append('url', this.state.url);
    this.props.addClub(newArticle);
    this.props.history.push("/club");
    } catch (error) {
      console.log(error);
    }
  };

  handleCancel = event => {
    this.props.history.push('/club');
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleTypeChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if(event.target.value==='sports'){
      this.setState({
        display:true
      })
    }else
    {
      this.setState({
        display:false
      })
    }
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
          <strong> Club : </strong> Ajouter
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
              <FormText color="muted">Titre du club à ajouter</FormText>
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
                onChange={this.handleTypeChange}
              >
                <option value="other">veuillez choisir le type du club</option>
                <option value="sports">sports</option>
                <option value="other">autre</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row  style={{display: this.state.display ? 'flex' : 'none' }}>
            <Col md="3">
              <Label htmlFor="text-input">Type de sport :</Label>
            </Col>
            <Col xs="12" md="9">
              <Input
                type="select"
                name="sport"
               
                value={this.state.sport}
                onChange={this.handleInputChange}
              >
                <option value="0">veuillez choisir le type</option>
                <option value="team">Équipe</option>
                <option value="individual">Individuel</option>
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
                placeholder="url..."
              />
              <FormText color="muted">url du club à ajouter</FormText>
            </Col>
          </FormGroup>
          <CardFooter>
            <center>
              <Button type="submit" size="sm" onClick={this.handleSubmit} color="primary">
                <i className="fa fa-dot-circle-o"></i> Ajouter
              </Button>
              <Button type="reset" size="sm" onClick={this.handleCancel} color="danger">
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
  club: state.club
});

export default connect(
  mapStateToProps,
  { addClub }
)(addClubs);
