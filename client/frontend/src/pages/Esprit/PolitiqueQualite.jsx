import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Col, Row } from 'react-bootstrap';
class PolitiqueQualite extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <section className="our-blog main-blog">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Qualité et amélioration continue</h1>
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
              <div className="section-title text-center">
                <h2>Notre Politique : Qualité et amélioration continue </h2>
                <hr className="custom-hr"></hr>
              </div>
              <Col style={{ marginBottom: '60px' }} className="space-items">
                <p>
                  En se basant sur l’orientation client, notre démarche qualitévise la satisfaction
                  de chacune des parties prenantes d’ESPRIT y compris les élèves Ingénieurs, les
                  personnels, les entreprises, les partenaireset les tutelles (Ministère de
                  l’Enseignement Supérieur et de la Recherche Scientifique, CTI, etc.), tout en se
                  conformant aux normes et valeurs d’éthique, légalité, transparence et efficacité.
                </p>
                <h4>Satisfaction des élèves Ingénieurset des entreprises</h4>
                <ul className="qualite-ul">
                  <li>
                    <p>
                      L’école s’engage à faire bénéficier ses élèves d’un environnement
                      d’apprentissage à la fois favorable et stimulant grâce au déploiement de
                      pédagogies innovantes s’inspirant des méthodes « Active Learning »
                      (apprentissage par résolution des problèmes ou bien par projets collaboratifs,
                      activités de mise en situation, etc.)
                    </p>
                  </li>
                  <li>
                    <p>
                      L’école s’engage à former des ingénieurs immédiatement “opérationnels” et
                      employables par les entreprises, afin de répondre au mieux aux besoins du
                      marché du travail en Tunisie comme à l’international. En plus de ses
                      compétences scientifiques et techniques, un ingénieur opérationnel se
                      distingue par des compétences transversales (personnelles,interpersonnelles et
                      professionnelles).
                    </p>
                  </li>
                  <li>
                    <p>
                      L’écoles’engage à développer chez ses élèves des compétences transversales et
                      des compétences métacognitives en matière de raisonnement critique, activités
                      mentales, argumentation active et maitrise de technologies ou outils
                      industriels, leur permettant ainsi de mettre enœuvre leurs savoirs et
                      savoir-faire avec un degré élevé d’initiative et d’autonomie
                    </p>
                  </li>
                  <li>
                    <p>
                      L’école s’engage à offrir une formation continue de haut niveau à destination
                      du milieu professionnel.
                    </p>
                  </li>
                </ul>
                <h4>Satisfaction du personnel</h4>
                <ul className="qualite-ul">
                  <li>
                    <p>
                      L’école s’engage à maintenirun environnement et des conditions de travail
                      propicesqui stimulent la satisfaction personnelle tout en favorisant le
                      bien-être, l’implication et l’engagement organisationnels, la performance, la
                      transparence, les valeurs partagées, l’orientation client, la communication
                      transversale et le travail collaboratif.
                    </p>
                  </li>
                  <li>
                    <p>
                      L’école s’engage à investir dans la formation, l’accompagnement et le
                      développement professionnel de son personnel (corps enseignant, administratif
                      et technique).
                    </p>
                  </li>
                </ul>
                <h4>Satisfaction des partenaires</h4>
                <ul className="qualite-ul">
                  <li>
                    <p>
                      L’école s’engage à honorer ses obligations envers les établissements et
                      entreprises partenaires en Tunisies et à l’étranger.
                    </p>
                  </li>
                  <li>
                    <p>
                      L’école s’engage à respecter les termes des accords signés avec ses
                      partenaires dans le cadrede conventions de coopération, cotutelle, mobilité,
                      double diplômes, R&DI, etc.
                    </p>
                  </li>
                </ul>
                <h4>Satisfaction de la tutelle</h4>
                <ul className="qualite-ul">
                  <li>
                    <p>
                      L’école s’engage à honorer ses obligations envers ses organismes de tutelle,
                      de respecter la réglementation en vigueur, de leur fournir sur demande la
                      coopération nécessaire et de prendre les mesures correctives pour remédier les
                      défaillances ou manquements soulevésafin de satisfaire les exigences
                      d’accréditation.
                    </p>
                  </li>
                </ul>
                <h4>Cycle d’amélioration continue</h4>
                <p>
                  L’organisation de qualité est orienté processus et se base sur des objectifs qui
                  sont rattachés à des activités, ressources et indicateurs mesurables. Afin de
                  placer ESPRIT sur la pente de progrès continue, l’école a adopté une démarche
                  d’amélioration continue comme illustrée par la figure ci-dessous. Ce cycle
                  d’amélioration continu est basé sur la méthode PDCA et la norme ISO 9001 :2008 et
                  il est bouclé par des remédiations correctives.
                </p>
              </Col>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PolitiqueQualite;
