import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getClubs } from '../actions/clubActions';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class Clubs extends Component {
  componentWillMount() {
    this.props.getClubs();
    console.log('componentWillMount');
  }

  render() {
    const { clubs } = this.props.clubs;

    const clubsData = this.props.loading
      ? 'LOADING...'
      : clubs.map(function(club, index) {
          if (index % 2 === 0) {
            return (
              <React.Fragment key={index}>
                <div class="row">
                  <div class="col-sm-6 col-md-4 text-center">
                    <div class="service-item-rdi">
                      <a href={club.url}>
                      <img
                        src={`http://localhost:4000/${club.image}`}
                        alt={club.title}
                        class="img-responsive"
                      />
                      </a>
                    </div>
                  </div>

                  <div class="col-sm-6 col-md-8 text-center">
                    <div class="service-item-rdi">
                      <h3>{club.title}</h3>
                      <h4 class="sport-type">Type du club: {club.type} {club.sport}</h4>
                      <p class="club-description">{club.description}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <div class="row">
                  <div class="col-sm-6 col-md-8 text-center">
                    <div class="service-item-rdi">
                      <h3>{club.title}</h3>
                      <h4 class="sport-type">Type du club: {club.type} {club.sport}</h4>
                      <p class="club-description">{club.description}</p>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 text-center">
                    <div class="service-item-rdi">
                    <a href={club.url}>
                      <img
                        src={`http://localhost:4000/${club.image}`}
                        alt={club.title}
                        class="img-responsive"
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        });

    return (
      <React.Fragment>
        <NavBar />
        <div className="bread-cumbs-area bread-cumbs-bg">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <h1>Les clubs</h1>
                    <p>Découvrez les clubs d'ESPRIT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="services" className="services-rdi ptb-100">
          <div className="container">{clubsData}</div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

//Props Types
Clubs.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
  clubsData: PropTypes.array
};

const mapStateToProps = state => ({
  errors: state.errors,
  clubs: state.clubs,
  loading: state.clubs.loading
});

export default connect(
  mapStateToProps,
  { getClubs }
)(Clubs);
