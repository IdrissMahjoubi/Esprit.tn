import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "../../api"

class BannerOne extends Component {


  constructor() {
    super();
    this.state = {
      sliders: [],
      loaded : false
    }
  }

  componentDidMount() {
    axios.get("/slider")
      .then(res => {
        this.setState({
          sliders: { ...res.data },
          loaded : true
      })
    })
    .catch(error => {
      if (error.response && error.response.data) {
        console.log(error.response.data);
      }
    })
  }



  render() {
   
    console.log(this.state.sliders);
    console.log(this.state.loaded);
    let banneronedata =  this.state.loaded ? this.state.sliders.map((slider, index) => (
      <div className="single-slider-item" style={{ backgroundImage : `url(http://localhost:4000/${slider.image})` } } key={index}>
        <div className="diplay-table overlay">
          <div className="display-table-cell">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <span className={isVisible ? 'opacityOne' : 'opacityZero'}>
                        {slider.titleDescription}
                      </span>

                      <h1 className={isVisible ? 'opacityOne' : 'opacityZero'}>
                        {slider.title}
                      </h1>
                      <p className={isVisible ? 'opacityOne' : 'opacityZero'}>
                        {slider.description}
                      </p>
                      <div className="center-wrap">
                        <Link to={slider.url} className="btn-a">
                          <div className="button">
                            N/A
                            <Icofont icon="icofont-long-arrow-right" />
                            <div className="mask" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    )): 'Loading ..';
    //BannerOne loop END

    const options = {
      className: 'owl-theme home-slides',
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      touchDrag: true,
      autoplaySpeed: 1000,
      navText: [
        '<span class="icofont-rounded-left icofont-3x"></span>',
        '<span class="icofont-rounded-right icofont-3x"></span>'
      ]
    };



    //Thumbs loop END
    return (
      <React.Fragment>
          <OwlCarousel {...options}>{  banneronedata }</OwlCarousel>
      </React.Fragment>
    );
  }
}

export default BannerOne;
