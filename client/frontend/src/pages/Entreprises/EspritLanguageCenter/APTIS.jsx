import React, { Component } from 'react';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import photo1 from '../../../assets/img/LOGO-APTIS.jpg';
import { Row, Col, Card } from 'react-bootstrap';
import InformationBox from '../../../components/InformationBox';
class APTIS extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Présentation du Test</h1>
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
                    Dans le cadre de son partenariat avec<strong> BRITISH COUNCIL</strong>, Esprit
                    Language Center met à la disposition de ses candidats un nouveau dispositif
                    d’évaluation en ligne du niveau en langue anglaise intitulé
                    <strong>APTIS</strong>.
                  </p>
                  <p>Ce test évalue les compétences suivantes selon l’échelle du CECR :</p>
                  <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                    <li>La compréhension orale (listening) environ 50’ </li>
                    <li>
                      Le lexique et la structure de la langue (grammar & vocablary) environ 30’
                    </li>
                  </ul>
                  <p>
                    <strong>
                      ATTENTION : Les 2 Compétences sont indissociables. La durée des épreuves est
                      donnée à titre indicatif.
                    </strong>
                  </p>
                  <p>
                  Pour plus d’informations au sujet du contenu et modalités de passation, nous vous
                  invitons à consulter les liens ci-dessous ainsi que le guide du candidat que vous
                  trouverez ci-joint :
                  (Anglais)
                  <a
                    href="https://www.britishcouncil.org/exam/aptis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.britishcouncil.org/exam/aptis
                  </a>
                  </p>
                  <p>
                    (Français)
                    <a
                      href="https://www.britishcouncil.fr/examen/aptis/passer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.britishcouncil.fr/examen/aptis/passer
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="margin-top-60" style={{ justifyContent: 'center' }}>
                <Col style={{ textAlign: '-webkit-center' }}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo1} />
                  </Card>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <InformationBox data={first}></InformationBox>
                </Col>
                <Col>
                  <InformationBox data={second}></InformationBox>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <InformationBox data={third}></InformationBox>
                </Col>
                <Col>
                  <InformationBox data={forth}></InformationBox>
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
  Title: 'APTIS',
  Subtitle: 'APTIS TEST'
};
const first = {
  title: 'Passation des épreuves',
  subtitle: 'Où ?',
  description: [
    'Les épreuves se dérouleront',
    <strong>
      en ligne à Esprit Language Center au 18 Rue de l’Usine Charguia II- 2035-Ariana
    </strong>,
    <br />,
    <strong>Les PCs et casques sont forunis par ELC</strong>
  ]
};
const second = {
  title: 'Résultats et attestations',
  subtitle: '',
  description: [
    'Les résultats sont communiqués au ',
    <strong>plus tard</strong>,
    ' 1 semaine à partir de la date de passation.',
    <br />,
    'Pour le bon déroulement des épreuves, la capacité d’accueil par session est limitée à ',
    <strong>10 candidats.</strong>,
    <br />,
    'A l’issue du test, une attestation de niveau est délivrée par ',
    <strong>BRITISH COUNCIL.</strong>,
    ' La dite attestation est une ',
    <strong>référence internationale</strong>,
    ' auprès des institutions et des compagnies pour l’évaluation des compétences linguistiques en anglais.',
    <br />,
    'La validité du test est de ',
    <strong>2 ans</strong>
  ]
};
const forth = {
  title: 'CONTACT',
  subtitle: '',
  description: [
    'Les personnes intéressées sont priées de faire la démarche auprès de Mme Haidy KHEMIRI ou Mme Sonia CHAGRA.',
    <br />,
    'Les inscriptions se tiendront tous les jours ',
    <strong> sauf samedi de 8H30 à 15H. (Cf Calendrier)</strong>,
    <br />,
    <strong>BRITISH COUNCIL.</strong>,
    <a href="mailto:elc2@esprit.tn" target="_blank" rel="noopener noreferrer">
      Elc2@esprit.tn
    </a>,
    <br />,
    <strong>Tél : 71 94 15 41</strong>
  ]
};
const third = {
  title: 'Modalités d’inscription',
  subtitle: '',
  description: [
    'Les candidats d’Esprit Language Center bénéficieront d’un tarif préférentiel qui s’élève',
    <strong> à 60dt TTC.</strong>,
    <br />,
    "Une pièce d'identité vous sera exigée afin de vous établir un voucher."
  ]
};
export default APTIS;
