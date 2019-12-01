import React, { Component } from 'react';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import {getAllPress} from '../../actions/pressActions'
class SalleDePresse extends Component {


  render() {
    const { allPress } = this.props
    const pressData = this.props.loading
      ? 'LOADING...'
      : allPress.map(function(press, index) {
          if (index % 2 === 0) {
            return (
              <React.Fragment key={index}>
                <div className="row">
                  <div className="col-sm-6 col-md-4 text-center">
                    <div className="service-item-rdi">
                      <a href={press.url}>
                      <img
                        src={`http://localhost:4000/${press.image}`}
                        alt={press.title}
                        className="img-responsive"
                      />
                      </a>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-8 text-center">
                    <div className="service-item-rdi">
                      <h3>{press.title}</h3>
                      <p className="club-description">{press.description}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <div className="row">
                  <div className="col-sm-6 col-md-8 text-center">
                    <div className="service-item-rdi">
                      <h3>{press.title}</h3>
                      <p className="club-description">{press.description}</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 text-center">
                    <div className="service-item-rdi">
                    <a href={press.url}>
                      <img
                        src={`http://localhost:4000/${press.image}`}
                        alt={press.title}
                        className="img-responsive"
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
                    <h1>Salle de Presse</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="services" className="services-rdi ptb-100">
          <div className="container">{pressData}</div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.press.loading,
  allPress:state.press.allPress
});

export default connect(
  mapStateToProps,
  { getAllPress }
)(SalleDePresse);
