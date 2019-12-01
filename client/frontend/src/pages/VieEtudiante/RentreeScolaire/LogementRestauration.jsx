import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
class LogementRestauration extends Component {


  render() {
    
    return (
      <React.Fragment>
        <NavBar />
        <div className="bread-cumbs-area bread-cumbs-bg">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <h1>Logement & Restauration</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

//Props Types
LogementRestauration.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.rdis.loading
});

export default connect(
  mapStateToProps,
  { }
)(LogementRestauration);
