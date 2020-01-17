import React, { Component } from 'react';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import Icofont from 'react-icofont';
import { Row, Col } from 'react-bootstrap';
import breadcrumbbg from '../../../assets/img/esprit-ingenieur.jpg';
import DownloadButton from '../../../components/DownloadButton';
import downloadsrc from '../../../assets/img/download.ico';
class PresentationIngenieur extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Esprit d'ingénieur : Pour tout savoir sur nos formations</h1>
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
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Electromecanique</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <DownloadButton data={download1} />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Génie civil</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <DownloadButton data={download2} />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>TIC</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <DownloadButton data={download3} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <Icofont className="services-box-fonticon" icon={'icofont-flash'} />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Se former autrement</h4>
                      <div className="services-box-desc">
                        <p>
                          Esprit lors de sa création s’est donnée comme mission principale de former
                          des ingénieurs « autrement ». Pour cela l’école a adopté dès le départ une
                          pédagogie nouvelle, dynamique mettant l’élève au centre de
                          l’apprentissage. L’adoption de l’APP (apprentissage par projet/problème)
                          est venue renforcer cette volonté. Un centre d’innovation pédagogique
                          permet la formation des enseignants à ces nouvelles pratiques pédagogiques
                          qui s’étendent petit à petit à l’ensemble du cursus. L’évaluation des
                          enseignements par les élèves contribue aussi à mettre ce dernier au cœur
                          du processus d’apprentissage. L’élève est acteur de sa formation.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <Icofont className="services-box-fonticon" icon={'icofont-flash'} />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Activités supplémentaires</h4>
                      <div className="services-box-desc">
                        <p>
                          Mais former autrement passe aussi par des activités qui dépassent les
                          cours et forment l’élève à ce qu’il sera en tant qu’ingénieur. Cela se
                          fait dans le cadre des activités de Recherche, Développement et Innovation
                          auxquels peuvent être associés des étudiants par la participation
                          conjointe avec des enseignants à des concours internationaux, des
                          challenges, par l’obligation de faire plusieurs stages, par l’accession
                          d’une expérience significative à l’international, par toute forme
                          d’expérience associative.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <Icofont className="services-box-fonticon" icon={'icofont-flash'} />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Cursus</h4>
                      <div className="services-box-desc">
                        <p>
                          Actuellement deux cursus d’ingénieur sont proposés ; un cursus en cours du
                          jour et un cursus en cours du soir (formation continue) Proche de la
                          structure du LMD le diplôme d’ingénieur s’acquiert en 5 années : un tronc
                          commun de 3 ans qui permet d’acquérir les bases indispensables et 2 années
                          pour approfondir ses connaissances et se spécialiser. Il est possible
                          d’entrer dans la formation directement en 2ème, 3ème année, chaque niveau
                          ouvre un type de cursus.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Cursus A </h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <ul className="qualite-ul">
                    <li>Cursus intégré et progressif de 5 ans post-bac</li>
                    <li>10 semestres, 300 ECTS</li>
                    <li>
                      Admission en 3ème année pour les titulaires d’une licence dans la spécialité
                    </li>
                    <li>Structuration en (3+2) avec des options</li>
                    <li>3 Stages dont 1 Projet de fin d’études (semestre 10)</li>
                  </ul>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Cursus B </h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <ul className="qualite-ul">
                    <li>Cursus intégré de 3 ans post-licence ou bien post-prépa</li>
                    <li>6 semestres, 180 ECTS</li>
                    <li>Structuration en (1+2) avec des options</li>
                    <li>2 ou 3 Stages dont 1 Projet de fin d’études (semestre 10)</li>
                  </ul>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Cursus C </h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <ul className="qualite-ul">
                    <li>Cursus intégré de 4 ans post-licence</li>
                    <li>En cours du soir</li>
                    <li>180 ECTS</li>
                    <li>Projet de fin d’études tout au long de l’année terminale</li>
                  </ul>
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
const download1 = {
  link: 'http://esprit.tn/wp-content/uploads/2017/05/Présentation-site-EM.pdf',
  text: 'DOWNLOAD',
  src: downloadsrc
};
const download2 = {
  link: 'http://esprit.tn/wp-content/uploads/2017/05/présentation-génie-civil.pdf',
  text: 'DOWNLOAD',
  src: downloadsrc
};
const download3 = {
  link: 'http://esprit.tn/wp-content/uploads/2017/07/présentation-TIC.pdf',
  text: 'DOWNLOAD',
  src: downloadsrc
};
const breadcrumb = {
  src: breadcrumbbg,
  Title: 'L’école d’ingénieur',
  Subtitle: 'Former les ingénieurs de demain'
};

export default PresentationIngenieur;
