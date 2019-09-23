import React, { Component } from 'react';
import { editClub, getClub, setIsModifiedClubLoading } from '../../actions/clubActions';
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

class updateclub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: {},
      title: '',
      description: '',
      type: '',
      image: '',
      sport: '',
      selectedImage: null,
      imageLoaded: false,
      url: '',
      display:true,
    };
  }

  componentDidMount() {
    this.props.setIsModifiedClubLoading();
    this.props.getClub(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.club.title,
      description: nextProps.club.description,
      type: nextProps.club.type,
      image: nextProps.club.image,
      sport: nextProps.club.sport,
      url: nextProps.club.url
    });
    if(nextProps.club.type==='sports'){
      this.setState({display:true});
    }
    else{
      this.setState({display:false});
    }
    if (nextProps.isModified)
    this.props.history.push('/club');
  }

  handleSubmit = event => {
    const updateClub = new FormData();

    if (this.state.imageLoaded) {
      updateClub.append('image', this.state.selectedImage, this.state.selectedImage.name);
      this.setState({
        club: { image: this.state.selectedImage.name }
      });
    }
    updateClub.append('title', this.state.title);
    updateClub.append('description', this.state.description);
    updateClub.append('sport', this.state.sport);
    updateClub.append('type', this.state.type);
    updateClub.append('url', this.state.url);
    this.props.editClub(updateClub, this.props.match.params.id);

    this.props.history.push('/club');
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

  render() {
    const { club } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Club : Image</strong>
              </CardHeader>
              <CardBody>
                <CardImg src={`http://localhost:4000/${club.image}`} alt={club.image} />
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <strong> Club : </strong> Modifer
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
                    <FormText color="muted">Titre du club</FormText>
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
                      <option value="0">veuillez choisir le type du club</option>
                      <option value="sports">sports</option>
                      <option value="other">autre</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row style={{display: this.state.display ? 'flex' : 'none' }}>
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
                      placeholder="text..."
                    />
                    <FormText color="muted">url de l'article club</FormText>
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
  club: state.club.club,
  isModified: state.club.isModified
});

export default connect(
  mapStateToProps,
  { getClub, editClub, setIsModifiedClubLoading }
)(updateclub);
