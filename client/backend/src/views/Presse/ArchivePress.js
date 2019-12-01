import React, { Component } from 'react';
import {  getArchived } from '../../actions/pressActions';
import Press from '../components/Press';
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

class ArchivePress extends Component {
  state = {
    allPress: [],
    search: '',
    type: '',
    etat: false
  };

  componentDidMount() {
    this.props.getArchived();
  }

  handleArchivedEventsButton = () => {
    this.props.history.push('/presse');
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { allPress } = this.props.press;

    let presses = allPress.filter(press => {
      return press.archived === true;
    });
    if (this.state.search !== '') {
      presses = presses.filter(press => {
        return press.title.indexOf(this.state.search) !== -1;
      });
    }
    if (this.state.type !== '') {
      presses = presses.filter(press => {
        return press.type.indexOf(this.state.type) !== -1;
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
                          placeholder="Inserer un titre"
                          onChange={this.handleInputChange}
                        >
                          <option value="">veuillez choisir le type</option>
                          <option value="rapport">rapport</option>
                          <option value="article">article</option>
                          <option value="brochure">brochure</option>
                          <option value="communique">communique</option>
                        </Input>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button
                          onClick={this.handleArchivedEventsButton}
                          block
                          color="danger"
                          outline
                        >
                          <i className="fa fa-plus" />
                          &nbsp;Article Presse Non Archiveés
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
                    : presses.map((press, index) => <Press key={index} press={press} />)}
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
  press: state.press,
  loading: state.press.loading
});

export default connect(
  mapStateToProps,
  { getArchived }
)(ArchivePress);
