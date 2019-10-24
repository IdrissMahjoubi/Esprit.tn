import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { getCalendar } from '../actions/calendarActions';
import { connect } from 'react-redux';
class Calender extends Component {
  componentDidMount() {
    this.props.getCalendar();
  }
  handleOneIsEmpty = event => {
    if (!this.props.calendar.fileOne) event.preventDefault();
  };
  handleTwoIsEmpty = event => {
    if (!this.props.calendar.fileTwo) event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <section className="cta-area">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="row">
                    <div className="col-sm-6 col-md-7 col-lg-7">
                      <div className="cta-info">
                        <h2>{this.props.Title}</h2>
                        <p>{this.props.Section[0].Content}</p>

                        <div className="center-wrap">
                          <a onClick={this.handleOneIsEmpty}
                            href={`http://localhost:4000/${this.props.calendar.fileOne}`}
                            className="btn-a"
                          >
                            <div className="button">
                              {this.props.Section[0].BtnName}
                              <Icofont icon="icofont-long-arrow-right" />
                              <div className="mask" />
                            </div>
                          </a>
                        </div>
                        <p>{this.props.Section[1].Content}</p>

                        <div className="center-wrap">
                          <a onClick={this.handleTwoIsEmpty}
                            href={`http://localhost:4000/${this.props.calendar.fileTwo}`}
                            className="btn-a"
                          >
                            <div className="button">
                              {this.props.Section[1].BtnName}
                              <Icofont icon="icofont-long-arrow-right" />
                              <div className="mask" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-5 cta-img">
                      <img className="img-fluid" src={this.props.Image} alt="mac-pro" />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Props Types
Calender.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
  BtnLink: PropTypes.string,
  BtnName: PropTypes.string,
  Image: PropTypes.string
};

//Default Props
Calender.defaultProps = {
  Title: 'Calendrier 2018/2019',
  Image: require('../assets/img/calendar.png'),
  Section: [
    {
      Content: 'Etudiants en 1ère, 2ème, 3ème et 4ème année',
      BtnLink: 'http://esprit.tn/wp-content/uploads/2019/09/calendrier-1A-2A-3A-4A-1920.pdf',
      BtnName: 'Télécharger'
    },
    {
      Content: 'Etudiants en 5ème année',
      BtnLink: 'http://esprit.tn/wp-content/uploads/2019/09/calendrier-5A-1920.pdf',
      BtnName: 'Télécharger'
    }
  ]
};
const mapStateToProps = state => ({
  calendar: state.calendar.calendar,
  loading: state.calendar.loading
});

export default connect(
  mapStateToProps,
  { getCalendar }
)(Calender);
