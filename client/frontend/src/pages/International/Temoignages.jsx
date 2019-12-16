import React, { Component } from 'react';
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

export default Temoignages;
