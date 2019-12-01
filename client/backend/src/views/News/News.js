import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsComponent from '../components/NewsComponent';
import { getNews } from '../../actions/newsActions';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  InputGroupAddon,
  InputGroup,
  FormGroup,
  Input
} from 'reactstrap';
import 'toasted-notes/src/styles.css';

class News extends Component {
  state = {
    news: [],
    search: '',
    type: ''
  };

  componentDidMount() {
   this.props.getNews();
  }



  handleArchivedNewsButton = () => {
    this.props.history.push('/news/archived');
  };
  
  handleAddRedirect = () => {
    this.props.history.push('/news/add');
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { news } = this.props.news;

    let Allnews = news.filter(singleNews => {
      return singleNews.archived === false;
    });;

    if (this.state.search !== '') {
      Allnews = news.filter(singleNews => {
        return singleNews.title.indexOf(this.state.search) !== -1;
      });
    }
    if (this.state.type !== '') {
      Allnews = news.filter(singleNews => {
        return singleNews.type.indexOf(this.state.type) !== -1;
      });
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <InputGroupAddon addonType="prepend">
                          <Button  type="button" color="primary">
                            Recherche:
                          </Button>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          id="input1-group2"
                          value={this.state.search}
                          name="search"
                          placeholder="Inserer un titre"
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                    </Col>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <InputGroupAddon addonType="prepend">
                          <Button  type="button" color="primary">
                            Type:
                          </Button>
                        </InputGroupAddon>
                        <Input
                          type="select"
                          value={this.state.type}
                          name="type"
                          placeholder="Inserer un titre"
                          onChange={this.handleInputChange}
                        >
                          <option value="">veuillez choisir le type</option>
                          <option value="sportif">Sportif</option>
                          <option value="autres">Autres</option>
                        </Input>
                      </InputGroup>
                    </Col>
                    </FormGroup>
                    <FormGroup row >
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block onClick={this.handleAddRedirect} color="success" outline>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter un Evenement
                        </Button>
                      </InputGroup>
                    </Col>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button onClick={this.handleArchivedNewsButton} block color="danger" outline>
                          <i className="fa fa-plus" />
                          &nbsp;Evenements Archiveés
                        </Button>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardHeader>
              <CardBody>
                <Row>
                  {this.props.loading
                    ? 'Loading...'
                    : Allnews.map((singleNews, index) => <NewsComponent key={index} singleNews={singleNews} />)}
                </Row>
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
  news: state.news,
  loading: state.news.loading
});

export default connect(
  mapStateToProps,
  { getNews }
)(News);
