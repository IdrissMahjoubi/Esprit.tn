import React, { Component } from 'react';
import Icofont from 'react-icofont';
import OwlCarousel from "react-owl-carousel3";
import ScrollAnimation from 'react-animate-on-scroll';
import LinkDuo from './utils/LinkDuo';

class Caroussel extends Component {

    state = {
        homeNews: [],
          months: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
    };
    extractDay = date => {
      const dateMilli = Date.parse(date);
      return new Date(dateMilli * 1000).getDay();
    };
    
    extractMonth = date => {
      const dateMilli = Date.parse(date);
      const monthNumber = new Date(dateMilli * 1000).getMonth();
      return this.state.months[monthNumber];
        
    };

    render() {
        const { description , title, pressData } = this.props
        //Press loop start
        const Allpress = pressData.map((press, index) => (
            <div className="team-box" key={index}>
                {console.log(index)}
                <img src={`http://localhost:4000/${press.image}`} alt="Description" />
                <div className="box-content">
                    <div className="box-inner-content">
                        <h3 className="title">{press.title}</h3>
                        <span className="post">{press.description}</span>
                        <ul className="icon">
                            <li><LinkDuo to={`http://localhost:4000/${press.file}`}><Icofont icon="icofont-download" /></LinkDuo></li>
                        </ul>
                    </div>
                </div>
            </div>
        ));
        //Team loop END
        return (
            <section id="team" className="our-team ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <span className="section-title-bg">{title}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        <OwlCarousel
                            className="owl-theme team-slides"
                            dots={false}
                            autoplay={true}
                            center= {true}
                            loop={false}
                            margin={30}
                            nav={true}
                            smartSpeed={1000}
                            autoplayHoverPause={true}
                            navText={[
                                "<i class='icofont-arrow-left'></i>",
                                "<i class='icofont-arrow-right'></i>"
                            ]}
                            responsive={{
                                0: { items: 1 },
                                768: {
                                    items: 2
                                },
                                1024: {
                                    items: 3
                                },
                                1200: {
                                    items: 3
                                }
                            }}
                        >
                            {Allpress}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
};

export default Caroussel;
