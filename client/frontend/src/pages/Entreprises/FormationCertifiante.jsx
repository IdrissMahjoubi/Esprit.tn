import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Row, Col, Card } from 'react-bootstrap';
import photo1 from '../../assets/img/fondation-Tunisie.png';
import photo2 from '../../assets/img/tact.png';
class FormationCertifiante extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Formation Certifiante</h1>
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
                  <p>
                    Dans le cadre d’un partenariat avec la Fondation Tunisie pour le développement
                    et l’association TACT « Tunisian Association for Communication and Technology »,
                    le groupe ESPRIT a entrepris depuis le mois de février 2018, des actions
                    d’ingénierie de formation consistant en : - Un programme de formation pour la
                    requalification des diplômés des ISET en TIC, qui sont en quête d’un premier
                    emploi, afin de les doter des compétences scientifiques, techniques et
                    communicationnelles nécessaires à leur insertion professionnelle ; - Une
                    orientation compétences-métier de ce programme en phase avec la demande des
                    entreprises de TACT, mettant l’accent, dans un premier temps, sur les métiers
                    liés au développement, à l’intelligence des affaires (Business Intelligence) et
                    à l’informatique embarquée ; - L’accréditation de ce programme par la Conférence
                    des Grandes Ecoles CGE via un certificat de qualification et de compétences CQC
                    baptisé « Services du numérique : TIC & TACT » qui sera délivré par ESPRIT aux
                    apprenants au terme de la formation. Ces actions s’insèrent par ailleurs dans le
                    cadre du programme de la Fondation Tunisie pour le Développement, consistant en
                    l’édification de 10 centres ELIFE à proximité des ISET, dans les régions les
                    plus défavorisées, pour la requalification, la professionnalisation et
                    l’insertion des diplômés des ISET, d’une part, et pour le renforcement des
                    capacités des enseignants en termes d’amélioration continue de la formation
                    initiale d’autre part.
                  </p>
                </Col>
              </Row>
              <Row className="margin-top-60" style={{ justifyContent: 'center' }}>
                <Col style={{ textAlign: '-webkit-center' }}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo1} />
                  </Card>
                </Col>
                <Col style={{ textAlign:'-webkit-center' }}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo2} />
                  </Card>
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
const breadcrumb = {
  Title: 'Formation Certifiante',
  Subtitle: 'Formation Certifiante'
};
export default FormationCertifiante;
