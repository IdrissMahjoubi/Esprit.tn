import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import accredit from '../../assets/img/accredit-button.png';
import CDIO from '../../assets/img/CDIO.png';
import EURACE from '../../assets/img/EURACE.png';
import CGE from '../../assets/img/CGE.png';
import photo1 from '../../assets/img/Photo-1.jpg';
import photo2 from '../../assets/img/photo-2.jpg';
import { Row, Col, Image, Container } from 'react-bootstrap';
import LinkDuo from '../../components/utils/LinkDuo'
class ValeursEcole extends Component {


  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="our-blog main-blog">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Les Valeurs De L'École</h1>
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
              <Row>
                <Col>
                  <p>
                    Fondée en 2003 à l’initiative de trois universitaires ayant conduit de nombreux
                    projets dans l’enseignement supérieur tunisien, et dans l’enseignement supérieur
                    technique en particulier, entourés de plusieurs dizaines de leurs collègues,
                    ainsi que d’entreprises TIC et de partenaires financiers, Esprit a dès le départ
                    mis en place des formations basées sur des valeurs intangibles :
                  </p>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div>
                    <Image
                      src={accredit}
                      rounded
                      style={{ maxWidth: '100px', float: 'left', marginRight: '20px' }}
                    />

                    <p>
                      En plus d’être habilitée par le Ministère de l’Enseignement Supérieur et de la
                      Recherche Scientifique tunisien, la qualité de l’enseignement Esprit a été
                      reconnue internationalement :
                    </p>
                  </div>
                  <div>
                    <ul style={{ listStyle: 'circle' }}>
                      <li>
                        Par son adhésion en avril 2014 à la conférence des grandes école{' '}
                        <LinkDuo to="http://www.cge.asso.fr/">(CGE )*</LinkDuo> qui regroupe environ 110
                        établissements français et étrangers qui forment leurs diplômés dans un
                        souci constant d’excellence
                      </li>
                      <li>
                        Par son adhésion à l’initiative <LinkDuo to="http://www.cdio.org/">CDIO*</LinkDuo>{' '}
                        fondé par le MIT (Massachussetts institue of Technology) qui regroupe 116
                        institutions dont 2 seulement sur le continent africain. CDIO a pour
                        objectif est de recentrer la pédagogie des formations d’ingénieurs autour de
                        mises en situation professionnelle)
                      </li>
                      <li>
                        Et enfin par l’accréditation internationale de ses programmes à travers le
                        label EUR ACE qui lui a été délivrée par la commission française des titres
                        de l’ingénieur <LinkDuo to="https://www.cti-commission.fr/">(CTI)*</LinkDuo> en juin
                        2014.
                      </li>
                    </ul>
                    <Container>
                      <Row>
                        <Col xs={6} md={4}>
                          <LinkDuo to="http://www.cdio.org/">
                            <Image src={CDIO} thumbnail />
                          </LinkDuo>
                        </Col>
                        <Col xs={6} md={4}>
                          <LinkDuo to="https://www.cti-commission.fr/">
                            <Image src={EURACE} thumbnail />
                          </LinkDuo>
                        </Col>
                        <Col xs={6} md={4}>
                          <LinkDuo to="http://www.cge.asso.fr/">
                            <Image src={CGE} thumbnail />
                          </LinkDuo>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
                <Col>
                  <p>
                    Cet important développement de l’école tient d’abord et avant tout aux valeurs
                    sur lesquelles Esprit a été fondée et auxquelles elle ne déroge pas :<br></br>
                  </p>
                  <div>
                    <div className="circle-headline">
                      <span class="circle-span">
                        <span>1</span>
                      </span>
                      <h4 className="circle-title">Se former autrement</h4>
                    </div>
                    <p>
                      <strong>«&nbsp;Se former autrement&nbsp;»</strong> vise à former des
                      ingénieurs directement&nbsp;opérationnels&nbsp;: cela passe par une approche
                      pédagogique innovante, l’APP apprentissage par&nbsp;projets/problèmes,
                      notamment au travers de la participation à de nombreux challenge nationaux
                      et&nbsp;internationaux. Les activités de recherche et développement dans
                      lesquels les étudiants peuvent être&nbsp;acteurs y jouent aussi leur rôle.
                      Récemment créé , Esprit incubator constitue un puissant outil&nbsp;contribuant
                      à permettre aux étudiants porteurs d’idées innovantes à aller, dans le cadre
                      de leur&nbsp;formation, jusqu’à la création de leur start up s’ils le
                      souhaitent.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Row style={{ marginBottom: '30px' }}>
                  <Col md={3}>
                    <div className="img-wrapper">
                      <Image src={photo1} thumbnail className="img-wrapper-element" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <div className="circle-headline">
                        <span class="circle-span">
                          <span>2</span>
                        </span>
                        <h4 className="circle-title">
                          La notion de responsabilité et d’inclusion sociales
                        </h4>
                      </div>
                      <p>
                        Esprit se veut depuis sa création une école ouverte&nbsp;au plus grand
                        nombre. Dès le début, des mécanismes ont été déployés pour qu’un jeune ayant
                        du&nbsp;talent puisse, quelle que soit sa situation sociale, suivre les
                        cours et obtenir son diplôme. Depuis&nbsp;deux ans, l’école a souhaité
                        amplifier le phénomène par la création de la{' '}
                        <strong>
                          <LinkDuo to="http://esprit-fondation.tn/" target="_blank">
                            Fondation Esprit
                          </LinkDuo>
                        </strong>
                        &nbsp;en vue d’aider les jeunes à financer leur formation.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <div className="img-wrapper">
                      <Image src={photo2} thumbnail />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <div className="circle-headline">
                        <span class="circle-span">
                          <span>3</span>
                        </span>
                        <h4 className="circle-title">L’Interaction avec les entreprises</h4>
                      </div>
                      <p>
                        L’objectif de l’école étant de former des ingénieurs totalement en phase
                        avec les besoins de l’économie et des entreprises, passe par de nombreux
                        canaux : rencontres régulières avec les professionnels pour faire le point
                        sur les programmes afin de les adapter avec les besoins réels du marché ;
                        obligation pour les élèves d’effectuer 3 stages en entreprise dont le Projet
                        de fin d’étude d’une durée de 7 mois ; mise en place d’une "Learning
                        Factory" qui offre des espaces aux entreprises venus à la rencontre des
                        étudiants et de leurs enseignants pour y déployer des projets en relation
                        avec leurs préoccupations ; création d’Esprit Tech qui porte la RDI
                        (Recherche, développement et innovation) permettant aux enseignants de
                        développer leurs compétences par des activités de production au service des
                        entreprises ; création d’Esprit Incubateur, l’incubateur de startups.
                      </p>
                    </div>
                  </Col>
                </Row>
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
ValeursEcole.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.rdis.loading
});

export default connect(mapStateToProps, {})(ValeursEcole);
