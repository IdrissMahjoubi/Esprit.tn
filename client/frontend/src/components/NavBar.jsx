import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import SearchModal from './SearchModal';
import HeaderBar from './headerBar';
import LinkDuo from './../components/utils/LinkDuo';

class NavBar extends Component {
  componentDidMount() {
    let elem = document.getElementById('navbar');
    let bar = document.getElementById('header-bar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elem.classList.add('menu-shrink');
        elem.classList.add('fixed-top');
        bar.classList.add('hide');
      } else {
        elem.classList.remove('menu-shrink');
        elem.classList.remove('fixed-top');
        bar.classList.remove('hide');
      }
    });
    window.scrollTo(0, 0);
  }
  closeNavbar() {
    if (window.matchMedia('screen and (max-width: 991px)').matches) {
      document.getElementById('collaspe-btn').click();
    }
  }

  render() {
    const breadcrumb = this.props.breadcrumb;
    return (
      <React.Fragment>
        {/* Start Top Header */}
        <div className="header-fill" >
          <HeaderBar breadcrumb={breadcrumb} />
        </div>
        <div className="fade-header"></div>
        <div className="top-header">
          <div className="container">
            <div className="row white-line">
              <div className="col-md-7 col-lg-7">
                <div className="address-bar">
                  <ul className="list-inline">
                    <li>
                      <LinkDuo to={this.props.mailLink}>
                        <Icofont icon="icofont-email" /> {this.props.mail}
                      </LinkDuo>
                    </li>
                    <li>
                      <LinkDuo to={this.props.numberLink}>
                        <Icofont icon="icofont-ui-call" /> {this.props.Number}
                      </LinkDuo>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-5 col-md-5">
                <div className="social-icons">
                  <ul className="list-inline">
                    <li>
                      <LinkDuo
                        to={this.props.facebookLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-facebook" />
                      </LinkDuo>
                    </li>
                    <li>
                      <LinkDuo
                        to={this.props.twitterLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-twitter" />
                      </LinkDuo>
                    </li>
                    <li>
                      <LinkDuo
                        to={this.props.youtubeLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-youtube" />
                      </LinkDuo>
                    </li>
                    <li>
                      <LinkDuo
                        to={this.props.linkedinLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-linkedin" />
                      </LinkDuo>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Top Header */}

        <Navbar
          id="navbar"
          expand="lg"
          className="navbar navbar-expand-md navbar-light"
          collapseOnSelect={true}
        >
          <div className="navbar-mask"></div>
          <Container>
            <Navbar.Brand className="navbar-brand logo">
              <React.Fragment>
                <LinkContainer exact to="/">
                  <img src={this.props.Logo2} alt="Logo" />
                </LinkContainer>
              </React.Fragment>
            </Navbar.Brand>

            <Navbar.Brand className="navbar-brand logo-2">
              <React.Fragment>
                <LinkContainer exact to="/">
                  <img className="img-fluid" src={this.props.Logo2} alt="Logo" />
                </LinkContainer>
              </React.Fragment>
            </Navbar.Brand>

            <Navbar.Toggle
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="collaspe-btn"
            />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="navbar-nav ml-auto">
                <React.Fragment>
                  <NavDropdown title="ESPRIT" id="esprit-nav-dropdown">
                    <LinkDuo className="dropdown-item" to="/esprit/motdupresident">
                      Mot du président
                    </LinkDuo>
                    <LinkDuo className="dropdown-item" to="/esprit/valeurs">
                      Valeurs de l'école
                    </LinkDuo>
                    <LinkDuo className="dropdown-item" to="/esprit/leplusesprit">
                      Le plus d'ESPRIT
                    </LinkDuo>
                    <div className="dropdown-submenu">
                      <LinkDuo
                        to="#"
                        className="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                      >
                        Gouvernance
                      </LinkDuo>
                      <div className="dropdown-menu">
                        <LinkDuo className="dropdown-item" to="/esprit/gouvernance/strategique">
                          Gouvernance Stratégique
                        </LinkDuo>
                        <LinkDuo className="dropdown-item" to="/esprit/gouvernance/servicesesprit">
                          Services de l'école
                        </LinkDuo>
                      </div>
                    </div>
                    <LinkDuo className="dropdown-item" to="/esprit/politiquequalite">
                      Politique Qualité
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/esprit/salledepresse">
                      Salle De Presse
                    </LinkDuo>
                  </NavDropdown>

                  <NavDropdown title="ADMISSION" id="admission-nav-dropdown">
                    <LinkDuo className="dropdown-item" to="/admission/espritingenieur">
                      Esprit École d'ingénieurs
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/admission/espritprepa">
                      Esprit-prépa
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/admission/espritschoolofbusiness">
                      Esprit School Of Business
                    </LinkDuo>
                  </NavDropdown>

                  <NavDropdown title="FORMATIONS" id="basic-nav-dropdown">
                    <div className="dropdown-submenu">
                      <LinkDuo
                        to="#"
                        className="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                      >
                        Esprit École d'Ingénieurs
                      </LinkDuo>
                      <div className="dropdown-menu">
                        <LinkDuo
                          className="dropdown-item"
                          to="/formation/espritIngenieur/presentation"
                        >
                          Présentation
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/formation/espritIngenieur/specialitesetoptions"
                        >
                          Spécialités Et Options
                        </LinkDuo>
                        <LinkDuo className="dropdown-item" to="/formation/espritIngenieur/stages">
                          Stages
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/formation/espritIngenieur/languesdevpersonnel"
                        >
                          Langues et Dév Personnel
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/formation/espritIngenieur/reglement"
                        >
                          Réglement Scolaire
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/formation/espritIngenieur/calendrierexamens"
                        >
                          Calendrier Des Examens
                        </LinkDuo>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <LinkDuo
                        to="#"
                        className="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                      >
                        Esprit School Of Business
                      </LinkDuo>
                      <div className="dropdown-menu">
                        <LinkDuo className="dropdown-item" to="/formation/ESB/presentation">
                          Présentation
                        </LinkDuo>
                        <LinkDuo className="dropdown-item" to="/formation/ESB/specialites">
                          Spécialités
                        </LinkDuo>
                        <LinkDuo className="dropdown-item" to="/formation/ESB/reglement">
                          Réglement Scolaire
                        </LinkDuo>
                        <LinkDuo className="dropdown-item" to="/formation/ESB/inscription">
                          Inscription
                        </LinkDuo>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <LinkDuo
                        to="#"
                        className="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                      >
                        Esprit-prépa
                      </LinkDuo>
                      <div className="dropdown-menu">
                        <LinkDuo className="dropdown-item" to="/formation/espritPrepa/classeMPSI">
                          Classes M.P.S.I.
                        </LinkDuo>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <LinkDuo
                        to="#"
                        className="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                      >
                        Formation Continue
                      </LinkDuo>
                      <div className="dropdown-menu">
                        <LinkDuo
                          className="dropdown-item"
                          to="/formation/formationcontinue/coursdusoir"
                        >
                          Cours Du Soir
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/formation/formationcontinue/executiveMBA"
                        >
                          Executive MBA
                        </LinkDuo>
                      </div>
                    </div>
                  </NavDropdown>
                  <NavDropdown title="R.D.I." id="admission-nav-dropdown">
                    <LinkDuo className="dropdown-item" to="/rdi/espritech">
                      Esprit-Tech
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/rdi/production">
                      Production
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/rdi/lesequipes">
                      Les Équipes
                    </LinkDuo>
                  </NavDropdown>

                  <NavDropdown title="ENTREPRISES" id="esprit-nav-dropdown">
                    <LinkDuo className="dropdown-item" to="/entreprise/espritEntreprise">
                      Esprit Entreprises
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/entreprise/stages">
                      Stages
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/entreprise/fondation">
                      Fondation Esprit
                    </LinkDuo>

                    <div className="dropdown-submenu">
                      <LinkDuo
                        to="#"
                        className="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                      >
                        Esprit Language Center
                      </LinkDuo>
                      <div className="dropdown-menu">
                        <LinkDuo
                          className="dropdown-item"
                          to="/entreprise/EspritLanguageCenter/presentation"
                        >
                          Présentation
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/entreprise/EspritLanguageCenter/TEFTEFAQ"
                        >
                          TEF & TEFAQ
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/entreprise/EspritLanguageCenter/APTIS"
                        >
                          APTIS TEST
                        </LinkDuo>
                      </div>
                    </div>

                    <LinkDuo className="dropdown-item" to="/entreprise/formationCertifiante">
                      Formation Certifiante
                    </LinkDuo>
                  </NavDropdown>

                  <NavDropdown title="INTERNATIONAL" id="admission-nav-dropdown">
                    <LinkDuo className="dropdown-item" to="/international/experience">
                      Avoir une Expérience<br></br>à l'International
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/international/veniraesprit">
                      Venir à ESPRIT
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/international/partenariats">
                      Partenariats
                    </LinkDuo>

                    <LinkDuo className="dropdown-item" to="/international/temoignages">
                      Témoignages
                    </LinkDuo>
                  </NavDropdown>

                  <NavDropdown
                    title="VIE ÉTUDIANTE"
                    id="vie-nav-dropdown"
                    className="pull-left-level-1"
                  >
                    <LinkDuo className="dropdown-item" to="/vieetudiante/presentation">
                      Présentation
                    </LinkDuo>

                    <div className="dropdown-submenu">
                      <LinkDuo
                        to="#"
                        className="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                      >
                        Rentrée Scolaire
                      </LinkDuo>
                      <div className="dropdown-menu pull-left">
                        <LinkDuo
                          className="dropdown-item"
                          to="/vieetudiante/rentreescolaire/logementrestauration"
                        >
                          Logement Et Restauration
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/vieetudiante/rentreescolaire/espritfondation"
                        >
                          Fondation
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/vieetudiante/rentreescolaire/inscription"
                        >
                          Inscriptions
                        </LinkDuo>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <LinkDuo
                        to="#"
                        className="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                      >
                        Vie Sur Compus
                      </LinkDuo>
                      <div className="dropdown-menu  pull-left">
                        <LinkDuo
                          className="dropdown-item"
                          to="/vieetudiante/viecampus/infrastructure"
                        >
                          Infrastructure
                        </LinkDuo>
                        <LinkDuo className="dropdown-item" to="/vieetudiante/viecampus/clubs">
                          Clubs
                        </LinkDuo>
                        <LinkDuo
                          className="dropdown-item"
                          to="/vieetudiante/viecampus/evenementschallenges"
                        >
                          Evénements Et Challenges
                        </LinkDuo>
                      </div>
                    </div>

                    <LinkDuo className="dropdown-item" to="/vieetudiante/celluleecoute">
                      Cellule D'Écoute
                    </LinkDuo>
                  </NavDropdown>
                </React.Fragment>
              </Nav>
            </Navbar.Collapse>

            <div className="header-search">
              <SearchModal />
            </div>
          </Container>
        </Navbar>
        {/* <HeaderBar /> */}
      </React.Fragment>
    );
  }
}
//Props Types
NavBar.propTypes = {
  mailLink: PropTypes.string,
  mail: PropTypes.string,
  numberLink: PropTypes.string,
  Number: PropTypes.string,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  youtubeLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  MainLogo: PropTypes.string,
  Logo2: PropTypes.string
};

//Default Props
NavBar.defaultProps = {
  MainLogo: require('../assets/img/logo-esprit.png'),
  Logo2: require('../assets/img/logo2.png'),
  mailLink: 'mailto:name@email.com',
  mail: 'contact@esprit.tn',
  numberLink: 'callto:+216 70 685 685',
  Number: '+216 70 685 685',
  facebookLink: 'https://www.facebook.com/esprit.tn/?fref=ts',
  twitterLink: 'https://twitter.com/Esprit_News?lang=fr',
  youtubeLink: 'https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA',
  linkedinLink: 'https://www.linkedin.com/company/esprit_2/'
};
export default NavBar;
