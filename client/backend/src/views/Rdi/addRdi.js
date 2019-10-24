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
      url: '',
      members: [],
      newMember: ''
    };
  }

  handleSubmit = event => {
    const newArticle = new FormData();
    try {
      if (this.state.imageLoaded)
        newArticle.append('image', this.state.selectedImage, this.state.selectedImage.name);
      newArticle.append('title', this.state.title);
      newArticle.append('description', this.state.description);
      this.state.members.map((name, index) => (
        newArticle.append('members', name)
      ));
      //newArticle.append('members', this.state.members);
      newArticle.append('url', this.state.url);
      this.props.addRdi(newArticle);
      this.props.history.push('/rdi');
    } catch (error) {
      console.log(error);
    }
  };

  handleCancel = event => {
    this.props.history.push('/rdi');
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleMemberAdd = () => {
    this.setState(state => {
      const members = [...state.members,state.newMember]
      state.newMember= '';
      return {members};
    });
  };

  handleMemberDelete = (event) => {
    const name = event.target.previousElementSibling.value;
    this.setState(state => {
      const members = [...state.members];
      var index = members.indexOf(name);
      if (index !== -1) {
        members.splice(index, 1);
      }
      return {members};
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
              <FormText color="muted">Titre de l'équipe RDI à ajouter</FormText>
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
              <FormText color="muted">url de l'équipe rdi</FormText>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Members :</Label>
            </Col>
            <Col xs="12" md="9">
              {this.state.members.map((name, index) => (
                 <Col xs="12" md="9"  key={index}>
                <Input name="members" readOnly={true} value={name}></Input>
                <Button onClick={this.handleMemberDelete}>Supprimer</Button>
                </Col>
              ))}
           </Col>
            <Col xs="12" md="9">
              <Input
                name="newMember"
                value={this.state.newMember}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Nouveau membre..."
              />
              <FormText color="muted">Nom du membre</FormText>
              <Button onClick={this.handleMemberAdd}>Ajouter un membre</Button>
              
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
  rdi: state.rdi
});

export default connect(
  mapStateToProps,
  { addRdi }
)(addRdis);
