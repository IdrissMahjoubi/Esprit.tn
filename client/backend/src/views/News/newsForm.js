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
  FormText,
  InputGroup,
  Row
} from 'reactstrap';
import { addNews } from '../../actions/newsActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class newsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      dateStart: '',
      dateEnd: '',
      description: '',
      type: 'Administration',
      imageData: null,
      selectedFile: null,
      url: ''
    };
  }

  handlerCancel = e => {
    this.setState({
      title: '',
      dateStart: new Date(),
      dateEnd: new Date(),
      description: '',
      type: '',
      imageData: null,
      selectedFile: null,
      url: '',
      loaded: false
    });
  };


  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: true
    });
  };

  handleSubmit = event => {
    const newSingleNews = new FormData();
    if (this.state.loaded) {
      newSingleNews.append('image', this.state.selectedFile, this.state.selectedFile.name);
    }
    newSingleNews.append('title', this.state.title);
    newSingleNews.append('dateStart', this.state.dateStart);
    newSingleNews.append('dateEnd', this.state.dateEnd);
    newSingleNews.append('description', this.state.description);
    newSingleNews.append('type', this.state.type);
    newSingleNews.append('url', this.state.url);
    newSingleNews.append('user', this.props.user.id);
    newSingleNews.append('archived', false);

    this.props.addNews(newSingleNews);
    this.props.history.push('/news');
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Card>
            <CardHeader>
              <strong> Actualité : </strong> Ajouter
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <Col md="8">
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
                  <FormText color="muted">Titre de l'évenement à ajouter</FormText>
                </Col>

                <Col md="8">
                  <Label htmlFor="date-input">Date Start </Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    onChange={this.handleInputChange}
                    selected={this.state.dateStart}
                    type="date"
                    id="date-input"
                    name="dateStart"
                    placeholder="date debut"
                  />
                </Col>
                <Col md="8">
                  <Label htmlFor="date-input"> Date End </Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    onChange={this.handleInputChange}
                    selected={this.state.dateEnd}
                    type="date"
                    id="date-input"
                    name="dateEnd"
                    placeholder="date fin"
                  />
                </Col>
                
                <Col md="8">
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

                <Col md="8">
                  <Label htmlFor="text-input">Type :</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="select"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange}
                  >
                    <option disabled>veuillez choisir le type</option>
                    <option value="Administration"> Administration </option>
                    <option value="Clubs"> Club </option>
                    <option value="Etudiant"> Etudiant </option>
                  </Input>
                </Col>
                <Col md="8">
                  <Label htmlFor="text-input">Image :</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="file" name="type" onChange={this.fileSelectedHandler} />
                </Col>
                <Col md="8">
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
                  <FormText color="muted">url de l'actualite à ajouter</FormText>
                </Col>
              </FormGroup>
              <CardFooter>
                <InputGroup>
                  <Button type="submit" className="m-2" onClick={this.handleSubmit} color="primary">
                    <i className="fa fa-dot-circle-o"></i> Ajouter
                  </Button>
                  <Button type="reset" className="m-2" onClick={this.handlerCancel} color="danger">
                    <i className="fa fa-ban"></i> Annuler
                  </Button>
                </InputGroup>
              </CardFooter>
            </CardBody>
          </Card>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.errors,
  news: state.news
});

export default withRouter(
  connect(
    mapStateToProps,
    { addNews }
  )(newsForm)
);