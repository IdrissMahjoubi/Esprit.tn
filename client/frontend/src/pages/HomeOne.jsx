import React, { Component } from 'react';

//Import Component
import NavBar from "../components/NavBar";
import BannerOne from "../components/banner/BannerOne";
import Services from "../components/Services";
import WelcomeServices from "../components/WelcomeServices";
import About from "../components/About";
import Blog from "../components/Blog";
import VideoArea from "../components/VideoArea";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Partner from "../components/Partner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class HomeOne extends Component {
  render() {
    return (
        <React.Fragment>
            <NavBar pageName="home" />
            <BannerOne />
            <Services />
            <WelcomeServices />
            <About />
            <Blog />
            <VideoArea />
            <Testimonials />
            <FAQ />
            <Partner />
            <Contact />
            <Footer />
        </React.Fragment>
    );
  }
}

export default HomeOne;
