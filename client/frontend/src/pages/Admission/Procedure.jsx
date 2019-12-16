import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Row, Col, Card } from 'react-bootstrap';
import photobg from '../../assets/img/etudiants_etrangers.png';
import photo1 from '../../assets/img/zitouna.gif';
import photo2 from '../../assets/img/logo-banque.png';
import photo3 from '../../assets/img/fondation-logo.png';
class Procedure extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Financement</h1>
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
                  <Row>
                    <div style={{ display: 'flow-root' }}>
                      <h3 style={{ color: '#cd2122' }}>Frais d'inscription :</h3>
                      <hr className="custom-hr" style={{ float: 'left' }}></hr>
                    </div>
                  </Row>
                  <Row>
                    <h3>
                      Les frais d'inscription pour les nouveaux étudiants sont fixés chaque année
                      par la direction d'ESPRIT.
                    </h3>
                    <p>Pour l'année universitaire 2018/2019, les frais d'inscription sont:</p>
                    <p>
                      6542,056 DT (HT) + 6% TVA = <strong>7000 DT (TTC)</strong>
                    </p>
                  </Row>
                  <Row>
                    <div style={{ display: 'flow-root', width: '100%' }}>
                      <h3 style={{ color: '#cd2122' }}>Avantages</h3>
                      <hr className="custom-hr" style={{ float: 'left' }}></hr>
                    </div>
                    <br />
                    <p>
                      Les parents ayant plusieurs enfants inscrits à ESPRIT bénéficient d'une remise
                      de: <br />
                      - 30% pour le deuxième enfant <br />- 40 % pour le troisième enfant
                    </p>
                  </Row>
                  <Row>
                    <div style={{ display: 'flow-root', width: '100%' }}>
                      <h3 style={{ color: '#cd2122' }}>Tranches</h3>
                      <hr className="custom-hr" style={{ float: 'left' }}></hr>
                    </div>
                  </Row>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Financement par :</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row style={{ marginBottom: '20px' }}>
                    <Card style={{ width: '14rem' }}>
                      <Card.Img variant="top" src={photo1} />
                    </Card>
                  </Row>
                  <Row style={{ marginBottom: '20px' }}>
                    <Card style={{ width: '14rem' }}>
                      <Card.Img variant="top" src={photo2} />
                    </Card>
                  </Row>
                  <Row style={{ marginBottom: '20px' }}>
                    <Card style={{ width: '14rem' }}>
                      <Card.Img variant="top" src={photo3} />
                    </Card>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Row style={{ placeContent: 'center' }}>
                  <Col md={4}>
                    <div className="gobox gobox-first ">
                      <div className="gobox-content ">
                        <h4 className="gobox-title">1ère Tranche</h4>
                        <div>Dans les limites indiquées dans la confirmation d'admission.</div>
                      </div>
                    </div>
                  </Col>
                  <Col style={{ marginLeft: '30px' }} md={4}>
                    <div className="gobox gobox-last">
                      <div className="gobox-content">
                        <h4 className="gobox-title">2ème Tranche</h4>
                        <div>Avant le 15 Janvier de l'année scolaire en cours.</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <h3>
                    Le paiement des frais d'inscription fait suite aux résultats d’admission
                    notifiés par e-mail.
                  </h3>
                </Row>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <div class="services_box">
                  <span class="services_box_list_bg"></span>
                  <div class="services_box_inner">
                    <h4 class="services_box_title" style={{ marginTop: '60px' }}>
                      Compte en Dinars
                    </h4>
                    <div class="services_box_desc">
                      <p>Banque : AMEN BANK</p>
                    </div>
                    <div class="services_box_list_wrapper">
                      <ul class="services_box_list">
                        <li>Relevé d’identité bancaire</li>
                        <li>Rib : 070350020101101366 91</li>
                        <li>IBAN : TN 59 070350020101101366 91</li>
                        <li>CODE BIC : CFCTTNTTXXX</li>
                        <li>Nom/Raison : ESPRIT</li>
                        <li>
                          Domiciliation : AMEN BANK AGENCE RAOUED Res.Mariem Il Angle Rue Fathi
                          ZOUHIR Km 2 Ariana
                        </li>
                        <li>Téléphone : 71858470</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
  src: photobg,
  Title: 'PROCÉDURE',
  Subtitle: "Procédure d'inscription"
};

export default Procedure;
