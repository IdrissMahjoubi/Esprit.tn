import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg, Button, Col, CardHeader, Badge } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { deleteClub } from '../../actions/clubActions';

class Club extends Component {
  handleDetailsButton = id => {
    this.props.history.push('/club/details/' + id);
  };
  handleDeleteButton = id => {
    this.props.deleteClub(id);
  };
  handleEditButton = id => {
    this.props.history.push('/club/update/' + id);
  };


  handleDelete = id => {
    this.props.deleteClub(id);
  };
  render() {
    const { club } = this.props;

    return (
      <Col xs="12" sm="8" md="4">
        <Card>
          <CardHeader>
            <b>{club.title}</b>
            <Badge color={'warning'} className={'ml-1 mr-1'}>
              {club.type}
            </Badge>
        
          </CardHeader>
          <CardBody>
            <p>
              Publié le <b>{moment(club.date).format('dddd, MMMM Do YYYY, h:mm:ss a')}</b>
            </p>
            <hr className="my-2" />
            <CardImg src={`http://localhost:4000/${club.image}`} alt={club.image} />
            <hr className="my-2" />
            <Button onClick={() => this.handleDetailsButton(club._id)} block color="primary">
              Details
            </Button>
            <Button onClick={() => this.handleEditButton(club._id)} block color="warning">
              Modifier
            </Button>
            <Button onClick={() => this.handleDeleteButton(club._id)} block color="danger">
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
    { deleteClub }
  )(Club)
);
