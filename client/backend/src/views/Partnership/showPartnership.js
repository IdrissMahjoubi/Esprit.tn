import React, { Component } from 'react';
import { getAllPartnership } from '../../actions/partnershipActions';
import Partnership from '../components/Partnership';
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

class showPartnership extends Component {
  state = {
    allPartnership: [],
    search: '',
    type: '',
    etat: false
  };

  componentWillMount() {
    this.props.getAllPartnership();
  }

  handleAddRedirect = () => {
    this.props.history.push('/partnership/ajouter');
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { allPartnership } = this.props.partnership;

    let partnerships = allPartnership;
    if (this.state.search !== '') {
      partnerships = partnerships.filter(partnership => {
        return partnership.title.indexOf(this.state.search) !== -1;
      });
    }
    if (this.state.type !== '') {
      partnerships = partnerships.filter(partnership => {
        return partnership.type.indexOf(this.state.type) !== -1;
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
                          <option value="technological">Technologique</option>
                          <option value="academic">Académique</option>
                          <option value="industrial">Industirelle</option>
                        </Input>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block onClick={this.handleAddRedirect} color="success" outline>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter un partenariat
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
                    : partnerships.map((partnership, index) => (
                        <Partnership key={index} partnership={partnership} />
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
  partnership: state.partnership,
  loading: state.partnership.loading
});

export default connect(
  mapStateToProps,
  { getAllPartnership }
)(showPartnership);
