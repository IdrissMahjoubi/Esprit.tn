import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import InformationBox from '../../components/InformationBox';
import IconList from '../../components/IconList';
import DownloadButton from '../../components/DownloadButton';
import downloadsrc from '../../assets/img/download.ico';
import { Row, Col, Tab, ListGroup } from 'react-bootstrap';

class EspritEntreprise extends Component {


  
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="bread-cumbs-area bread-cumbs-bg">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <h1>Esprit Entreprise</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="our-blog main-blog">
          <div className="container">
            <Row>
              <Col>
                <h1>Missions d’Esprit Entreprise</h1>
                <hr
                  style={{
                    color: '#ed1c24',
                    borderTop: '2px solid',
                    float: 'left',
                    width: '100px'
                  }}
                ></hr>
                <br />
                <br />
                <p>
                  ESPRIT ENTREPRISE, filiale Esprit, créée en Janvier 2011 à l’attention des
                  entreprises et de leurs ressources humaines, a pour principales missions de :
                  <ul className="qualite-ul">
                    <li>Partager un savoir-faire élevé en matière de formation continue.</li>
                    <li>
                      Augmenter ou mettre à jour les compétences des ressources humaines de
                      l’entreprise.
                    </li>
                    <li>
                      Assister les entreprises et les établissements de formation en matière
                      d’ingénierie de formation et d’ingénierie pédagogique.
                    </li>
                  </ul>
                </p>
              </Col>
              <Col>
                <h1>Nos savoirs faire</h1>
                <hr
                  style={{
                    color: '#ed1c24',
                    borderTop: '2px solid',
                    float: 'left',
                    width: '100px'
                  }}
                ></hr>
                                <br />
                                <br />

                <p>
                  Selon la demande, ESPRIT ENTREPRISE est en mesure d'élaborer et de réaliser des
                  formations sur mesure, adaptées aux besoins de l’entreprise et en étroite
                  collaboration avec ses représentants, dans les domaines des TIC, du Génie Civil,
                  de l’Electromécanique, de GRH et des langues (Français, Anglais, Allemand,
                  Italien…).
                </p>
                <p>
                  <strong>
                    Ces Formations proposées en inter ou en intra entreprise peuvent se présenter
                    sous les 3 formes :
                  </strong>
                </p>
                <ul className="qualite-ul">
                  <li>Formations qualifiantes</li>
                  <li>Formations promotionnelles</li>
                  <li>Formations Certifiantes</li>
                </ul>
                <p>
                  Esprit Entreprise&nbsp; centre de certification agrée par&nbsp;Pearson Vue,
                  Prométric, ISTQB et autres centres,&nbsp; propose des cursus de formations et de
                  certifications sur les Logiciels des acteurs majeurs de L'informatique :
                  Microsoft, Cisco, Oracle, LPL Apple, etc.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Nos Moyens</h1>
                <hr
                  style={{
                    color: '#ed1c24',
                    borderTop: '2px solid',
                    float: 'left',
                    width: '100px'
                  }}
                ></hr>
                                <br />
                                <br />
                <p>ESPRIT ENTREPRISES met à la disposition des entreprises&nbsp;:</p>
                <ol>
                  <li>
                    Ses experts en ingénierie de formation pour l'élaboration de parcours de
                    formation et ses 300 enseignants et formateurs pour la réalisation de ces
                    parcours dans les différents domaines technologiques et linguistiques.
                  </li>
                  <li>Ses deux (2) grands sites de formation équipés par :</li>
                </ol>
                <ul className="qualite-ul">
                  <li>
                    Des Plateformes avancées et des ateliers technologiques pour la formation et la
                    RDI
                  </li>
                  <li>Des liaisons Internet haut-débit et réseau Wifi</li>
                  <li>D’un Centre de langues</li>
                  <li>D’un Centre d’innovation pédagogique</li>
                  <li>Des Espaces pour l’hébergement et la restauration.</li>
                </ul>
              </Col>
              <Col>
                <h1>Certifications reçues par ESPRIT Entreprise</h1>
                <hr
                  style={{
                    color: '#ed1c24',
                    borderTop: '2px solid',
                    float: 'left',
                    width: '100px'
                  }}
                ></hr>
                                <br />
                                <br />
                <ul className="qualite-ul">
                  <li>Centre de certification&nbsp;&nbsp; Pearson&nbsp; &nbsp;VUE</li>
                  <li>Centre de&nbsp; &nbsp;certification Prometric</li>
                  <li>Centre de&nbsp; &nbsp;certification CERTIPORTE</li>
                  <li>Centre de certification lSTQB</li>
                  <li>Centre de certification SolidWork,CATIA et MATLAB</li>
                  <li>Académie Locale ClSCO (en 2008 L'école ESPRlT a été sélectionnée</li>
                  <li>comme meiLLeure académie Locale ClSCO pour La région MENA)</li>
                  <li>Académie Oracle</li>
                  <li>
                    Microsoft lT Academy&nbsp;&nbsp; et membre du MlC (Mie rosoft lnnovation Center)
                  </li>
                  <li>Académie VMware : Centre de test pour La veirtualisation .</li>
                  <li>Académie LPl</li>
                  <li>Membre de L’lTSMF (Organisation internationale des Certifiés lTlU)</li>
                  <li>Académie SAP.</li>
                </ul>
              </Col>
            </Row>

