import React, { Component } from 'react';
import { getRdis } from '../../actions/rdiActions';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
class LesEquipes extends Component {
  componentWillMount() {
    this.props.getRdis();
    console.log('componentWillMount');
  }

  render() {
    const { rdis } = this.props.rdis;

    const rdisData = this.props.loading
      ? 'LOADING...'
      : rdis.map(function(rdi, index) {
          if (index % 2 === 0) {
            return (
              <React.Fragment key={index}>
                <div class="row">
                  <div class="col-sm-6 col-md-4 text-center">
                    <div class="service-item-rdi">
                      <a href={rdi.url}>
                      <img
                        src={`http://localhost:4000/${rdi.image}`}
                        alt={rdi.title}
                        class="img-responsive"
                      />
                      </a>
                    </div>
                  </div>

                  <div class="col-sm-6 col-md-8 text-center">
                    <div class="service-item-rdi">
                      <h3>{rdi.title}</h3>
                      <p class="club-description">{rdi.description}</p>
                      <div class="members">
                      <h4>Les Membres</h4>
                      <ul>
                        {rdi.members.map(member => (
                          <li>{member}</li>
                        ))}
                      </ul>
                      </div>
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
                      <h3>{rdi.title}</h3>
                      <p class="club-description">{rdi.description}</p>
                      <div class="members">
                      <h4>Les Membres</h4>
                      <ul>
                        {rdi.members.map(member => (
                          <li>{member}</li>
                        ))}
                      </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4 text-center">
                    <div class="service-item-rdi">
                    <a href={rdi.url}>
                      <img
                        src={`http://localhost:4000/${rdi.image}`}
                        alt={rdi.title}
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
                    <h1>Les équipes de recherche et développement</h1>
                    <p>Nos préstigieuses équipes! Rejoignez les!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="services" className="services-rdi ptb-100">
          <div className="container">{rdisData}</div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  errors: state.errors,
  rdis: state.rdis,
  loading: state.rdis.loading
});

export default connect(
  mapStateToProps,
  { getRdis }
)(LesEquipes);
