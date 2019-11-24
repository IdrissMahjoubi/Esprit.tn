import React, { Component } from 'react';
import { getAllRdi } from '../../actions/rdiActions';
import Rdi from '../components/Rdi';
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

class showRdi extends Component {
  state = {
    allRdi: [],
    search: '',
    etat: false
  };

  componentWillMount() {
    this.props.getAllRdi();
  }

  handleAddRedirect = () => {
    this.props.history.push('/rdi/ajouter');
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { allRdi } = this.props.rdi;

    let rdis = allRdi;
    if (this.state.search !== '') {
      rdis = rdis.filter(rdi => {
        return rdi.title.indexOf(this.state.search) !== -1;
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
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block onClick={this.handleAddRedirect} color="success" outline>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter une equipe RDI
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
                    : rdis.map((rdi, index) => (
                        <Rdi key={index} rdi={rdi} />
                      ))}
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
  rdi: state.rdi,
  loading: state.rdi.loading
});

export default connect(
  mapStateToProps,
  { getAllRdi }
)(showRdi);