            <div className="margin-top-60">
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Nos Champs d’interventions</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr><br/>
                    <h4 style={{ color: 'lightgrey' }}>LA FORMATION CONTINUE DES ENTREPRISES</h4>
                  </div>
                  <br />
                  <br />
                  <Tab.Container defaultActiveKey="#link1">
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                      Pédagogie
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Ouverture d’esprit
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                      Multiculturalisme
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link4">
                      Entreprenariat
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link5">
                      Vie étudiante
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link6">
                      Reconnaissance internationale
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                      <div>
                        <h4 style={{ color: '#ed1c24' }}>La Pédagogie Active</h4>
                        <hr style={{ color: '#ed1c24', borderTop: '2px solid' }}></hr>
                        <p>
                          Dès le départ, nous avons opté pour une formation en groupes restreints
                          (30 maximum) basée sur l’apprentissage par problèmes et projets accompagné
                          par un corps enseignant permanent fort de quelques 250 enseignants, soit
                          un enseignant pour 18 étudiants. L’étudiant se retrouve dès sa 1 ère année
                          en situation quasi-professionnelle, il résout des problèmes, il travaille
                          en équipe, il rend des comptes, etc.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <div>
                        <h4 style={{ color: '#ed1c24' }}>L'OUVERTURE D'ESPRIT</h4>
                        <hr style={{ color: '#ed1c24', borderTop: '2px solid' }}></hr>
                        <p>
                          Un ingénieur complet se doit d’avoir d’autres compétences que techniques.
                          Il travaille en groupe, gère des équipes, prend en compte les facteurs
                          humains, c’est pourquoi nous insistons aussi beaucoup sur les compétences
                          transversales en économie, en gestion, en communication et en langues.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                      <div>
                        <h4 style={{ color: '#ed1c24' }}>LE MULTICULTURALISME</h4>
                        <hr style={{ color: '#ed1c24', borderTop: '2px solid' }}></hr>
                        <p>
                          Nous offrons à nos étudiants la possibilité d’une expérience
                          internationale à travers de l’un de nos 10 accords de cursus conjoint et
                          de doubles diplômes en France ou aux Etats-Unis.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4">
                      <div>
                        <h4 style={{ color: '#ed1c24' }}>
                          LA PRISE EN COMPTE CONSTANTE DE LA DIMENSION ENTREPRENEURIALE
                        </h4>
                        <hr style={{ color: '#ed1c24', borderTop: '2px solid' }}></hr>
                        <p>
                          Par l’obligation de plusieurs stages dont un de 7 mois en fin d’études,
                          par la création de l’incubateur qui permet à de jeunes porteurs de projets
                          de trouver un lieu propice pour le développer, grâce à la « Learning
                          factory » qui met des étudiants au contact de projets d’entreprises, etc.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link5">
                      <div>
                        <h4 style={{ color: '#ed1c24' }}>
                          LE DÉVELOPPEMENT DE LA VIE ÉTUDIANTE DANS L’UN DES 40 CLUBS
                        </h4>
                        <hr style={{ color: '#ed1c24', borderTop: '2px solid' }}></hr>
                        <p>
                          Quand un(e) étudiant(e) s’engage dans un club, crée un événement,
                          participe à un challenge, il y trouvera une source incomparable de
                          formation à la vie professionnelle, tout en tissant dans une ambiance
                          festive et chaleureuse des amitiés qui contribuent à en faire une personne
                          complète.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link6">
                      <div>
                        <h4 style={{ color: '#ed1c24' }}>
                          LA RECONNAISSANCE INTERNATIONALE DE LA QUALITÉ DE NOTRE DIPLÔME{' '}
                        </h4>
                        <hr style={{ color: '#ed1c24', borderTop: '2px solid' }}></hr>
                        <p>
                          Par l’accréditation EUR ACE délivré par la CTI (Commission des Titres de
                          l’Ingénieur française) depuis 2014, Esprit est aujourd’hui la seule école
                          tunisienne à en bénéficier ; par l’adhésion à l’initiative CDIO en 2014
                          qui rassemble les institutions qui privilégient la mise en situation
                          professionnelle de ses étudiants -116 dans le monde, et seulement 2 sur le
                          continent africain- et par l’adhésion a la CGE (Conférence des Grandes
                          Ecoles) qui rassemble environ 200 grandes écoles d’ingénieur et de
                          commerce pour un partage d’expérience.{' '}
                        </p>
                      </div>{' '}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
                  
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Comment ?</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />

