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
import { Row, Col } from 'react-bootstrap';

class Experience extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="our-blog main-blog">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Expérience à l'international ?</h1>
                  <hr
                    style={{
                      color: '#ed1c24',
                      borderTop: '2px solid',
                      float: 'left',
                      width: '100px'
                    }}
                  ></hr>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Faire une partie de son cursus à l’étranger signifie s’ouvrir sur de nouvelles
                    cultures, être curieux et audacieux, savoir surmonter une forme d’inconnu. Dans
                    un monde globalisé dans lequel évoluera le futur ingénieur, il s’agit d’une
                    expérience irremplaçable. ESPRIT a tissé des liens de partenariat avec des
                    établissements d’enseignement supérieur étrangers permettant aux étudiants en
                    cours de scolarité de poursuivre des options spécifiques au sein de
                    l’établissement partenaire (double cursus ou double diplôme). Cette opportunité
                    est exclusivement ouverte aux meilleurs élèves d’Esprit qui allient excellent
                    parcours scolaire, bonnes capacités de communication en anglais et en français
                    et sens aigu des responsabilités : en effet la pérennité de ces accords dépend
                    aussi largement du sérieux de l’assiduité et du succès des élèves d’ESPRIT. Pour
                    l'année 2016 /2017, 71 étudiants sont en formation à l'étranger, en France ou
                    aux Etats Unis. Parmi eux 11 bénéficient d'une bourse d'étude. Ce nombre de
                    croissance constante d'une année sur l'autre représente environ 10% d'une
                    promotion.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Quand ?</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p>
                    L’aspect international peut intervenir dans le cursus même des étudiants
                    d’Esprit grâce à la mobilité et l’expérience à l’internationale :
                  </p>
                  <ul className="qualite-ul">
                    <li>
                      Pour un semestre d’étude dans une des universités partenaires et un stage, qui
                      remplacent la 5ème année à Esprit, l’étudiant obtient alors le diplôme
                      d’ingénieur d’Esprit.
                    </li>
                    <li>
                      Pour 2 années complètes : l’étudiant obtient conjointement deux diplômes : le
                      diplôme d’Esprit et celui du Master de l’institution partenaire étrangère.
                    </li>
                  </ul>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Où ?</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row>
                    <Col md={9}>
                      <h4>Catalogue de la Mobilité Internationale</h4>
                    </Col>
                    <Col>
                      <DownloadButton data={download} />
                    </Col>
                  </Row>
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
Experience.propTypes = {
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
  text : 'DOWNLOAD',
  src : downloadsrc
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.rdis.loading
});

export default connect(mapStateToProps, {})(Experience);
