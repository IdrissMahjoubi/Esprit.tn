import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from 'react-redux';
import { getSliders } from '../../actions/slidersActions';
import Page from 'react-page-loading';

class Slider extends Component {
  componentDidMount() {
    this.props.getSliders();
  }

  render() {
    let banneronedata = this.props.sliders.map((slider, index) => {
      slider.image = slider.image.replace(/\\/g, '/');
      return (
        <div
          className="single-slider-item"
          style={{ backgroundImage: `url(http://localhost:4000/${slider.image})` }}
          key={index}
        >
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
                        <h1 className={isVisible ? 'opacityOne' : 'opacityZero'}>{slider.title}</h1>
                        <p className={isVisible ? 'opacityOne' : 'opacityZero'}>
                          {slider.description}
                        </p>
                        <div className="center-wrap">
                          <Link to={slider.url} className="btn-a">
                            <div className="button">
                              {slider.btnName}
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
      );
    });
    //BannerOne loop END

    const options = {
      className: 'owl-theme home-slides pad-40',
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
      <Page loader={'comet-spin'} color={'#ed1c24'} size={20}>
        <OwlCarousel {...options}>{banneronedata}</OwlCarousel>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  sliders: state.sliders.sliders,
  loading: state.sliders.loading
});

export default connect(mapStateToProps, { getSliders })(Slider);
