import React, { Component } from 'react';

//Import Component
import NavBar from '../components/NavBar';
import Slider from '../components/banner/Slider';
import Services from '../components/Services';
import Calender from '../components/Calender';
import About from '../components/About';
import News from '../components/news/News';
import VideoArea from '../components/VideoArea';
// import Testimonials from '../components/Testimonials';
// import FAQ from '../components/FAQ';
import Partner from '../components/Partner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getHomeNews } from '../actions/newsActions';
import { connect } from 'react-redux';
class HomeOne extends Component {


  componentDidMount() {
    this.props.getHomeNews();
  }

  render() {
    const { loading, homeNews } = this.props;
    return (
      <React.Fragment>
        <NavBar pageName="home" />
        <Slider />
        <Services />
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <News data={homeNews} />
          )}
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

const mapStateToProps = state => ({
  errors: state.errors,
  homeNews: state.news.homeNews,
  loading: state.news.loading
});

export default connect(
  mapStateToProps,
  { getHomeNews }
)(HomeOne);