import React, { Component } from 'react';

//Import Component
import NavBar from '../components/NavBar';
import Slider from '../components/banner/Slider';
import Services from '../components/Services';
import Calender from '../components/Calender';
import About from '../components/About';
import News from '../components/News';
import VideoArea from '../components/VideoArea';
// import Testimonials from '../components/Testimonials';
// import FAQ from '../components/FAQ';
import Partner from '../components/Partner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class HomeOne extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar pageName="home" />
        <Slider />
        <Services />
        <News />
        <Partner />
        <Calender />
        <About />
        <VideoArea />
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomeOne;
