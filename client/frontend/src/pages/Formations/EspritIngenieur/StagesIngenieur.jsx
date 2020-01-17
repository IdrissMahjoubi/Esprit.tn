import React, { Component } from 'react';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import { Row, Col } from 'react-bootstrap';
import breadcrumbbg from '../../../assets/img/stage-background.jpg';
import { Card } from 'react-bootstrap';
import photo from '../../../assets/img/nabil-jguirim.jpg';
import learningFactory from '../../../assets/img/learning-factory.jpg';
import Icofont from 'react-icofont';
import ImageBox from '../../../components/ImageBox';
class StagesIngenieur extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Les Stages</h1>
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
                    <strong>
                      Le stage est un moment essentiel de l’apprentissage pour un futur ingénieur.
                    </strong>
                  </p>
                  <ul style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                    <li>
                      <p>
                        Un stage "ouvrier" d’une durée minimale de deux semaines pendant les
                        vacances, validé suite au dépôt du journal de stage portant le cachet et la
                        signature de l'entreprise auprès du service des stages.
                      </p>
                      <p>
                        Durant leurs cursus universitaires, les étudiants sont appelés à réaliser au
                        moins un stage "ouvrier" en 1er cycle, un stage "technicien" en 2ème cycle
                        et un stage PFE en 5ème année.
                      </p>
                    </li>
                    <li>
                      <p>
                        Un stage "technicien" d’une durée minimale un mois pendant les vacances
                        d’été, validé par un comité composé d’enseignants d’ESPRIT suite à un
                        entretien. Un journal de stage portant le cachet et la signature de
                        l'entreprise doit être déposé auprès du service des stages à la rentrée
                        universitaire avant 30 Septembre.
                      </p>
                      <p>
                        Ce stage "technicien" doit être réalisé à partir de l'admission en 4ème
                        année et avant la session principale de la 5ème année qui valide 3 ECTS dans
                        le plan d'études de la 5ème année.
                      </p>
                    </li>
                    <li>
                      Un stage pour le projet de fin d’études (PFE) d’une durée de 6 mois qui se
                      déroule durant le second semestre de la 5ème année. Ce stage qui valide 32
                      ECTS.
                    </li>
                  </ul>
                  <p>
                    C’est à travers ces activités que le département rythme au quotidien la vie
                    étudiante de l’école afin d’en faire plus qu’un simple lieu de travail scolaire.
                  </p>
                  <h4 style={{ color: '#ed1c24' }}>NB</h4>
                  <p>
                    - Tous les documents relatifs aux stages ouvrier et technicien (journal de
                    stage, demande de stage, convention de stage, etc) vous les retrouverez sous
                    l'espace étudiants <a href="http://stage.esprit.tn">http://stage.esprit.tn</a>
                  </p>
                  <p>
                    Tous les documents relatifs aux stages PFE (convention de stage, fiche PFE) et
                    leurs validations seront gérés sous l'espace étudiants{' '}
                    <a href="http://pfe.esprit.tn">http://pfe.esprit.tn</a>
                  </p>
                </Col>
              </Row>
              <Row style={{ marginBottom: '60px' }}>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Aide à la recherche des stages</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p>
                    Afin d’aider les étudiants à trouver des stages, la direction des stages anime «
                    les journées de l’entreprise » avec deux rendez-vous principaux :
                  </p>
                  <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    <li>
                      De septembre à décembre le mercredi-après midi : une à trois entreprises sont
                      invitées à rencontrer des étudiants. Elles leur présentent leurs activités
                      ainsi que les PFE à pourvoir.
                    </li>
                    <li>
                      Au mois de mai, la direction des stages invite des entreprises pour une «
                      Journée Portes Ouvertes » dans le hall d’ESPRIT afin de rencontrer les
                      étudiants et leur faire des entretiens pour les stages d’été (stages de
                      techniciens).
                    </li>
                  </ul>
                  <Row>
                    <Col md={9}>
                      <p>
                        Mais souvent les entreprises envoient un mail au Directeur des Stages afin
                        de proposer un ou plusieurs stages, en donner les spécifications, la
                        proposition est ensuite diffusée auprès des étudiants.
                      </p>
                      <p>
                        Il est aussi possible d’effectuer un stage à l’étranger. Parmi eux, 115
                        réalisent leurs PFE à l’étranger, soit 18%, et sont réparties comme suit
                        (les pays sont classés par ordre alphabétique) :
                      </p>
                      <p>
                        Les pays dans lesquels ces stages se déroulent sont très divers : presque
                        tous les continents sont concernés :
                      </p>
                      <p>
                        <strong>Europe :</strong> Allemagne, Belgique, Danemark, France, Pays-Bas,
                        Roumanie, Royaume Uni, Slovaquie, Suisse, Turquie.
                      </p>
                      <p>
                        <strong>Amérique du Nord et du Sud :</strong> Brésil, Canada, Etats-Unis.
                      </p>
                      <p>
                        <strong>Afrique :</strong> Egypte, Tchad.
                      </p>
                      <p>
                        <strong>Asie :</strong> Inde, Malaisie.
                      </p>
                    </Col>
                    <Col>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={photo} />
                        <Card.Body>
                          <Card.Title style={{ textAlign: 'center' }}>Nabil Jguirim</Card.Title>
                          <Card.Subtitle>
                            Directeur des stages{' '}
                            <a href="emailto:nabil.jguirim@esprit.tn">nabil.jguirim@esprit.tn</a>
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <div style={{ display: 'flow-root' }}>
                  <h3 style={{ color: '#cd2122' }}>Les étapes du PFE</h3>
                  <hr className="custom-hr" style={{ float: 'left' }}></hr>
                </div>
                <br />
              </Row>
              <Row className="margin-top-60" style={{ justifyContent: 'center' }}>
                <ul class="timeline">
                  <li>
                    <div class="direction-r">
                      <div class="flag-wrapper">
                        <span class="flag">VALIDATION DU SUJET </span>
                        <span class="time-wrapper">
                          <span class="time">1ère étape</span>
                        </span>
                      </div>
                      <div class="desc">
                        L’étudiant saisit sa fiche PFE sur le système dédiée à cet égard sur ce{' '}
                        <a href="http://196.203.216.18:8080/gestion-pfe/login.jsf">
                          <strong>lien</strong>
                        </a>{' '}
                        la fiche passe par un workflow de validation : la direction de stage, le
                        comité de validation composé par plusieurs enseignants et présidé par les
                        responsables pédagogiques des PFE, et enfin l’encadrant entreprise qui
                        valide la fiche si elle a été éventuellement modifiée sur demande du comité
                        de validation.
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="direction-l">
                      <div class="flag-wrapper">
                        <span class="flag">AFFECTATION ENCADRANT</span>
                        <span class="time-wrapper">
                          <span class="time">2ème étape</span>
                        </span>
                      </div>
                      <div class="desc">
                        Les chefs des départements affectent ensuite les enseignants encadrants.
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="direction-r">
                      <div class="flag-wrapper">
                        <span class="flag">DÉPÔT RAPPORT</span>
                        <span class="time-wrapper">
                          <span class="time">3ème étape</span>
                        </span>
                      </div>
                      <div class="desc">
                        A la fin du stage, l’élève ingénieur dépose son dossier PFE pour valider son
                        stage. Les dépôts des dossiers PFE sont planifiés courant la 1ère semaine
                        des mois de : juin, juillet, septembre, janvier et avril. Le dossier doit
                        comporter 4 copies du rapport de stage de PFE ainsi que le code source, si
                        ce n’est pas confidentiel, et un poster. Pour pouvoir déposer, l’élève
                        ingénieur devrait avoir l’approbation de ses encadrants de l’entreprise et
                        d’ESPRIT.
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="direction-l">
                      <div class="flag-wrapper">
                        <span class="flag">AFFECTATION RAPPORTEUR</span>
                        <span class="time-wrapper">
                          <span class="time">4ème étape</span>
                        </span>
                      </div>
                      <div class="desc">
                        La direction des stages nomme un rapporteur pour évaluer le projet réalisé
                        par l’élève ingénieur.
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="direction-r">
                      <div class="flag-wrapper">
                        <span class="flag">PLANIFICATION SOUTENANCE</span>
                        <span class="time-wrapper">
                          <span class="time">5ème étape</span>
                        </span>
                      </div>
                      <div class="desc">
                        La direction des stages planifie ensuite les soutenances devant le jury, Les
                        stages de PFE valident 30 ECTS.
                      </div>
                    </div>
                  </li>
                </ul>
              </Row>
              <Row className="margin-top-60" style={{ justifyContent: 'center' }}>
                <ImageBox data={corps} />
              </Row>
              <div className="margin-top-60">
                <Row style={{ marginBottom: '60px' }}>
                  <Col>
                    <div className="services-box">
                      <div className="services-box-icon">
                        <div className="services-box-icon-inner">
                          <Icofont className="services-box-fonticon" icon={'icofont-flash'} />
                        </div>
                      </div>
                      <div className="services-box-content">
                        <div className="services-box-desc">
                          <p>
                            Il s’agit d’un espace dédié au rapprochement des entreprises et de nos
                            élèves ingénieurs. Les étudiants peuvent réaliser des stages à partir de
                            projets réels demandés par les entreprises mais délocalisés au sein de
                            l’école. Ils peuvent y travailler pendant les vacances mais cela peut
                            aussi servir de stages de PFE. Ces entreprises peuvent aussi collaborer
                            étroitement avec les enseignant pour la proposition des projets intégrés
                            pour nos étudiants.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
const corps = {
  src: learningFactory,
  alt: 'Learning Factory',
  title: 'Learning Factory',
  text:
    'Actuellement une dizaine d’étudiants réalisent leurs PFE dans ce cadre avec 2 entreprises : 1 entreprise tunisienne et 1 entreprise française.'
};
const breadcrumb = {
  src: breadcrumbbg,
  Title: 'Stages',
  Subtitle: 'Les stages en formation'
};

export default StagesIngenieur;
