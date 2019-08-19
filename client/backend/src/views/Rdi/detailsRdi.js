import React, { Component } from 'react';
import { getRdi } from "../../actions/rdiActions";
import { connect } from "react-redux";
import { Card, CardImg,CardBody, CardHeader, Badge, Col, Row } from 'reactstrap';

 class detailsRdi extends Component {

   

    state = {
        title  : 'undefined'
    }

    componentDidMount() {
        this.props.getRdi(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.rdi.rdi)
        this.setState({
            title : nextProps.rdi.title
        })
    }
    
    render() {
        const { rdi } = this.props;
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
                  <CardImg src={`http://localhost:4000/${rdi.image}`} alt={rdi.image} />
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" xl="6">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> Partenariat <small>Détails</small>
                  </CardHeader>
                  <CardBody>
                    <div id="exampleAccordion" data-children=".item">
                      <div className="item">
                        <h5> Titre :</h5>
    
                        <p className="mb-3">{rdi.title}</p>
                      </div>
                      <div className="item">
                        <h5>Date Enregistrement :</h5>
    
                        <p className="mb-3">{rdi.date}</p>
                      </div>
                      <div className="item">
                        <h5>Description :</h5>
    
                        <p className="mb-3">{rdi.description}</p>
                      </div>
                      <div className="item">
                        <h5>Url :</h5>
    
                        <p className="mb-3">{rdi.url}</p>
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
    rdi: state.rdi.rdi,
  });
  
  export default connect(
    mapStateToProps,
    { getRdi }
  )(detailsRdi);
