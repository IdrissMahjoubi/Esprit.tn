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
  Row,
  CardImg
} from 'reactstrap';
import { getSingleNews, editNews,setIsModifiedNewsLoading } from '../../actions/newsActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class updateNews extends Component {
  state = {
    title: '',
    dateStart: '',
    dateEnd:'',
    description: '',
    type: 'Administration',
    archived: '',
    imageData: null,
    url: '',
    selectedFile: null,
    loaded: false,
    imagePreviewUrl :''
  };

  componentDidMount() {
    this.props.setIsModifiedNewsLoading();
    this.props.getSingleNews(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.singleNews.title,
      dateStart: nextProps.singleNews.dateStart,
      dateEnd: nextProps.singleNews.dateEnd,
      description: nextProps.singleNews.description,
      archived: nextProps.singleNews.archived,
      type: nextProps.singleNews.type,
      url: nextProps.singleNews.url
    });
    if (nextProps.isModified)
    this.props.history.push('/news');
  }

  handleCancel = event => {
    this.props.history.push('/news');
  }
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  fileSelectedHandler = event => {
    event.preventDefault(); 
    let reader = new FileReader();
    let selectedFile = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        selectedFile,
        imagePreviewUrl: reader.result,
        loaded: true
      });
    }
    reader.readAsDataURL(selectedFile);
  };


   handleSubmit = (event) => {
    const newNews = new FormData();
    if (this.state.loaded) {
      newNews.append('imageData', this.state.selectedFile, this.state.selectedFile.name);
    } 
    newNews.append('title', this.state.title);
    newNews.append('dateStart', this.state.dateStart);
    newNews.append('dateEnd', this.state.dateEnd);
    newNews.append('description', this.state.description);
    newNews.append('archived', this.state.archived);
    newNews.append('type', this.state.type);
    newNews.append('url', this.state.url);

    this.props.editNews(newNews, this.props.match.params.id);
  };

  render() {
    const { singleNews } = this.props;
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
                <CardImg src={this.state.imagePreviewUrl ? this.state.imagePreviewUrl : `http://localhost:4000/${singleNews.image}` } alt={singleNews.image} />
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
                    <FormText color="muted">Titre de l'évenement à ajouter</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                <Col md="3">
                  <Label htmlFor="date-input">Date Start </Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    onChange={this.handleInputChange}
                    value={moment(this.state.dateStart).format('YYYY-MM-DD')}
                    type="date"
                    id="date-input"
                    name="dateStart"
                    placeholder="date debut"
                  />
                </Col>
                </FormGroup>
                <FormGroup row>


                <Col md="3">
                  <Label htmlFor="date-input">Date End </Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    onChange={this.handleInputChange}
                    value={moment(this.state.dateEnd).format('YYYY-MM-DD')}
                    type="date"
                    id="date-input"
                    name="dateEnd"
                    placeholder="date fin"
                  />
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
                      <option value="sportif">Sportif</option>
                      <option value="autres">Autres</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Image :</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" name="image" onChange={this.fileSelectedHandler} />
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
                    <FormText color="muted">url de l'evenement à ajouter</FormText>
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
  news: state.news.news,
  singleNews: state.news.singleNews,
  user: state.auth.user,
  isModified: state.news.isModified
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSingleNews, editNews ,setIsModifiedNewsLoading}
  )(updateNews)
);
