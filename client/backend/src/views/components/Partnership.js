import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg, Button, Col, CardHeader, Badge } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { deletePartnership } from '../../actions/partnershipActions';

class Partnership extends Component {
  handleDetailsButton = id => {
    this.props.history.push('/partnership/details/' + id);
  };
  handleDeleteButton = id => {
    this.props.deletePartnership(id);
  };
  handleEditButton = id => {
    this.props.history.push('/partnership/update/' + id);
  };


  handleDelete = id => {
    this.props.deletePartnership(id);
  };
  render() {
    const { partnership } = this.props;

    return (
      <Col xs="12" sm="8" md="4">
        <Card>
          <CardHeader>
            <b>{partnership.title}</b>
            <Badge color={'warning'} className={'ml-1 mr-1'}>
              {partnership.type}
            </Badge>
          </CardHeader>
          <CardBody>
            <p>
              Publié le <b>{moment(partnership.date).format('dddd, MMMM Do YYYY, h:mm:ss a')}</b>
            </p>
            <hr className="my-2" />
            <CardImg src={`http://localhost:4000/${partnership.image}`} alt={partnership.image} />
            <hr className="my-2" />
            <Button onClick={() => this.handleDetailsButton(partnership._id)} block color="primary">
              Details
            </Button>
            <Button onClick={() => this.handleEditButton(partnership._id)} block color="warning">
              Modifier
            </Button>
            <Button onClick={() => this.handleDeleteButton(partnership._id)} block color="danger">
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
    { deletePartnership }
  )(Partnership)
);
