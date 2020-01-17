import React, { Component } from 'react';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import { Row, Col } from 'react-bootstrap';
import breadcrumbbg from '../../../assets/img/specialites.jpg';
import 'react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video';
class SpecialiteEtOptions extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  setActive(id) {
    var elem = document.getElementsByClassName('section--active');
    if (elem) {
      elem[0].classList.remove('section--active');
      document.getElementById(id).classList.add('section--active');
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Spécialités Et Options</h1>
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
                <Col md={9}>
                  <p>
                    S'appuyant sur une recherche de haut niveau, les enseignements se caractérisent
                    par la richesse, la qualité et l'innovation pédagogique.
                  </p>
                  <p>
                    Les spécialités répondent parfaitement à la diversification croissante des
                    métiers de la société de l'information.
                  </p>
                  <p>
                    Un accent tout particulier est mis sur les qualités humaines, la maîtrise du
                    management, la capacité à travailler dans un contexte pluriculturel et la
                    responsabilisation face à la puissance des technologies dont les diplômés
                    d’Esprit seront experts.
                  </p>
                </Col>
                <Col>
                  <section className="video-area-custom video-bg-bal">
                    <div className="diplay-table">
                      <div className="display-table-cell">
                        <div className="video-inner-content" style={{ marginTop: '0px' }}>
                          <div className="button__holder">
                            <ModalVideo
                              channel="youtube"
                              isOpen={this.state.isOpen}
                              videoId="ZzWlMZRRj4w"
                              onClose={() =>
                                this.setState({
                                  isOpen: false
                                })
                              }
                            />
                            <span onClick={this.openModal} className="plus popup-youtube"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <div>
          <nav className="nav nav--active">
            <ul className="nav__list">
              <li className="nav__item color1">
                <button onClick={e => this.setActive('TIC')} href="#" className="nav__link">
                  <div className="nav__thumb " data-letter="TIC"></div>
                  <p className="nav__label">Tronc commun</p>
                </button>
              </li>
              <li className="nav__item color2">
                <button onClick={e => this.setActive('TICIT')} className="nav__link">
                  <div className="nav__thumb " data-letter="IT"></div>
                  <p className="nav__label">IT 2ème cycle</p>
                </button>
              </li>
              <li className="nav__item color3">
                <button onClick={e => this.setActive('TICTC')} className="nav__link">
                  <div className="nav__thumb " data-letter="TC"></div>
                  <p className="nav__label">TC 2ème cycle</p>
                </button>
              </li>
              <li className="nav__item color4">
                <button onClick={e => this.setActive('GC')} className="nav__link">
                  <div className="nav__thumb " data-letter="GC"></div>
                  <p className="nav__label">Genie Civil</p>
                </button>
              </li>
              <li className="nav__item color5">
                <button onClick={e => this.setActive('GEC')} className="nav__link">
                  <div className="nav__thumb " data-letter="GE1"></div>
                  <p className="nav__label">GE tronc commun</p>
                </button>
              </li>
              <li className="nav__item color6">
                <button onClick={e => this.setActive('GE')} className="nav__link">
                  <div className="nav__thumb " data-letter="GE"></div>
                  <p className="nav__label">GE 2ème cycle</p>
                </button>
              </li>
            </ul>
          </nav>
          <div className="page">
            <section className="section section--active " id="TIC" data-letter="TIC">
              <article className="section__wrapper color1">
                <h1 className="section__title">TIC : tronc commun : 1er & 2ème cycle</h1>
                <Row>
                  <Col md={6}>
                    <h3>1ère année - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-ects="8ECTS"
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            aria-expanded="true"
                          >
                            UE : Programmation Procédurale 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in" aria-expanded="true">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Programmation Procédurale 1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-ects="8ECTS"
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            aria-expanded="true"
                          >
                            UE : Mathématiques de base 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in" aria-expanded="true">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mathématiques de base 1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="4ECTS"
                          >
                            UE : Logiciels de base &amp; Multimédia
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Logiciels de base &amp; Multimédia</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="5ECTS"
                          >
                            UE : Systèmes et Réseaux
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Systèmes et Réseaux</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="5ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté F1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; F1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="5ECTS"
                          >
                            UE : Programmation Procédurale 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Programmation Procédurale 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="8ECTS"
                          >
                            UE : Mathématique de base 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mathématique de base 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="5ECTS"
                          >
                            UE : Électronique 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Électronique 1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="7ECTS"
                          >
                            UE : Projet 1A
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 1A</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="5ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div className="acc-content row" data-droplevel="1">
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; A1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <h3>2ème Année A - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="6.5ECTS"
                          >
                            UE : Modélisation et programmation par objet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Programmation Orientée Objet (C++)</li>
                                  <li>Introduction à la modélisation des SI</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6.5ECTS"
                          >
                            UE : Projet C++
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet C++</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4ECTS"
                          >
                            UE : Bases de Données
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Bases de Données</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8ECTS"
                          >
                            UE : Mathématiques de base 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mathématiques de base 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov collapsed"
                            data-ects="5ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; A2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4ECTS"
                          >
                            UE : Architecture des microcontrôleurs
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Architecture des microcontrôleurs</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="9ECTS"
                          >
                            UE : Projet Technologies Web
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet Technologies Web</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6ECTS"
                          >
                            UE : Réseaux de communication
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Réseaux de communication</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6ECTS"
                          >
                            UE : Mathématiques de base 4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mathématiques de base 4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté F2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div className="col-md-12 col-sm-12  " data-droplevel="2">
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté &nbsp;F2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h3>2ème année P - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="9&nbsp;ECTS"
                          >
                            UE : Programmation procédurale et projet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Algorithmique et Structures de Données</li>
                                  <li>Projet programmation C</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Systèmes de base
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Initiation aux systèmes d'exploitation Unix</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4 ECTS"
                          >
                            UE : Algèbre
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Algèbre</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; A2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Electronique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Electronique analogique</li>
                                  <li>Electronique numérique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Réseaux de communication
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Réseaux de communication</li>
                                  <li>Réseaux locaux d'entreprises</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Modélisation et programmation par objet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Programmation Orientée Objet (C++)</li>
                                  <li>Introduction à la modélisation des SI</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Architecture des microcontrôleurs et Projet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Architecture des microcontrôleurs et Projet</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Bases de données
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Bases de données</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Technologies Web
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Technologies Web</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Analyse
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Analyse</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté F2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; F2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <h3>3ème Année A - élèves issus de 2A et 2P - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="10&nbsp;ECTS"
                          >
                            UE : Modélisation et Programmation Objet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Langage de programmation C#</li>
                                  <li>Langage de Modélisation (UML)</li>
                                  <li>Conception par Objet et Programmation Java</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; A3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Administration &amp; sécurité des SE (Unix)
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Administration &amp; sécurité des SE (Unix)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3 ECTS"
                          >
                            UE : Probabilité &amp; Statistiques
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Probabilité &amp; Statistique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Réseau IP et routage
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Interconnexion des réseaux</li>
                                  <li>Atelier réseau 1 (42h)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Théorie des langages
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Théorie des langages</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="2&nbsp;ECTS"
                          >
                            UE : Génie logiciel
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Génie logiciel &amp; atelier GL</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Développement web &amp; mobile
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Sys. De Gestion de Bases de Données</li>
                                  <li>Technologies Web 2.0</li>
                                  <li>Programmation des terminaux mobiles</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : PI web mobile
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet développement Web Java</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté F3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; F3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Mathématiques pour l'ingénieur
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Compléments de Mathématique</li>
                                  <li>Analyse de Fourrier</li>
                                  <li>Analyse numérique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Management de l'Entreprise
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Analyse et Décisions Financières</li>
                                  <li>Environnement de l'Entreprise</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h3>3ème Année B - élèves issus de filières non TIC - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            Semestre-7 UE : Programmation modulaire et projet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Algorithmique et Structures de Données</li>
                                  <li>Projet programmation C</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            Semestre-7 UE : Systèmes de Base
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Administration et Sécurité des SE Unix</li>
                                  <li>Initiation aux systèmes d'exploitation Unix</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            Semestre-7 UE : Electronique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Electronique P</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            Semestre-7 UE : Réseaux de communication
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Techniques et technologies de communication</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            Semestre-7 UE : Probabilité &amp; Statistiques
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Techniques d'estimation pour l'ingénieur</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            Semestre-7 UE : Communication, Culture et Citoyenneté A3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; A3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="2&nbsp;ECTS"
                          >
                            Semestre-7 UE : Thechnologie web1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Thechnologie web1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="29&nbsp;ECTS"
                          >
                            Semestre 7 - Total
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            Semestre-8 UE : Bases de données et SGBD
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Bases de données et SGBD</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            Semestre-8 UE : Modélisation et programmation par objet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Langage de Modélisation (UML)</li>
                                  <li>Programmation Orientée Objet (Java)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            Semestre-8 UE : Mathématiques pour l'ingénieur
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Méthodes numériques pour l'ingénieur</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            Semestre-8 UE : Réseaux de communication
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Réseaux et protocoles TCP/IP</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            Semestre-8 UE : Architecture des Microcontrôleurs
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Architecture des microcontrôleurs</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            Semestre-8 UE : Management de l'Entreprise
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Analyse et évaluation financière</li>
                                  <li>Environnement de l'Entreprise</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            Semestre-8 UE : Communication, Culture et Citoyenneté F3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté&nbsp; F3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="2&nbsp;ECTS"
                          >
                            Stage
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Stage</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button text-custom-child-hov"
                            data-ects="31&nbsp;ECTS"
                          >
                            Semestre 8 - Total
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="col-md-12 col-sm-12 zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </article>
            </section>
            <section className="section" id="TICIT" data-letter="IT">
              <article className="section__wrapper color2">
                <h1 className="section__title">Spécialité Informatique</h1>
                <p style={{ color: 'white', fontSize: '16px' }}>
                  Maitrise des techniques du génie logiciel (méthodes, langages et outils) et de
                  l'interaction utilisateur pour la conception des logiciels embarqués et des
                  systèmes d'information. Acquisition des compétences sur la conception et le
                  déploiement de systèmes et réseaux à l’interface logiciel/matériel. La spécialité
                  informatique se divise en 1 er cycle tronc commun avec la spécialité
                  télécommunication et un deuxième cycle composé de différents parcours qui
                  représentent des options.
                </p>
                <Row style={{ marginBottom: '40px' }}>
                  <Col md={6}>
                    <h1>Parcours INF (cursus B)</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Le parcours <strong>INF</strong> est obligatoire pour les étudiants du cursus
                      B, c’est-à-dire les étudiants ayant intégré esprit en 3ème année à partir
                      d’une licence autre qu’informatique.
                    </p>
                    <section className="video-area-custom video-bg-infb">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="73yfrxHY3mE"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                  <Col md={6}>
                    <h1>Option ERP (Entreprise Resource Planning)/Business Intelligence</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Les objectifs de l'option <strong>ERP/ BI Business Intelligence</strong> sont
                      : amener les étudiants à être compétents dans la création de « Data Warehouse
                      » (entrepôts de données) , la compréhension des cycles décisionnelles
                      (architecture BI), la conception de la « data Warehouse », les packages pour
                      l’extraction et le chargement des données, et la création des rapports.{' '}
                    </p>
                    <section className="video-area-custom video-bg-erp">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="_yEeNDuENfI"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                </Row>
                <Row style={{ marginBottom: '40px' }}>
                  <Col md={6}>
                    <h1>Option GENIE Logiciel</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Les objectifs de l'option<strong>&nbsp;GL&nbsp;</strong>sont :
                    </p>
                    <ul>
                      <li style={{ color: 'white', fontSize: '16px' }}>
                        Maitriser les <strong>étapes de développement </strong>d’un logiciel.
                      </li>
                      <li style={{ color: 'white', fontSize: '16px' }}>
                        Avoir une initiation aux <strong>bonnes pratiques </strong>de développement
                        d’un logiciel (critères de qualité, patrons architecturaux, patrons de
                        conception, etc.).
                      </li>
                      <li style={{ color: 'white', fontSize: '16px' }}>
                        Développer des logiciels répondant&nbsp; à des{' '}
                        <strong>normes qualité</strong>.
                      </li>
                      <li style={{ color: 'white', fontSize: '16px' }}>
                        Se familiariser avec les{' '}
                        <strong>architectures et composants logiciels</strong>.
                      </li>
                      <li style={{ color: 'white', fontSize: '16px' }}>
                        Mettre en œuvre des <strong>architectures systèmes et réseaux</strong>.
                      </li>
                    </ul>
                    <section className="video-area-custom video-bg-gl">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="uC5Zga6GDGU"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                  <Col md={6}>
                    <h1>Option InFinI (Informatique Financière) </h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Les objectifs de l'option<strong> InFinI&nbsp;</strong>sont :
                    </p>
                    <ul>
                      <li style={{ color: 'white', fontSize: '16px' }}>
                        Former des informaticiens de haut niveau maîtrisant parfaitement les
                        concepts et outils mathématiques nécessaires à la conception et à la
                        réalisation des systèmes d'information financiers et bancaires.
                      </li>
                      <li style={{ color: 'white', fontSize: '16px' }}>
                        Posséder les connaissances mathématiques et financières nécessaire à la mise
                        en place de systèmes d'information dans les secteurs de la banque, de
                        l'assurance et de la finance.
                      </li>
                    </ul>
                    <section className="video-area-custom video-bg-infini">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="_c2Wa22vt9Q"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                </Row>
                <Row style={{ marginBottom: '40px' }}>
                  <Col md={6}>
                    <h1>Option TWIN (Technologies du Web et de l’Internet)</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      L'objectif de l'option <strong>TWIN</strong> est de faire des professionnels
                      du Web et de l’Internet en approfondissant les domaines suivants :
                      Environnement et développement des derniers framework et des bonnes pratiques,
                      connaissance des langages de développement du Web les plus répandus sur le
                      marché, mise ne place de configurations Web de haute performance, acquisitions
                      de techniques liées à l’usage.
                    </p>
                    <section className="video-area-custom video-bg-twin">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="mbHybO2G1T0"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                  <Col md={6}>
                    <h1>Option ArTIC (Architecture IT & Cloud Computing)</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Approfondir les connaissances des ingénieurs d’ESPRIT et de les orienter vers
                      le métier d’IT grâce à des compétences en :​
                    </p>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      ​Virtualisation des infrastructures serveurs​, Backup, Storage, Big Data​,
                      Sécurité du Cloud Computing, Scripting et automatisation​, Développent JEE,
                      .Net, Web Service orienté SaaS​.
                    </p>
                    <section className="video-area-custom video-bg-artic">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="-BOpcwXNc1k"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                </Row>
                <Row style={{ marginBottom: '40px' }}>
                  <Col md={6}>
                    <h1>Option SIM (Systèmes Informatiques et Mobiles)</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Les étudiants <strong>SIM</strong> ont l’avantage de suivre en extra de leur
                      formation comme ingénieurs informatiques, des cours avancés dans les systèmes
                      d'exploitation mobiles : Android,iOS,Windows Phone, Tizen, Cross-Platfom,
                      développement de jeux vidéo (Unity)
                    </p>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Les notions enseignées sont mises en pratiques dans la réalisation des
                      mini-projets et d’un projet intégré Mobile. Ce dernier est publiée sur les
                      markets officiels (Samsung Apps, AppWorld, AppStore,…) comme un critère
                      d’évaluation pour le projet afin de garantir un minimum de qualité de
                      réalisation.{' '}
                    </p>
                    <section className="video-area-custom video-bg-sim">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="KAOo8Z0d-5A"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                  <Col md={6}>
                    <h1>Option NIDS ( Network Infrastructure and Data Security )</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Former les étudiants à étudier, concevoir et déployer des solutions de
                      sécurité selon les dernières normes et méthodologies qui leurs permettront
                      d’évoluer dans un domaine en perpétuelle.
                    </p>{' '}
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Former des ingénieurs qualifiés en mesure d'appréhender les problématiques
                      liées à la:
                    </p>{' '}
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      - Sécurité des infrastructures réseaux
                    </p>{' '}
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      - Sécurité des systèmes d'information
                    </p>{' '}
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      La force de l’option NIDS est d’apporter en deux années une culture de
                      sécurité des systèmes d’information et réseaux tant sur le plan technique
                      qu’organisationnel.
                    </p>
                    <section className="video-area-custom video-bg-nids">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="IbzVf7ZMtKM"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                </Row>
                <Row style={{ marginBottom: '40px' }}>
                  <Col md={6}>
                    <h1>Option SLEAM (Systèmes et Logiciels Embarqués Ambiants et Mobiles)</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      L’option SLEAM offre aux étudiants qui possèdent des connaissances en
                      informatique et une base solide en développement logiciel, une spécialisation
                      pour la conception de nouveaux services et applications dans le domaine de
                      l’Informatique Ambiante et Mobile.
                    </p>{' '}
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Cela passe par l’expertise dans la conception d’applications logicielles
                      distribuées et embarquées, Une maîtrise des Technologies (Embarqué – Système –
                      Réseau) nécessaires à la conception, à la spécification et au prototypage de
                      nouveaux services Embarqués, ambiants et mobiles, et Une sensibilité au Design
                      d’Espace Interactifs et d’Objets Communicants.
                    </p>
                    <section className="video-area-custom video-bg-sleam">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="0AVMG6xK91I"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                </Row>
              </article>
            </section>
            <section className="section" id="TICTC" data-letter="TC">
              <article className="section__wrapper color3">
                <h1 className="section__title">Spécialité Télécommunications</h1>
                <p style={{ color: 'white', fontSize: '16px' }}>
                  Participer à l'optimisation des systèmes de communication, de la recherche à la
                  conception d'équipements et de services en passant par la gestion
                  d'infrastructures réseaux.
                </p>
                <Row>
                  <Col md={6}>
                    <h1>Option IRT (Intégration Réseau & Télécommunications)</h1>
                    <br></br>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      L’objectif de la formation est de former des ingénieurs qui pourront analyser
                      les besoins du client sur le plan technique, évaluer la faisabilité de
                      l’affaire.
                    </p>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Mettre en œuvre des projets et assurer leurs suivis, piloter la construction
                      d’un réseau superviser les performances de service du réseau, résoudre les
                      dysfonctionnements participer à l’élaboration de l’offre commerciale organiser
                      et construire les réponses aux appels d’offres, définir une stratégie de
                      tests, Assurer le transfert des compétences aux équipes de production.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <section className="video-area-custom video-bg-tic">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="jc_88Dlwfm8"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                </Row>
              </article>
            </section>
            <section className="section" id="GC" data-letter="GC">
              <article className="section__wrapper color4">
                <h1 className="section__title">Génie Civil 1er et 2ème cycles</h1>

                <Row>
                  <Col>
                    <h3>1GC - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="7&nbsp;ECTS"
                          >
                            Math 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths 1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Physique 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Thermodynamique</li>
                                  <li>Circuits Électriques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Architecture et urbanisme
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Architecture</li>
                                  <li>Urbanisme</li>
                                  <li>Dessin Technique et Technologie de construction</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Projet GC1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>PROJET INTRODUCTION AU GC</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Math 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Math 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Physique 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Ondes &amp; vibration</li>
                                  <li>Chimie</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet GC2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet Matériaux de construction</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Mécanique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Cinématique</li>
                                  <li>Statique I</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Techniques multimédia</li>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>2GC - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Maths 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Programmation
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Algorithmique et programmation</li>
                                  <li>Projet programmation</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Mécanique 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>MMC</li>
                                  <li>Statique II</li>
                                  <li>Mécanique des fluides</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Matériaux
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Matériaux de construction</li>
                                  <li>Atelier Matériaux de construction</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Maths 4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths 4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Mécanique 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique générale</li>
                                  <li>Théorie des structures I</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Science de la terre
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Identification des sols</li>
                                  <li>Géologie de l'ingénieur</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Dessins et mesures
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Topographie</li>
                                  <li>TP Topographie</li>
                                  <li>DAO</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Habitat
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Physique des bâtiments</li>
                                  <li>Domotique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Projet Biblio
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet bibliogrpahique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté 4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>3GCA 2016/2017 - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Maths 5
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Proba et stat</li>
                                  <li>Maths</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Théorie des Structures
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Atelier théorie des structures II</li>
                                  <li>Théorie des structures II</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : BTP
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Procédés généraux de construction</li>
                                  <li>Routes I</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Mécanique des sols I
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique des sols I</li>
                                  <li>Atelier Mécanique des Sols</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Gestion des projets et management
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Environnement de l'entreprise</li>
                                  <li>Analyse financière</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                          >
                            UE : Communication, culture et citoyenneté
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                            data-ects="3&nbsp;ECTS"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Maths appliqué
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Analyse Numérique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Ossature des bâtiments I
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Béton I</li>
                                  <li>Atelier Béton</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Routes
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Routes II</li>
                                  <li>BE Routes</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Mécanique des sols II
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique des sols II</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Hydraulique et hydrologie
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Hydraulique générale</li>
                                  <li>Atelier Hydraulique</li>
                                  <li>BE Hydrologie</li>
                                  <li>Hydrologie</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>3GCB 2016/2017 - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Maths 5
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Probabilités et statistiques</li>
                                  <li>Maths</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Théorie des Structures
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Statique</li>
                                  <li>Théorie des structures I</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Mécanique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>MMC</li>
                                  <li>Mécanique des fluides</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="1&nbsp;ECTS"
                          >
                            UE : Dessin technique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>DAO</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Matériaux
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Matériaux de construction</li>
                                  <li>Atelier Matériaux de construction</li>
                                  <li>Géologie de l'ingénieur</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="2&nbsp;ECTS"
                          >
                            UE : Projet bibliographique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet bibliographique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté (CCCA3)
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Maths appliqué 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Analyse Numérique</li>
                                  <li>Algorithmique et programmation</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Travaux publics
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Routes</li>
                                  <li>Procédés généraux de construction</li>
                                  <li>Topographie</li>
                                  <li>Atelier Topographie</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Mécanique des sols I
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique des sols I</li>
                                  <li>Atelier Mécanique des sols</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Ossature des bâtiments I
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Béton I</li>
                                  <li>Atelier Béton</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté (CCCF3)
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Gestion des projets et management
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Environnement de l'entreprise</li>
                                  <li>Analyse financière</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>4GCA - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Maths appliqués 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Recherche opérationnelle</li>
                                  <li>Éléments finis</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Hydraulique Urbaine
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Assainissement urbain</li>
                                  <li>Alimentation en eau potable</li>
                                  <li>Atelier Hydraulique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Ouvrages d'art I
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Ouvrages d'art I</li>
                                  <li>Ouvrages d'Art</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Oussature des batiments II
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Béton II</li>
                                  <li>Charpente métallique I</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Système de fondation
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>BE Systèmes de fondations</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Ouvrages d'art II
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>BE Ouvrage d'Art</li>
                                  <li>Béton précontraint</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Charpente métallique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Chapente métallique II</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Gestion et pathologie des Ouvrages
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Pathologie des ouvrages</li>
                                  <li>Gestion des ouvrages</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Projet Bâtiment
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Bureau d'étude Bâtiment</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Gestion des projets et management
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Gestion des projets</li>
                                  <li>Environnement de l'entreprise</li>
                                  <li>Analyse financière</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Sécurité et confort
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Sécurité BTP</li>
                                  <li>Isolation acoustique &amp; thermique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>4GCB - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Maths appliqué 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Éléments finis</li>
                                  <li>Recherche opérationnelle</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Structure
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Théorie des structures II</li>
                                  <li>Atelier Théorie des structures</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Gestion des ouvrages
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Gestion des ouvrages</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Ossature des bâtiments II
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Béton II</li>
                                  <li>Construction métallique I</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Hydraulique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Hydraulique générale</li>
                                  <li>BE Hydrologie</li>
                                  <li>Hydrologie</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Projet Routes
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>BE Routes</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Projet Bâtiment
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>BE bâtiment</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyennité
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="9&nbsp;ECTS"
                          >
                            UE : Ossature
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Béton précontraint</li>
                                  <li>Contruction métallique II</li>
                                  <li>Ouvrages d'Art</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Hydraulique urbaine
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Assainissement urbain</li>
                                  <li>Alimentation en eau potable</li>
                                  <li>Atelier hydraulique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Gestion des projets et management
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Gestion des projets</li>
                                  <li>Environnement de l'entreprise</li>
                                  <li>Analyse financière</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Géotechnique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>BE Systèmes de fondations</li>
                                  <li>Mécanique des sols II</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>5GCA - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : QHSE
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Qualité Hygiène Sécurité Environnement (QHSE)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Francais</li>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="9&nbsp;ECTS"
                          >
                            UE : Conception et calcul des ossatures
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>BE Charpente métalliques</li>
                                  <li>BE Béton précontraint</li>
                                  <li>CEBA ( conception élement beton armé)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Géomatique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>SIG</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="2&nbsp;ECTS"
                          >
                            UE : Installation électrique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Installations électriques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Ouvrages hydrauliques
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Ouvrages hydrauliques</li>
                                  <li>BE Hydrologie</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>5GCB - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Conception et calcul des ossatures
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>CEBA ( conception élement beton armé)</li>
                                  <li>BE Béton précontraint</li>
                                  <li>BE Constructions métalliques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Ouvrages d'art
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>BE Ouvrage d'Art</li>
                                  <li>Ouvrages Hydrauliques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Géomatique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>SIG</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : QHSE
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Qualité Hygiène Sécurité Environnement (QHSE)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="2&nbsp;ECTS"
                          >
                            UE : Installation électrique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Installations électriques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in ">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className="   col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Francais</li>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </article>
            </section>
            <section className="section " id="GEC" data-letter="GEC">
              <article className="section__wrapper color5">
                <h1 className="section__title">Génie Electromécanique</h1>
                <Row>
                  <Col>
                    <h3>1er cycle Tronc commun - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Maths de base 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-8 col-sm-8   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths de base 1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="9&nbsp;ECTS"
                          >
                            UE : Physique-Chimie
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Électrostatique</li>
                                  <li>Electromagnétisme</li>
                                  <li>Chimie des matériaux</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Dessin technique et CAO
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Dessin technique et CAO</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Electronique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Electronique</li>
                                  <li>Systèmes logiques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 1 intégration à l'EM
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Système électrique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté F1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, culture et citoyenneté&nbsp; F1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Maths de base 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths de base 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Mécanique générale
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique générale</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 2 intégration à l'EM
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Système mécanique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté A1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, culture et citoyenneté &nbsp;A1</li>
                                  <li>Technique multimédia</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>2 ème Année EM A - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Maths de base 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths de base 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Informatique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Préparation à la certification</li>
                                  <li>Base de données</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Dessin technique et CAO
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Dessin technique et CAO</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Outils numériques pour l'ingénieur
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Atelier de calcul scientifique</li>
                                  <li>Programmation C</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Electrotechnique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Electrotechnique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté A2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Maths de base 4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths de base 4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Electronique et instrumentation
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Systèmes logiques</li>
                                  <li>Instrumentation</li>
                                  <li>Projet Instrumentation &amp; électronique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Mécanique des poutres élastiques
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Dynamique</li>
                                  <li>Mécanique des poutres élastiques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Transfert et Ecoulement
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique des fluides</li>
                                  <li>Thermodynamique</li>
                                  <li>Transfert de chaleur</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté F2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>2 ème Année EM P - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Maths de base 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths de base 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Informatique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>C2I&nbsp;: Préparation à la certification</li>
                                  <li>Base de données</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Dessin technique et CAO
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Dessin Technique et CAO</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Mécanique des poutres élastiques
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique des poutres élastiques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Mécanique générale
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique générale</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Electronique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Electronique</li>
                                  <li>Systèmes logiques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté A2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Maths de base 4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths de base 4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Outils numériques pour l'ingénieur
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Atelier de calcul scientifique</li>
                                  <li>Algorithmique et programmation</li>
                                  <li>Projet de programmation C</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Electrotechnique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Electrotechnique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Instrumentation
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Instrumentation</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Transfert et Ecoulement
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique des fluides</li>
                                  <li>Thermodynamique</li>
                                  <li>Transfert de chaleur</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté F2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>3 ème Année EM A - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Signaux, systèmes et commande
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Traitement du signal</li>
                                  <li>Math pour l'ingénieur</li>
                                  <li>Systèmes asservis linéaires continus (SALC)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Conception mécanique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Conception Mécanique</li>
                                  <li>Atelier Conception Mécanique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Fabrication mécanique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Procédé d'usinage et Bureau de méthodes</li>
                                  <li>Obtention de brut</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Matériaux
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Matériaux</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Innovation et Entreprenariat
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Innovation et Entreprenariat</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, culture et citoyenneté F3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Maths appliquées
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Probabilités et statistiques</li>
                                  <li>Recherche opérationnelle</li>
                                  <li>Analyse numérique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Electronique et électricité
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>CAO-Electronique</li>
                                  <li>Atelier électronique embarquée</li>
                                  <li>Electronique de puissance</li>
                                  <li>Installations électriques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Dimensionnement et vibration Mécanique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Calcul des structures</li>
                                  <li>Vibration Mécanique</li>
                                  <li>Transmission de puissance</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Projet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet bibliographique</li>
                                  <li>Projet 1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>3 ème Année EM B - 60 ECTS</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Maths et programmation procédurale
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Maths pour l'ingénieur</li>
                                  <li>Math pour l'ingénieur 1</li>
                                  <li>Atelier de Calcul scientifique</li>
                                  <li>Algorithmique et programmation C</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Transfert et écoulement
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique des fluides</li>
                                  <li>Thermodynamique</li>
                                  <li>Transfert de chaleur</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Mécanique Générale
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Mécanique générale</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Dessin Technique et CAO
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Dessin Technique et CAO</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : EEA
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Électronique</li>
                                  <li>Electrotechnique</li>
                                  <li>Systèmes asservis linéaires continus (SALC)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Innovation et Entreprenariat 1
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Innovation et Entreprenariat</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté F3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Français</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="10&nbsp;ECTS"
                          >
                            UE : Systèmes mécaniques et matériaux
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Matériaux</li>
                                  <li>Mécanique des poutres élastiques</li>
                                  <li>Conception Mécanique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Fabrication mécanique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Procédés d'usinage et Bureau de méthodes</li>
                                  <li>Obtention de brut</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Projet
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet bibliographique</li>
                                  <li>Projet 1</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Anglais</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </article>
            </section>
            <section className="section " id="GE" data-letter="GE">
              <article className="section__wrapper color6">
                <h1 className="section__title">G EM 2ème cycle : Les Options</h1>
                <Row style={{ marginBottom: '40px' }}>
                  <Col md={6}>
                    <h1>Option Organisation et gestion industrielle (OGI) </h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      L’objectif de cette option est de compléter et parfaire la formation des
                      Ingénieurs Electromécaniciens d’Esprit, qui souhaitent avoir une carrière en
                      relation avec l’Organisation et la Gestion Industrielle.
                    </p>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      Les compétences acquises devront permettre aux ingénieurs de travailler dans
                      des entreprises classiques ou de consulting, et occuper l’un des postes
                      suivants : Ingénieur ou Consultant en Conduite de projets (Chef de Projet),
                      Ingénieur ou Consultant Logistique ou Supply Chain, ingénieur ou Consultant en
                      Amélioration Continue, responsable Production, responsable Maintenance,
                      responsable etc.{' '}
                    </p>
                    <section className="video-area-custom video-bg-ogi">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="whM5fUjRgHk"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                  <Col md={6}>
                    <h1>Option Mécatronique</h1>
                    <br></br>
                    <p style={{ color: 'white', fontSize: '16px' }}>
                      La Mécatronique est la discipline du Génie qui s'intéresse à la formation
                      d'ingénieurs capables d'exploiter simultanément des compétences en génie
                      mécanique, en génie électrique, en automatique et en informatique pour
                      concevoir, réaliser, contrôler et maintenir des systèmes puissants et
                      complexes. Un système mécatronique est un système comportant des composantes
                      mécaniques et électriques contrôlées par des calculateurs et des circuits
                      programmables. L’objectif de l'option Mécatronique à ESPRIT est de proposer
                      une offre de formation Cohérente et interdisciplinaire pour les étudiants des
                      classes de 4ème année de la filière Electromécanique. Cette formation doit
                      leur permettre de compléter et de raffiner leurs connaissances et leurs
                      savoirs faires en Génie Mécanique et en Génie Electrique par des compétences
                      en informatique industrielle et en contrôle et en système mécatronique. A la
                      fin des modules enseignés, on vise que les étudiants puissent acquérir des
                      Compétences en matière de spécification, conception, modélisation, simulation,
                      réalisation, contrôle, test et maintenance des systèmes à caractères
                      mécatronique.
                    </p>
                    <section className="video-area-custom video-bg-meca">
                      <div className="diplay-table">
                        <div className="display-table-cell">
                          <div className="video-inner-content" style={{ marginTop: '0px' }}>
                            <div className="button__holder">
                              <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="IbzVf7ZMtKM"
                                onClose={() =>
                                  this.setState({
                                    isOpen: false
                                  })
                                }
                              />
                              <span onClick={this.openModal} className="plus popup-youtube"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>4EMA OGI</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Gestion des opérations industrielles
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Organisation et méthodes de la Maintenance OMM</li>
                                  <li>Démarche d'un projet industriel</li>
                                  <li>Prévision et planification de la production</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Courant fort
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Atelier Électronique de puissance</li>
                                  <li>Commande des machines électriques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Modélisation des sytèmes EM
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Modélisation des systèmes EM: "Bond graph"</li>
                                  <li>Modélisation par éléments finis</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté &nbsp;A4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="9&nbsp;ECTS"
                          >
                            UE : Excellence Opérationnelle
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Supply Chain Management</li>
                                  <li>Utilisation des ERP</li>
                                  <li>Système Lean</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6.5&nbsp;ECTS"
                          >
                            UE : Supervision et commande des sytèmes complexes
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Automatique des systèmes échantillonnés</li>
                                  <li>Systèmes multivariables</li>
                                  <li>SCADA</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7&nbsp;ECTS"
                          >
                            UE : Energies renouvelables
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Energie photovoltaïque</li>
                                  <li>Thermique solaire</li>
                                  <li>Énergie éolienne</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4.5&nbsp;ECTS"
                          >
                            UE : Gestion de projets et management 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Analyse et évaluation financière</li>
                                  <li>Environnement de l'entreprise</li>
                                  <li>Gestion de projets</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté F4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté F4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>4EMA Méca</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov collapsed"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Pilotage des opérations industrielles
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Organisation et méthodes de la Maintenance OMM</li>
                                  <li>Gestion de la production</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Courant fort
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Atelier Électronique de puissance</li>
                                  <li>Commande des machines électriques</li>
                                  <li>Automatique des systèmes&nbsp;échantillonnés ST</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7.5&nbsp;ECTS"
                          >
                            UE : Automatique et Automatisme
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Automates programmables&nbsp;industriels</li>
                                  <li>Systèmes pneumatiques et&nbsp;hydrauliques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté &nbsp;A4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE :Technologie des machines à commande numérique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Technologie des machines à&nbsp;commande numérique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Supervision et commande des sytèmes complexes
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Systèmes multivariables</li>
                                  <li>SCADA</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Noyau et système embarqué
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Noyau et temps réels</li>
                                  <li>Préparation à la certification&nbsp;ALTIUM ST 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Modélisation des sytèmes EM
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Modélisation des systèmes EM: "Bond graph"</li>
                                  <li>Modélisation par éléments finis</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4.5&nbsp;ECTS"
                          >
                            UE :Gestion de projet et Management
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Analyse et évaluation financière</li>
                                  <li>Environnement de l'entreprise</li>
                                  <li>Gestion de projet</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            Energies renouvelables
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Energie photovoltaique</li>
                                  <li>Energie éolienne</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            Communication, Culture et Citoyenneté F4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté F4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>5EMA OGI</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Systèmes Manufacturiers et de Service (SysMS)
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Simulation des SysMS</li>
                                  <li>Ordonnancement des SysMS</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Qualité des Systèmes Manufacturiers et de Service
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Qualité des Systèmes Manufacturiers et de Service</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Technologies des machines à commande numérique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Technologies des machines à commande numérique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="9&nbsp;ECTS"
                          >
                            UE : Automatique et Automatisme industriels
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Robotique</li>
                                  <li>Automates programmables industriels</li>
                                  <li>Systèmes pneumatiques et hydrauliques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Préparation à la vie professionnelle
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Préparation à la vie professionnelle F</li>
                                  <li>Préparation à la vie professionnelle A</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="35&nbsp;ECTS"
                          >
                            UE : Stages
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Stage Ouvrier</li>
                                  <li>Stage technicien</li>
                                  <li>Projet Fin d'Etude</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>5EMA Méca</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Supervision et contrôle des systèmes industriels
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Atelier IHM et Supervision</li>
                                  <li>RLI</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Automatique et Robotique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Robotique</li>
                                  <li>Systèmes non linéaires</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Pilotage intégré de la production
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Gestion de la qualité</li>
                                  <li>Utilisation des ERP</li>
                                  <li>CND</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Energies renouvelables
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Solaire thermique</li>
                                  <li>Energie éolienne</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Préparation à la vie professionnelle
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Préparation à la vie professionnelle</li>
                                  <li>Préparation à la vie professionnelle</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="35&nbsp;ECTS"
                          >
                            UE : Stages et PFE
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Stage Ouvrier</li>
                                  <li>Stage technicien</li>
                                  <li>Projet Fin d&amp;#39;Etude</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>4EMB OGI</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE : Gestion des opérations industrielles
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Organisation et méthodes de la Maintenance OMM</li>
                                  <li>Démarche d'un projet industriel</li>
                                  <li>Prévision et planification de la production</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6.5&nbsp;ECTS"
                          >
                            UE : Dimensionnement et vibration mécanique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Calcul des structures</li>
                                  <li>Vibration mécanique</li>
                                  <li>Transmission de puissance</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4.5&nbsp;ECTS"
                          >
                            UE : Electronique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>CAO-Electronique</li>
                                  <li>Atelier électronique embarquée</li>
                                  <li>Instrumentation</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté &nbsp;A4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Mathématiques et signaux
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Probabilités et statistiques</li>
                                  <li>Recherche opérationnelle</li>
                                  <li>Analyse numérique</li>
                                  <li>Traitement du signal</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="9&nbsp;ECTS"
                          >
                            UE : Excellence Opérationnelle
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Supply Chain Management</li>
                                  <li>Utilisation des ERP</li>
                                  <li>Système Lean</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5.5&nbsp;ECTS"
                          >
                            UE : Courant fort
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Electronique de puissance</li>
                                  <li>Commande des machines électriques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4.5&nbsp;ECTS"
                          >
                            UE : Gestion de projets et management 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Environnement de l'entreprise</li>
                                  <li>Analyse et évaluation financière</li>
                                  <li>Gestion de projets</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté F4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté F4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>4EMB Méca</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Mathématiques et signaux
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Probabilités et statistiques</li>
                                  <li>Traitement du signal</li>
                                  <li>Recherche opérationnelle</li>
                                  <li>Analyse numérique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6.5&nbsp;ECTS"
                          >
                            UE : Dimensionnement et vibration Mécanique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Calcul des structures</li>
                                  <li>Vibration mécanique</li>
                                  <li>Transmission de puissance</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Electronique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>CAO-Electronique</li>
                                  <li>Atelier électronique embarquée</li>
                                  <li>Instrumentation industrielle</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 2
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 2</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Communication, Culture et Citoyenneté A4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté &nbsp;A4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="7.5&nbsp;ECTS"
                          >
                            UE : Automatique et automatisme
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Systèmes asservis linéaires échantillonnés</li>
                                  <li>Automates programmables industriels</li>
                                  <li>Actionneurs pneumatiques et hydrauliques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Noyau et système embarqué
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Noyau et Temps Réel</li>
                                  <li>Préparation à la certification ALTIUM</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5.5&nbsp;ECTS"
                          >
                            UE : Courant fort
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Electronique de puissance</li>
                                  <li>Commande des machines électriques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Technologie des machines à commande numérique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Technologie des machines à commande&nbsp;numérique ST 3 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Projet 3
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Projet 3</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4.5&nbsp;ECTS"
                          >
                            UE :Gestion de projet et Management
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Analyse et évaluation financière</li>
                                  <li>Environnement de l'entreprise</li>
                                  <li>Gestion de projet</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            Communication, Culture et Citoyenneté F4
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Communication, Culture et Citoyenneté F4</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>5EMB OGI</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Systèmes Manufacturiers et de Service (SysMS)
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Simulation des SysMS</li>
                                  <li>Ordonnancement des SysMS</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4.5&nbsp;ECTS"
                          >
                            UE : Qualité des Systèmes Industriels
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Qualité des Systèmes Industriels</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Technologie des machines à commande numérique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Technologie des machines à commande numérique</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="6&nbsp;ECTS"
                          >
                            UE :Automatique et Automatisme industriel
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Automates programmables industriels</li>
                                  <li>Actionneurs pneumatiques et hydrauliques</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3.5&nbsp;ECTS"
                          >
                            UE : Systèmes numériques
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Systèmes asservis linéaires échantillonnés</li>
                                  <li>Atelier électronique embarquée</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE :Préparation à la vie professionnelle
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Préparation à la vie professionnelle F</li>
                                  <li>Préparation à la vie professionnelle A</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="35&nbsp;ECTS"
                          >
                            UE : Stages
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Stage Ouvrier</li>
                                  <li>Stage technicien</li>
                                  <li>Projet Fin d'Etude</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <h3>5EMB Méca</h3>
                    <div className="acc--style3 text-custom-parent panel-group">
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button    text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Supervision et contrôle des systèmes industriels
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse inin">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Atelier IHM et Supervision</li>
                                  <li>RLI</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="5&nbsp;ECTS"
                          >
                            UE : Automatique et Robotique
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Robotique</li>
                                  <li>Systèmes non linéaires</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="8&nbsp;ECTS"
                          >
                            UE : Gestion et qualité des opérations industrielles
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Organisation et méthodes de la&nbsp;Maintenance OMM</li>
                                  <li>Gestion de la production</li>
                                  <li>Qualité Produit</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="4&nbsp;ECTS"
                          >
                            UE : Energies renouvelables
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Energie photovoltaique (PV)</li>
                                  <li>Energie éolienne</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="3&nbsp;ECTS"
                          >
                            UE : Préparation à la vie professionnelle
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Préparation à la vie professionnelle F</li>
                                  <li>Préparation à la vie professionnelle A</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel acc-group">
                        <div className="acc-panel-title">
                          <button
                            data-toggle="collapse"
                            disabled
                            className="acc-tgg-button  collapsed  text-custom-child-hov"
                            data-ects="35&nbsp;ECTS"
                          >
                            UE : Stages et PFE
                          </button>
                        </div>
                        <div className="acc-panel-collapse collapse in">
                          <div
                            className="acc-content row zn_columns_container zn_content"
                            data-droplevel="1"
                          >
                            <div
                              className=" col-md-12 col-sm-12   zn_sortable_content zn_content "
                              data-droplevel="2"
                            >
                              <div className="ects-list-container">
                                <ul>
                                  <li>Stage Ouvrier</li>
                                  <li>Stage technicien</li>
                                  <li>Projet Fin d&amp;#39;Etude</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </article>
            </section>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const breadcrumb = {
  src: breadcrumbbg,
  Title: 'Spécialités et Options',
  Subtitle: 'Quoi choisir ?'
};

export default SpecialiteEtOptions;
