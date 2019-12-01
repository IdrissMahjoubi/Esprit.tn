import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Col, Row } from 'react-bootstrap';
class ServicesEcole extends Component {


  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="our-blog main-blog">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Servies De L'École</h1>
                  <hr
                    style={{
                      color: '#ed1c24',
                      borderTop: '2px solid',
                      float: 'left',
                      width: '100px'
                    }}
                  ></hr>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <div className="section-title text-center">
                <h2>LES DIRECTIONS OPERATIONNELLES</h2>
                <hr className="custom-hr"></hr>
              </div>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>DIRECTION DE LA FORMATION</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Mourad ZERAI</h4>
                  <p>Email : mourad.zerai@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département Informatique</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable Mme Syrine KAROUI</h4>
                  <p>Email : syrine.karoui@esprit.tn</p>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département CO.GE.D</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable Mme Ines BEN DHAHBI</h4>
                  <p>Email : ines.bendhahbi@esprit.tn</p>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département Télécommunications</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable Mme Faten TEBER</h4>
                  <p>Email : faten.teber@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département Tronc commun TIC</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable Mme Manel MADHIOUB</h4>
                  <p>Email : manel.madhioub@esprit.tn</p>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département Génie civil</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable M. Majdi GHARBI</h4>
                  <p>Email : majdi.gharbi@esprit.tn</p>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département électromécanique</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable M. Yosr GHOZZI</h4>
                  <p>Email : yosr.ghozzi@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département Formation des Formateurs</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable Mme. Kaouthar LOUATI</h4>
                  <p>Email : kaouther.louati@esprit.tn</p>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département des stages</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable M. Walid DOUAGI</h4>
                  <p>Email : walid.douagi@esprit.tn</p>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département Vie étudiante</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable M. Zied SAIDI</h4>
                  <p>Email : zied.saidi@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département Scolarité</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable Mohamed Ali BOUAKLINE</h4>
                  <p>Email : mohamedali.bouakline@esprit.tn</p>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Direction de la RDI (ESPRIT-TECH)</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Faouzi KAMOUN</h4>
                  <p>Email : faouzi.kammoun@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Direction Cours du soir</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Mourad ZERAI</h4>
                  <p>Email : mourad.zerai@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département EM/GC (Cours du soir)</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable M. Nacef SIFI</h4>
                  <p>Email : nacef.sifi@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h4>Département TIC (Cours du soir)</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable M. Sami SIFI</h4>
                  <p>Email : sami.sifi@esprit.tn</p>
                </Col>
              </Row>
              <div className="section-title text-center">
                <h2>LES DIRECTIONS ET SERVICES FONCTIONNELS</h2>
                <hr className="custom-hr"></hr>
              </div>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>DIRECTION ADMINISTRATIVE ET FINANCIÈRE</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Souhail OUESLATI</h4>
                  <p>Email : souhail.oueslati@esprit.tn</p>
                </Col>
                <Col>
                <div style={{ display: 'flow-root' }}>
                    <h4>Département Comptabilité</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable M. noureddine KARDAMINE</h4>
                  <p>Email : nourddine.kardamine@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                <div style={{ display: 'flow-root' }}>
                    <h4>Département Affaires juridiques et administratives</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable Mme Ashraf DAMERGI</h4>
                  <p>Email : ashraf.damergi@esprit.tn</p>
                </Col>
                <Col>
                <div style={{ display: 'flow-root' }}>
                    <h4>Département Finances</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h4>Responsable Mme Youssef CHENIMA</h4>
                  <p>Email : youssef.chenima@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>DIRECTION DES RELATIONS EXTERIEURES</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Salah BOUSBIA</h4>
                  <p>Email : salah.bousbia@esprit.tn</p>
                </Col>
                <Col>
                <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>DIRECTION DES SYSTÈMES D'INFORMATION</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Chokri CHAARAOUI</h4>
                  <p>Email : chokri.chaaroui@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>DIRECTION DES INFRASTRUCTURES, HYGIÈNE, SÉCURITÉ ET ENVIRONNEMENT</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Faycel LBABDA</h4>
                  <p>Email : faycal.lbabda@esprit.tn</p>
                </Col>
                <Col>
                <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>DIRECTION D'ESPRIT LANGUAGE CENTER</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable Mme Nadia GHELALA</h4>
                  <p>Email : nadia.ghelala@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>DÉMARCHE QUALITÉ ET AMÉLIORATION CONTINUE</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Nabil JGUIRIM</h4>
                  <p>Email : nabil.jguirim@esprit.tn</p>
                </Col>
                <Col>
                <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>SERVICE COMMUNICATION</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Karim MAGHREBI</h4>
                  <p>Email : karim.maghrebi@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>FOYER & RESTAURANT</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Mohamed RAHMOUNI</h4>
                  <p>Email : mohamed.rahmouni@esprit.tn</p>
                </Col>
                <Col>
                <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>ESPRIT ENTREPRISE (Formation Continue)</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h4>Responsable M. Naceur AMMAR</h4>
                  <p>Email : naceur.ammar@esprit.tn</p>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

//Props Types
ServicesEcole.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.rdis.loading
});

export default connect(mapStateToProps, {})(ServicesEcole);
