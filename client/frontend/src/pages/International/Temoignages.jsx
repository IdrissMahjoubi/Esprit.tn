import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
class Temoignages extends Component {


  render() {
    
    return (
      <React.Fragment>
        <NavBar />
        <Testimonials/>
        <Footer />
      </React.Fragment>
    );
  }
}

//Props Types
Temoignages.propTypes = {
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
)(Temoignages);
