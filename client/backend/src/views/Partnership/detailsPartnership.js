import React, { Component } from 'react';
import { getPartnership } from "../../actions/partnershipActions";
import { connect } from "react-redux";
import { Card, CardImg,CardBody, CardHeader, Badge, Col, Row } from 'reactstrap';

 class detailsPartnership extends Component {

   

    state = {
        title  : 'undefined'
    }

    componentDidMount() {
        this.props.getPartnership(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.partnership.partnership)
        this.setState({
            title : nextProps.partnership.title
        })
    }
    
    render() {
        const { partnership } = this.props;
        return (
            <div className="animated fadeIn">
            <Row>
              <Col xs="12" xl="6">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i>
                    <strong>Partenariat : Image</strong>
                  </CardHeader>
                  <CardBody>
                  <CardImg src={`http://localhost:4000/${partnership.image}`} alt={partnership.image} />
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" xl="6">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Partenariat <small>Détails</small>
                    <div className="card-header-actions">
                      <Badge>{partnership.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div id="exampleAccordion" data-children=".item">
                      <div className="item">
                        <h5> Titre :</h5>
    
                        <p className="mb-3">{partnership.title}</p>
                      </div>
                      <div className="item">
                        <h5>Date Enregistrement :</h5>
    
                        <p className="mb-3">{partnership.date}</p>
                      </div>
                      <div className="item">
                        <h5>Description :</h5>
    
                        <p className="mb-3">{partnership.description}</p>
                      </div>
                      <div className="item">
                        <h5>Url :</h5>
    
                        <p className="mb-3">{partnership.url}</p>
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
    partnership: state.partnership.partnership,
  });
  
  export default connect(
    mapStateToProps,
    { getPartnership }
  )(detailsPartnership);
