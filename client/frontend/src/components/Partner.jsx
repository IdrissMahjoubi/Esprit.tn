import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from "react-redux"
import { getPartners } from '../actions/partnersActions';
import LinkDuo from './utils/LinkDuo';
class Partners extends Component {

    componentDidMount() {
        this.props.getPartners();
    }
    render() {
        //Partner loop start
        const partnerData = this.props.partners.map((partner, index) => (
            <div className="single-partner-logo" key={index}>
                <LinkDuo to={partner.url}  className="logo-preview">
                <img src={`http://localhost:4000/${partner.image}`} alt="partnerLogo" />
                </LinkDuo>
            </div>
        ));
        //Partner loop END
        return (
            <React.Fragment>
                <section className="our-partners ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="row">
                            <OwlCarousel
                                className="owl-theme partners-slides"
                                dots= {false}
                                loop={true}
                                margin={100}
                                autoplay={true}
                                smartSpeed={1000}
                                nav={true}
                                navText={[
                                    "<i class='icofont-arrow-left'></i>",
                                    "<i class='icofont-arrow-right'></i>"
                                ]}
                                responsive={{
                                    0: { items: 1 },
                                    768: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 5
                                    }
                                }}
                            >
                                {this.props.loading
                                    ? 'Loading...' :
                                    partnerData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


  
const mapStateToProps = state => ({
  partners: state.partners.partners,
  loading: state.partners.loading,
});

export default connect(
  mapStateToProps,
  { getPartners }
)(Partners);