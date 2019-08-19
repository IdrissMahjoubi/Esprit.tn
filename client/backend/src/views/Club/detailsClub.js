import React, { Component } from 'react';
import { getClub } from "../../actions/clubActions";
import { connect } from "react-redux";
import { Card, CardImg,CardBody, CardHeader, Badge, Col, Row } from 'reactstrap';

 class detailsClub extends Component {

   

    state = {
        title  : 'undefined'
    }

    componentDidMount() {
        this.props.getClub(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.club.club)
        this.setState({
            title : nextProps.club.title
        })
    }
    
    render() {
        const { club } = this.props;
        return (
            <div className="animated fadeIn">
            <Row>
              <Col xs="12" xl="6">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i>
                    <strong>Club : Image</strong>
                  </CardHeader>
                  <CardBody>
                  <CardImg src={`http://localhost:4000/${club.image}`} alt={club.image} />
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" xl="6">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Club <small>Détails</small>
                    <div className="card-header-actions">
                      <Badge>{club.type}</Badge>
                      <Badge>{club.sport}</Badge>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div id="exampleAccordion" data-children=".item">
                      <div className="item">
                        <h5> Titre :</h5>
    
                        <p className="mb-3">{club.title}</p>
                      </div>
                      <div className="item">
                        <h5>Date Enregistrement :</h5>
    
                        <p className="mb-3">{club.date}</p>
                      </div>
                      <div className="item">
                        <h5>Description :</h5>
    
                        <p className="mb-3">{club.description}</p>
                      </div>
                      <div className="item">
                        <h5>Url :</h5>
    
                        <p className="mb-3">{club.url}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    errors: state.errors,
    club: state.club.club,
  });
  
  export default connect(
    mapStateToProps,
    { getClub }
  )(detailsClub);
