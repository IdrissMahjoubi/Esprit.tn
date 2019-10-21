import React, { Component } from 'react';
import { Card, CardImg,CardBody, CardHeader, Badge, Col, Row } from 'reactstrap';
import moment from 'moment';
import { getSingleNews } from '../../actions/newsActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class detailsNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleNews: {},
      dateDebutString: null
    };
  }


  componentDidMount() {
    this.props.getSingleNews(this.props.match.params.id);
  }

    
  render() {
    const { singleNews } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Evénement : Image</strong>
              </CardHeader>
              <CardBody>
              <CardImg src={`http://localhost:4000/${singleNews.image}`} alt={singleNews.image} />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Evénement <small>Détails</small>
                <div className="card-header-actions">
                  <Badge>{singleNews.type}</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div id="exampleAccordion" data-children=".item">
                  <div className="item">
                    <h5> Titre :</h5>

                    <p className="mb-3">{singleNews.title}</p>
                  </div>
                  <div className="item">
                    <h5>Date Enregistrement :</h5>

                    <p className="mb-3">{singleNews.createdAt}</p>
                  </div>
                  <div className="item">
                    <h5> Date Debut - Date Fin :</h5>

                    <p className="mb-3">
                      Du {moment(singleNews.dateStart).format('MMM Do YY')} Jusqu'a{' '}
                      {moment(singleNews.dateEnd).format('MMM Do YY')}
                    </p>
                  </div>
                  <div className="item">
                    <h5>Description :</h5>

                    <p className="mb-3">{singleNews.description}</p>
                  </div>
                  <div className="item">
                    <h5>Url :</h5>

                    <p className="mb-3">{singleNews.url}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleNews: state.news.singleNews
});

export default withRouter(connect(mapStateToProps,{getSingleNews})(detailsNews));
