import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import { Row, Col } from 'react-bootstrap';
import ImageBox from '../../../components/ImageBox';
import site1 from '../../../assets/img/espritEM.jpg';
import site2 from '../../../assets/img/esprit_cs.jpg';
import site3 from '../../../assets/img/espritghazela.jpg';
import InfrastructureGallery from '../../../components/InfrastructureGallery';
class Infrastructure extends Component {
  Í;
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="our-blog main-blog">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Infrastructure</h1>
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
                <Col className="space-items">
                  <h4 style={{ color: '#ed1c24' }}>Vie sur le campus</h4>
                  <p>
                    <strong>
                      ESPRIT dispose d'un campus à la hauteur de ses ambitions, situé dans les
                      environs de Tunis et localisé dans le gouvernorat de l'Ariana.
                    </strong>
                  </p>
                  <p>
                    ESPRIT dispose de trois sites de formation : le premier avec lequel elle a
                    démarré, à la zone industrielle de Charguia 2, et le site principal sis à la
                    zone limitrophe du Technopôle des Communications, dans la zone industrielle à
                    vocation technologique à Chotrana, et un troisième site qui vient s’ajouter aux
                    deux autres à Charguia 2.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ImageBox data={batiment1} />
                </Col>
                <Col>GOOGLE MAPS</Col>
              </Row>
              <Row>
                <Col>
                  <ImageBox data={batiment2} />
                </Col>
                <Col>
                  <ImageBox data={batiment3} />
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Infrastructures</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p>
                    Les infrastructures modernes et adaptées, mises à la disposition des étudiants
                    offrent les meilleures conditions pour leur épanouissement aussi bien dans les
                    études que dans toutes les activités qui stimulent les capacités sportives,
                    artistiques, associatives … etc. des futurs ingénieurs, activités qui sont
                    développées au sein de clubs de l'école. Plusieurs clubs ont été créés à
                    l'initiative des étudiants avec les encouragements effectifs de l'école.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Outre les 23000 m² couverts, abritant les espaces administratifs et de
                    formation, ESPRIT dispose d'un centre d'hébergement pour ses étudiants et de 2
                    restaurants. Par ailleurs ESPRIT dispose d'espaces et d'équipements sportifs de
                    qualité, divers et variés, mis à la disposition des ses étudiants et de ses
                    clubs : un terrain de sport polyvalent, une salle de gymnastique, une piscine
                    couverte, avec tous les accessoires nécessaires.
                  </p>
                </Col>
                <Col>
                  <InfrastructureGallery />
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <p>
                    De même, ESPRIT dispose d'une bibliothèque, avec les ouvrages scientifiques et
                    techniques utilisés dans la formation dispensée, mais aussi toute sorte de
                    matières : littéraires, techniques, économiques, financières,…etc.
                  </p>
                  <p>
                    Une connexion haut débit à fibres optiques relie les sites aux réseaux
                    extérieurs et un réseau Wifi couvre chaque site, donnant la possibilité à tous
                    les étudiants, partout où ils se trouvent, et en tout temps, de se connecter
                    dans les conditions les plus confortables.
                  </p>
                  <p>
                    Des plateformes technologiques leur permettent aussi de travailler dans des
                    environnements adaptés à leurs besoins. Plus de 100 ressources pédagogiques sont
                    accessibles et mises à leur disposition : ce sont là des atouts appréciables
                    pour des élèves ingénieurs, qui leur permettent réellement de pouvoir mener
                    parallèlement à leurs études, des activités qui les intéressent et qui
                    complètent et consolident leur formation d'ingénieur.
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

const batiment1 = {
  src: site1,
  alt: 'ESPRIT COURS DU SOIR (Charguia 2)',
  title: 'ESPRIT COURS DU SOIR (Charguia 2)',
  text:
    'Le premier site abrite les activités de la formation continue, cours du soir, le MBA et ESPRIT Center Language.'
};

const batiment2 = {
  src: site2,
  alt: 'SITE PRINCIPAL (El-Ghazela)',
  title: 'SITE PRINCIPAL (El-Ghazela)',
  text:
    'Le second site réunit dans un premier bloc les activités de formation initiale d’ingénieurs, cours du jour, pour les spécialités informatique et Télécommunications et dans un deuxième bloc ESPRIT Prépa avec le Centre d’hébergement.'
};

const batiment3 = {
  src: site3,
  alt: 'ESPRIT EM/GC (Charguia 2)',
  title: 'ESPRIT EM/GC (Charguia 2)',
  text:
    'Le troisième site, nouvellement aménagé, abrite les activités de formation des spécialités Electromécanique et Génie Civil.'
};
//Props Types
Infrastructure.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.rdis.loading
});

export default connect(mapStateToProps, {})(Infrastructure);