                  <p>
                    Au cours de la 4eme année les élèves sont avertis par mail des procédures de
                    sélection. Le départ vers une université partenaire ne peut se faire qu’à
                    travers la procédure de l’école. Des aides financières peuvent être obtenues qui
                    aideront l’étudiant à faire aboutir son projet.
                  </p>

                  <InformationBox data={info} />
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Des statistiques ?</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p>
                    En 2014/2015, 32 élèves ont été sélectionnés pour profiter de cette opportunité
                    soit une augmentation de 100% par rapport à l’année précédente :
                  </p>
                  <IconList data={statistics} />
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Quelques noms ?</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <div className="bread-cumbs-area bread-cumbs-bg-exp" style={{ height: '400px' }}>
                    <div className="diplay-table">
                      <div className="display-table-cell">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-7">
                              <h1 style={{ color: '#cd2122' }}>Etudiants partis a l'étranger</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: 'black' }}>
                    Kalboussi Fadi,Galai Tasnim, Souissi Tasnim, Bchini Nesrine, Abdallah Amira,
                    Arouay Wiem, Bouanani Seifeddine, Gharbi Mohamed Hassen, Lahrizi Habiba, Mzoughi
                    Amine, Ben Romdhane Mohamed Ali,Sboui Mohamed Amine, Kamoun Youssef, Haj Frej
                    Mohamed Amine, Chammem Raed, Dhane Asma, Merai Ameni, Boukthir Manel,
                    Boussarssar Nizar, El Hachaichi Youssef,Elloumi Mohamed Khalil, Daikhi Mehdi,
                    Hassine Khalil, Ktari Najd, Elhif Mohmaed Iheb, Souissi Abir, Jelizi Ons,
                    Belgaroui Fatma, Gueriani Houssem, Berkaoui Ghaya, Sahli Mohamed Amine, Rezgui
                    Yosr
                  </p>
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
EspritEntreprise.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string
};

const info = {
  title: "PLUS D'INFORMATIONS",
  subtitle: 'Contactez M. Salah Bousbia',
  description: 'salah.bousbia@esprit.tn'
};
const statistics = {
  icon: 'icofont-hat',
  title: 'Répartitions des étudiants',
  description: 'Année Universitaire 2014-2015',
  list: [
    '6 étudiants Centrale Lille',
    '6 Université de Nice',
    '5 SupGallilée Paris XIII',
    '2 Thomas Jefferson program ( Etats unis)',
    '6 Université du Maine',
    '3 Ecole nationale supérieure des mines de Douai',
    '2 TEM (Télécom école de management)',
    '1 Institut Supérieur d’Electronique de Paris',
    '1 Ecole Nationale supérieure du Mans'
  ]
};
const download = {
  link: 'http://esprit.tn/wp-content/uploads/2016/07/catalogue-mobilite.pdf',
  text: 'DOWNLOAD',
  src: downloadsrc
};
const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.rdis.loading
});

export default connect(
  mapStateToProps,
  {}
)(EspritEntreprise);
