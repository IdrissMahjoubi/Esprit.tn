import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Col, CardHeader, Card, CardBody, CardImg, Badge } from 'reactstrap';
import moment from 'moment';
import { deleteNews, archiveNews, unarchiveNews } from '../../actions/newsActions';

class NewsComponent extends Component {
  handleDetailsButton = id => {
    this.props.history.push('/news/details/' + id);
  };
  handleDeleteButton = id => {
    this.props.deleteNews(id);
  };
  handleEditButton = id => {
    this.props.history.push('/news/update/' + id);
  };

  handleChange = (archived, id) => {
    if (archived) this.props.unarchiveNews(id);
    else this.props.archiveNews(id);
  };

  render() {
    const { singleNews } = this.props;
    const deleteButton = (
      <Button onClick={() => this.handleDeleteButton(singleNews._id)} block color="danger">
        Supprimer
      </Button>
    );
    return (
      <Col xs="12" sm="8" md="4">
        <Card>
          <CardHeader>
            <b>{singleNews.title}</b>
            <Badge color={'warning'} className={'ml-1 mr-1'}>
              {singleNews.type}
            </Badge>
            <div className="card-header-actions">
              <Button
                className={'float-right'}
                color={!singleNews.archived ? 'success' : 'danger'}
                size={'sm'}
                onClick={() => this.handleChange(singleNews.archived, singleNews._id)}
              >
                {!singleNews.archived ? 'Archive' : 'Unarchive'}
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Du <b>{moment(singleNews.dateStart).format('YYYY-MM-DD')}</b> jusqu'à{' '}
              <b>{moment(singleNews.dateEnd).format('YYYY-MM-DD')}</b>{' '}
            </p>
            <hr className="my-2" />
            <CardImg src={`http://localhost:4000/${singleNews.image}`} alt={singleNews.image} />
            <hr className="my-2" />
            <Button onClick={() => this.handleDetailsButton(singleNews._id)} block color="primary">
              Details
            </Button>
            <Button onClick={() => this.handleEditButton(singleNews._id)} block color="warning">
              Modifier
            </Button>
            {!singleNews.archived ? '' : deleteButton}
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
    { deleteNews, archiveNews, unarchiveNews }
  )(NewsComponent)
);
