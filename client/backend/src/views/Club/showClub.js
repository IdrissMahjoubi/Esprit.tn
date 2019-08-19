import React, { Component } from 'react';
import { getAllClub } from '../../actions/clubActions';
import Club from '../components/Club';
import { connect } from 'react-redux';
import {
  FormGroup,
  Col,
  Input,
  Row,
  InputGroup,
  Button,
  CardBody,
  Card,
  CardHeader,
  InputGroupAddon,
  Form
} from 'reactstrap';

class showClub extends Component {
  state = {
    allClub: [],
    search: '',
    type: '',
    etat: false
  };

  componentWillMount() {
    this.props.getAllClub();
  }

  handleAddRedirect = () => {
    this.props.history.push('/club/ajouter');
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { allClub } = this.props.club;

    let clubs = allClub;
    console.log(allClub);
    if (this.state.search !== '') {
      clubs = clubs.filter(club => {
        return club.title.indexOf(this.state.search) !== -1;
      });
    }
    if (this.state.type !== '') {
      clubs = clubs.filter(club => {
        return club.type.indexOf(this.state.type) !== -1;
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
                          <Button type="button" color="primary">
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
                          <Button type="button" color="primary">
                            Type:
                          </Button>
                        </InputGroupAddon>
                        <Input
                          type="select"
                          value={this.state.type}
                          name="type"
                          onChange={this.handleInputChange}
                        >
                          <option value="">veuillez choisir le type</option>
                          <option value="sports">sports</option>
                          <option value="other">autre</option>
                        </Input>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block onClick={this.handleAddRedirect} color="success" outline>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter un club
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
                    : clubs.map((club, index) => <Club key={index} club={club} />)}
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
  club: state.club,
  loading: state.club.loading
});

export default connect(
  mapStateToProps,
  { getAllClub }
)(showClub);
