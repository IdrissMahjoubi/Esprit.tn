import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg, Button, Col, CardHeader } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { deleteRdi } from '../../actions/rdiActions';

class Rdi extends Component {
  handleDetailsButton = id => {
    this.props.history.push('/rdi/details/' + id);
  };
  handleDeleteButton = id => {
    this.props.deleteRdi(id);
  };
  handleEditButton = id => {
    this.props.history.push('/rdi/update/' + id);
  };


  handleDelete = id => {
    this.props.deleteRdi(id);
  };
  render() {
    const { rdi } = this.props;

    return (
      <Col xs="12" sm="8" md="4">
        <Card>
          <CardHeader>
            <b>{rdi.title}</b>
          </CardHeader>
          <CardBody>
            <p>
              Publié le <b>{moment(rdi.date).format('dddd, MMMM Do YYYY, h:mm:ss a')}</b>
            </p>
            <hr className="my-2" />
            <CardImg src={`http://localhost:4000/${rdi.image}`} alt={rdi.image} />
            <hr className="my-2" />
            <Button onClick={() => this.handleDetailsButton(rdi._id)} block color="primary">
              Details
            </Button>
            <Button onClick={() => this.handleEditButton(rdi._id)} block color="warning">
              Modifier
            </Button>
            <Button onClick={() => this.handleDeleteButton(rdi._id)} block color="danger">
              Supprimer
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default withRouter(
  connect(
    mapStateToProps,
    { deleteRdi }
  )(Rdi)
);
