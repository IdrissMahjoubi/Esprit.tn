import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import LinkDuo from '../../components/utils/LinkDuo';
import Icofont from 'react-icofont';
import photo1 from '../../assets/img/cameroun.png';
import photo2 from '../../assets/img/campus-tunisie.jpg';
import photo3 from '../../assets/img/bazza.png';
import photo4 from '../../assets/img/cesec.png';
import cinemaimg from '../../assets/img/cinema.jpg';
import infirmerie from '../../assets/img/infirmerie.jpg';
import ImageBox from '../../components/ImageBox';
class ContactEtInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Contacts et Info :</h1>
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
              <Row style={{ marginBottom: '60px' }}>
                <Col md={8}>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Informations utiles :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <h3>
                    L’année universitaire commence en général au mois de septembre et se termine au
                    mois de juin.
                  </h3>
                  <p>
                    Il est fortement conseillé d’arriver au moins deux semaines avant le début des
                    cours et cela dans le but de trouver un logement et de se familiariser avec le
                    nouvel environnement.
                  </p>
                  <p>
                    Pour le logement, Campus Tunisie se charge d’aider les étudiants à en trouver.
                    Bien qu’il soit difficile d’évaluer avec précision le budget d’un étudiant, le
                    tableau suivant présente une estimation des frais mensuels, hors frais de
                    scolarité.
                  </p>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Estimation des frais mensuels :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <Accordion defaultActiveKey="0" style={{color:'black'}}>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Icofont icon="icofont-home" style={{ marginRight: '10px' }} />
                            Logement
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <ul style={{ listStyle: 'circle', marginLeft: '10px' }}>
                                <li>Logement en colocation: Entre 150 et 300 DT/mois,</li>
                                <li>Studio Environ 400DT /mois,</li>
                                <li>Logement individuel Entre 500 et 800DT/mois.</li>
                                <li>
                                  Logement au foyer de l’école :{' '}
                                  <LinkDuo
                                    to={'/vieetudiante/rentreescolaire/logementrestauration'}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Cliquez ici
                                  </LinkDuo>
                                </li>
                              </ul>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Icofont icon="icofont-glass" style={{ marginRight: '10px' }} />
                            Restauration
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <ul style={{ listStyle: 'circle', marginLeft: '10px' }}>
                                <li>Alimentation Entre 200 et 300DT/par mois,</li>
                                <li>Alimentation au Foyer d'ESPRIT :</li>
                              </ul>
                              <ul style={{ listStyle: 'disc', marginLeft: '30px' }}>
                                <li>
                                  Pension complète (petit déjeuner, déjeuner et dîner) : 2800DT/an
                                  Hors Taxe
                                </li>
                                <li>
                                  Demi-Pension (F1) (petit déjeuner, déjeuner ou dîner) : 1 600DT/an
                                  Hors Taxe
                                </li>
                                <li>(F2) (déjeuner ou dîner) : 1 300DT/an Hors Taxe</li>
                              </ul>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="2">
                            <Icofont icon="icofont-road" style={{ marginRight: '10px' }} />
                            Transport
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <ul style={{ listStyle: 'circle', marginLeft: '10px' }}>
                                <li>Transport local Environ 50DT /mois.</li>
                              </ul>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col md={8}>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Cellule d'accueil et d'assistance :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p style={{ width: '100%' }}>
                    <strong>Ghazela : </strong>
                  </p>
                  <ul style={{ marginLeft: '40px', listStyle: 'circle' }}>
                    <li>MOTAIN Menphis : +216 54486471</li>
                    <li>auzin FONKOU : +216 20 509 535</li>
                  </ul>
                  <p style={{ width: '100%' }}>
                    <strong>Ghazela : </strong>
                  </p>
                  <ul style={{ marginLeft: '40px', listStyle: 'circle' }}>
                    <li>Boris BOPDA : +216 53799273</li>
                    <li>Nelson ATANGANA : +216 50 592 629</li>
                  </ul>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Cellule d'écoute :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row style={{ textAlign: 'center' }}>
                    <Col>
                      <LinkDuo
                        style={{ width: '75%' }}
                        className="custom-button btn"
                        to={'/vieetudiante/celluleecoute'}
                      >
                        <span>Cliquez ICI</span>
                      </LinkDuo>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col md={8}>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Santé :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row style={{ textAlign: 'center' }}>
                    <Col>
                      <LinkDuo
                        style={{ width: '30%' }}
                        className="custom-button btn"
                        to={
                          'http://esprit.tn/wp-content/uploads/2019/05/Guide-pratique-des-%C3%A9tudiants-version-web.pdf'
                        }
                      >
                        <span>Télécharger</span>
                      </LinkDuo>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Pré-inscription au foyer :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row style={{ textAlign: 'center' }}>
                    <Col>
                      <LinkDuo
                        style={{ width: '75%' }}
                        className="custom-button btn"
                        to={'/vieetudiante/rentreescolaire/logementrestauration'}
                      >
                        <span>Cliquez ICI</span>
                      </LinkDuo>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col md={8}>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Carte de séjour :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p style={{ width: '100%' }}>
                    <strong>Papiers nécessaires pour la carte séjour : </strong>
                  </p>
                  <ul style={{ marginLeft: '40px', listStyle: 'circle' }}>
                    <li>
                      Attestation de scolarité ou d'inscription pour l'année scolaire ou
                      universitaire en cours.
                    </li>
                    <li>Attestation d'un revenu.</li>
                    <li>Copie du passeport encore valide.</li>
                    <li>04 photos d'identité.</li>
                    <li>Justificatif d'hébergement.</li>
                    <li>Remplir le formulaire de la demande de visa - Carte de séjour.</li>
                  </ul>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Hébérgement et restauration :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row style={{ textAlign: 'center' }}>
                    <Col>
                      <LinkDuo
                        style={{ width: '75%' }}
                        className="custom-button btn"
                        to={'/vieetudiante/rentreescolaire/logementrestauration'}
                      >
                        <span>Cliquez ICI</span>
                      </LinkDuo>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Contactez directement nos partenaires pour plus d’information :</h2>
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
              <Row style={{ marginBottom: '60px' }}>
                <Col md={8}>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Au Cameroun :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p style={{ width: '100%' }}>
                    <strong>CESEC</strong>
                    <br />
                    458, Rue Mulenda. <br />
                    Plateaux des 15ans
                    <br />
                    BP: 1025 / Brazzaville
                    <br />
                    République du Congo
                    <br />
                    Contact : Mr Rodrel Melys DE BELKO
                    <br />
                    +(242) 06 863 61 90/ 04 414 8445
                    <br />
                    Email :
                    <LinkDuo to={'mailto:cesec.network@gmail.com'}>cesec.network@gmail.com</LinkDuo>
                  </p>
                  <Row>
                    <Card style={{ width: '14rem' }}>
                      <Card.Img variant="top" src={photo1} />
                    </Card>
                    <Card style={{ width: '14rem' }}>
                      <Card.Img variant="top" src={photo2} />
                    </Card>
                  </Row>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Au Congo-Brazzaville :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p style={{ width: '100%' }}>
                    <strong>Campus Tunisie</strong>
                    <br />
                    Elig Effa-Yaoundé
                    <br />
                    (en face de l'école de travaux publique)
                    <br />
                    Cameroun
                    <br />
                    Contact : Mr Abraham kamgning
                    <br />
                    +00237691586742
                    <br />
                    +00237669141544
                    <br />
                    <LinkDuo to={'mailto:contact@campustunisie.org'}>
                      contact@campustunisie.org
                    </LinkDuo>
                  </p>
                  <Row>
                    <Card style={{ width: '13rem' }}>
                      <Card.Img variant="top" src={photo3} />
                    </Card>
                    <Card style={{ width: '14rem' }}>
                      <Card.Img variant="top" src={photo4} />
                    </Card>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Santé et assurance :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <ImageBox data={sante} />
                    </Col>
                    <Col>
                      <p>
                        Sur le campus, nous assurons la présence d’un(e) infirmier(e) le soir et une
                        convention a été établie avec un médecin qui se déplacera en cas de besoin.
                      </p>
                      <p>
                        L'assurance-santé (couverture sociale) est obligatoire pour les étudiants
                        internationaux. Sont acceptés au titre de l'assurance-santé : une
                        attestation d'affiliation à un régime d'assurance-maladie conventionnel ou à
                        une assurance privée tunisienne ou étrangère (elle sera alors traduite en
                        français ou en anglais) indiquant comme date limite de validité de votre
                        séjour.
                      </p>
                      <p>
                        Il vous sera également fortement conseillé de contracter sur place une
                        assurance responsabilité civile. Cette assurance couvre les risques liés à
                        la formation suivie (accidents corporels, dégâts matériels dont vous
                        pourriez être responsable).
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Sorties et vie sociale :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <p>
                        A Tunis et ses environs, plusieurs salles de cinéma : coût de la place de 8
                        à 10DT.
                      </p>
                      <p>
                        L’essentiel de la vie sociale peut se faire sur le campus grâce à toutes les
                        associations.
                      </p>
                    </Col>
                    <Col>
                      <ImageBox data={cinema} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Besoin de plus d’événements :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p>Aller sur le site de Tounessna Mag via ce lien :</p>
                  <Row style={{ textAlign: 'center' }}>
                    <Col>
                      <LinkDuo
                        style={{ width: '75%' }}
                        className="custom-button btn"
                        to={'/vieetudiante/rentreescolaire/logementrestauration'}
                      >
                        <span>Cliquez ICI</span>
                      </LinkDuo>
                    </Col>
                  </Row>
                </Col>
              </Row> */}
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

const breadcrumb = {
  src: '',
  Title: 'Contacts et Info',
  Subtitle: 'Informations utiles et coût de la vie en Tunisie'
};
const sante = {
  src: infirmerie,
  alt: 'Infirmerie Scolaire',
  title: 'Infirmerie Scolaire',
  text: ''
};
const cinema = {
  src: cinemaimg,
  alt: 'Cinéma Le Palace - Tunis',
  title: 'Cinéma Le Palace - Tunis',
  text: ''
};
//Props Types
ContactEtInfo.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.rdis.loading
});

export default connect(mapStateToProps, {})(ContactEtInfo);
