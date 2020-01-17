import React, { Component } from 'react';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import photo1 from '../../../assets/img/TEF.png';
import photo2 from '../../../assets/img/espritELC.jpg';
import { Row, Col, Card } from 'react-bootstrap';
import InformationBox from '../../../components/InformationBox';
import DownloadButton from '../../../components/DownloadButton';
import downloadsrc from '../../../assets/img/download.ico';
import Icofont from 'react-icofont';
class TEFTFAQ extends Component {
  render() {
    const renderedData = servicesData.map((service, index) => (
      <div className="col-md-6 text-center" key={index}>
        <div className="service-item">
          <div className="glyph">
            <Icofont icon={service.icon} />
          </div>
          <h3>{service.heading}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    ));
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
                    Les Tests d’Évaluation de Français (TEF) sont des instruments de référence
                    internationaux pour mesurer les compétences de français en :
                  </p>
                  <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                    <li>compréhension orale ;</li>
                    <li>expression orale ;</li>
                    <li>compréhension écrite ;</li>
                    <li>expression écrite.</li>
                  </ul>
                  <p>
                    <strong>Ils bénéficient de la reconnaissance :</strong>
                  </p>
                  <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                    <li>Du ministère français de l’éducation nationale ;</li>
                    <li>
                      Du gouvernement fédéral canadien pour l'évaluation linguistique des candidats
                      à l'immigration vers ce pays (catégorie "travailleurs qualifiés") ;
                    </li>
                    <li>Du Ministère Immigration et communautés culturelles du Québec ;</li>
                    <li>De nombreuses entreprises et institutions éducatives francophones ;</li>
                  </ul>
                  <p>
                    Le manuel du candidat est téléchargeable via le lien suivant :
                    <a
                      href="http://www.centredelanguefrancaise.paris/tests-diplomes/test-evaluation-francais-tef/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://www.centredelanguefrancaise.paris/tests-diplomes/test-evaluation-francais-tef/
                    </a>
                  </p>
                  <p>
                    Nous vous conseillons également l’application android 3 en 1 pour tester votre
                    niveau de français général, renforcer votre français professionnel
                  </p>
                  <p>Pour télécharger l'application, cliquez-ici :</p>
                  <p>
                    <a
                      href="http://www.centredelanguefrancaise.paris/ressources/entrainer-francais-professionnel/francais-3-0/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://www.centredelanguefrancaise.paris/ressources/entrainer-francais-professionnel/francais-3-0/
                    </a>
                  </p>
                </Col>
                <Col md={3}>
                  <Row>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo2} />
                    </Card>
                  </Row>
                  <Row className="margin-top-60">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo1} />
                    </Card>
                  </Row>
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
              <Row className="margin-top-60">
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Démarches à suivre</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <ul className="qualite-ul">
                    <li>
                      consulter le site de façon régulière pour vérifier la disponibilité des
                      sessions.
                    </li>
                    <li>
                      Choisir une date selon le calendrier affiché sur le site en vérifiant la
                      disponibilité des places au : <strong>70 250 064</strong>
                    </li>
                    <li>
                      Confirmer son inscription sur place muni des documents demandés.Les candidats
                      sont invités à suivre scrupuleusement les démarches suivantes sous peine de
                      rejet de leur candidature.
                    </li>
                    <li>
                      Lire/télécharger le document relatif aux conditions d'inscription et de
                      passation du test.
                    </li>
                  </ul>
                  <p>
                    Une convocation vous sera remise suite à votre inscription précisant la date, le
                    lieu et l’heure auxquels vous devez vous présenter afin de passer le test à la
                    session convenue.
                  </p>
                </Col>
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Pièces à fournir pour chaque candidat</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p>
                    L’aspect international peut intervenir dans le cursus même des étudiants
                    d’Esprit grâce à la mobilité et l’expérience à l’internationale :
                  </p>
                  <ul className="qualite-ul">
                    <li>photocopie de la CIN ou PASSEPORT.</li>
                    <li>
                      Reçu de versement des frais du test auprès de{' '}
                      <strong>AMEN BANQUE /Agence: CHARGUIA 2</strong>. Le RIB vous sera communiqué
                      après vérification de la disponibilité des places.
                    </li>
                    <li>
                      Le formulaire d’inscription (à remplir sur place le jour de votre
                      inscription).
                    </li>
                    <li>
                      Une adresse e-mail personnelle valide <strong>(OBLIGATOIRE)</strong> à
                      préciser dans le formulaire d’inscription afin de recevoir un lien vous
                      permettant d’accéder directement et plus rapidement à votre attestation de
                      résultats au Test d’évaluation de français.
                    </li>
                  </ul>
                  <p>Les Frais sont détaillés comme suit :</p>
                  <ul className="qualite-ul">
                    <li>
                      <strong>1 épreuves : 210 DT</strong>
                    </li>
                    <li>
                      <strong>2 épreuves : 400 DT</strong>
                    </li>
                    <li>
                      <strong>3 épreuves : 500 DT</strong>
                    </li>
                    <li>
                      <strong>4 épreuves : 600 DT</strong>
                    </li>
                  </ul>
                  <p>
                    <strong>NB : Les frais d’inscription ne sont pas remboursables.</strong>
                  </p>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={6}>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Conditions d'inscription et de passation</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <DownloadButton data={download} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <div style={{ display: 'flow-root' }}>
                    <h3 style={{ color: '#cd2122' }}>Calendrier Tef&Tefaq</h3>
                    <hr className="custom-hr" style={{ float: 'left' }}></hr>
                  </div>
                  <br />
                  <p>
                    Selon les dates affichées ci-dessous et dans la limite des places disponibles :
                  </p>
                  <Row>
                  {renderedData}
                  </Row>
                  <p>
                    <strong style={{ color: 'red' }}>
                      N.B : Les inscriptions aux tests se font sur place au 18, rue de l'Usine,
                      Charguia II
                    </strong>
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
const breadcrumb = {
  Title: 'TEF & TEFAQ',
  Subtitle: 'LE TEST TEF & TEFAQ'
};
const first = {
  title: 'Passation des épreuves',
  subtitle: 'Où ?',
  description: [
    'Les épreuves se dérouleront',
    <strong>à ESPRIT LANGUAGE CENTER au 18 Rue de l'usine Charguia II - 2035- Ariana</strong>
  ]
};
const second = {
  title: 'Résultats et attestations',
  subtitle: '',
  description: [
    'Pour des sessions planifiées à partir du ',
    <strong>1er novembre 2016, la CCIP</strong>,
    ' procèdera à la dématérialisation des attestations de résultats des tests suivants :',
    <br />,
    <strong> Le Test d'évaluation de français pour l'accès au Québec (TEFAQ)</strong>,
    <br />,
    <strong>Le Test d'évaluation de français pour la naturalisation.</strong>,
    <br />,
    "A compter de cette date les candidats aux sessions de ces deux tests ne recevront plus d'attestation papier. Les candidats souhaitant obtenir une attestation papier en plus de leur attestation dématérialisée pourront commander ce document sur la boutique en ligne au tarif de 50 euros.",
    <br />,
    <a href="http://www.boutique.cci-paris-idf.fr/" target="_blank" rel="noopener noreferrer">
      http://www.boutique.cci-paris-idf.fr/
    </a>,
    <br />,
    'Aucune modification ne pourra être apportée sur les attestations de résultats une fois éditées ou mise en ligne, en dehors des corrections demandées le ',
    <strong>JOUR DU TEST.</strong>
  ]
};
const forth = {
  title: 'CONTACT',
  subtitle: '',
  description: [
    <a href="mailto:elc@esprit.tn " target="_blank" rel="noopener noreferrer">
      elc@esprit.tn
    </a>,
    <br />,
    <strong>Tél : 70 250 064</strong>
  ]
};
const third = {
  title: 'Modalités d’inscription',
  subtitle: '',
  description: [
    <strong>Horaires des inscriptions : Du Lundi au Vendredi 8H30-12H et de 13H-15H</strong>,
    <br />,
    <strong> Horaires séance unique: Du Lundi au Vendredi 8H-12H</strong>,
    <br />,
    <strong>Délai de carence : </strong>,
    "la passation des épreuves du Test d'évaluation de français est soumise au respect d'un délai de carence de deux mois minimum entre deux sessions. Le cas échéant, l’inscription sera rejetée par la CCIP."
  ]
};
const download = {
  link:
    'http://esprit.tn/wp-content/uploads/2018/01/2018-Conditions-inscription-et-passation-du-TEF.pdf',
  text: 'DOWNLOAD',
  src: downloadsrc
};
const servicesData = [
  {
    icon: 'icofont-calendar',
    heading: 'TEF Canada : 08 février 2020',
    description: 'Avancement des Inscriptions : ouvertes'
  },
  {
    icon: 'icofont-calendar',
    heading: 'TEFAQ (Accès Québec) : 22 février 2020',
    description: 'Avancement des Inscriptions : ouvertes'
  }
];
export default TEFTFAQ;
