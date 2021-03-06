import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg, Button, Col, CardHeader, Badge } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { deletePress, archivePress, unarchivePress } from '../../actions/pressActions';

class Press extends Component {
  handleDetailsButton = id => {
    this.props.history.push('/presse/details/' + id);
  };
  handleDeleteButton = id => {
    this.props.deletePress(id);
  };
  handleEditButton = id => {
    this.props.history.push('/presse/update/' + id);
  };

  handleChange = (archived, id) => {
    if (archived) this.props.unarchivePress(id);
    else this.props.archivePress(id);
  };

  handleDelete = id => {
    this.props.deletePress(id);
  };
  render() {
    const { press } = this.props;

    return (
      <Col xs="12" sm="8" md="4">
        <Card>
          <CardHeader>
            <b>{press.title}</b>
            <Badge color={'warning'} className={'ml-1 mr-1'}>
              {press.type}
            </Badge>
            <div className="card-header-actions">
            <Button
                className={'float-right'}
                color={!press.archived ? 'success' : 'danger'}
                size={'sm'}
                onClick={() => this.handleChange(press.archived, press._id)}
              >
                {!press.archived ? 'Archive' : 'Unarchive'}
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Publié le <b>{moment(press.dateDebut).format('dddd, MMMM Do YYYY, h:mm:ss a')}</b>
            </p>
            <hr className="my-2" />
            <CardImg src={`http://localhost:4000/${press.image}`} alt={press.image} />
            <hr className="my-2" />
            <Button onClick={() => this.handleDetailsButton(press._id)} block color="primary">
              Details
            </Button>
            <Button onClick={() => this.handleEditButton(press._id)} block color="warning">
              Modifier
            </Button>
            <Button onClick={() => this.handleDeleteButton(press._id)} block color="danger">
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
    { deletePress, archivePress, unarchivePress }
  )(Press)
);
