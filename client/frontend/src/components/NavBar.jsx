import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import SearchModal from './SearchModal';

class NavBar extends Component {
  closeNavbar() {
    if (window.matchMedia('screen and (max-width: 991px)').matches) {
      document.getElementById('collaspe-btn').click();
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Start Top Header */}
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="address-bar">
                  <ul className="list-inline">
                    <li>
                      <a href={this.props.mailLink}>
                        <Icofont icon="icofont-email" /> {this.props.mail}
                      </a>
                    </li>
                    <li>
                      <a href={this.props.numberLink}>
                        <Icofont icon="icofont-ui-call" /> {this.props.Number}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-5 col-md-5">
                <div className="social-icons">
                  <ul className="list-inline">
                    <li>
                      <a href={this.props.facebookLink} rel="noopener noreferrer" target="_blank">
                        <Icofont icon="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href={this.props.twitterLink} rel="noopener noreferrer" target="_blank">
                        <Icofont icon="icofont-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href={this.props.youtubeLink} rel="noopener noreferrer" target="_blank">
                        <Icofont icon="icofont-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href={this.props.linkedinLink} rel="noopener noreferrer" target="_blank">
                        <Icofont icon="icofont-linkedin" />
                      </a>
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
          <Container>
            <Navbar.Brand className="navbar-brand logo">
              <React.Fragment>
                <LinkContainer exact to="/">
                  <img src={this.props.MainLogo} alt="Logo" />
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
                    <NavDropdown.Item href="/esprit/motdupresident">Mot du président</NavDropdown.Item>
                    <NavDropdown.Item href="/esprit/valeurs">Valeurs de l'école</NavDropdown.Item>
                    <NavDropdown.Item href="/esprit/leplusesprit">Le plus d'ESPRIT</NavDropdown.Item>
                    <div className="dropdown-submenu">
                      <a href="#" className="dropdown-toggle dropdown-item" data-toggle="dropdown">
                        Gouvernance
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/esprit/gouvernance/strategique">
                          Gouvernance Stratégique
                        </a>
                        <a className="dropdown-item" href="/esprit/gouvernance/servicesesprit">
                          Services de l'école
                        </a>
                      </div>
                    </div>
                    <NavDropdown.Item href="/esprit/politiquequalite">Politique Qualité</NavDropdown.Item>
                    <NavDropdown.Item href="/esprit/salledepresse">Salle De Presse</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="ADMISSION" id="admission-nav-dropdown">
                    <NavDropdown.Item href="/admission/espritingenieur">
                      Esprit École d'ingénieurs
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admission/espritprepa">Esprit-prépa</NavDropdown.Item>
                    <NavDropdown.Item href="/admission/espritschoolofbusiness">
                      Esprit School Of Business
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="FORMATIONS" id="basic-nav-dropdown">
                    <div className="dropdown-submenu">
                      <a href="#" className="dropdown-toggle dropdown-item" data-toggle="dropdown">
                        Esprit École d'Ingénieurs
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/formation/espritIngenieur/presentation">
                          Présentation
                        </a>
                        <a className="dropdown-item" href="/formation/espritIngenieur/specialitesetoptions">
                          Spécialités Et Options
                        </a>
                        <a className="dropdown-item" href="/formation/espritIngenieur/stages">
                          Stages
                        </a>
                        <a className="dropdown-item" href="/formation/espritIngenieur/languesdevpersonnel">
                          Langues et Dév Personnel
                        </a>
                        <a className="dropdown-item" href="/formation/espritIngenieur/reglement">
                          Réglement Scolaire
                        </a>
                        <a className="dropdown-item" href="/formation/espritIngenieur/calendrierexamens">
                          Calendrier Des Examens
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <a href="#" className="dropdown-toggle dropdown-item" data-toggle="dropdown">
                        Esprit School Of Business
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/formation/ESB/presentation">
                          Présentation
                        </a>
                        <a className="dropdown-item" href="/formation/ESB/specialites">
                          Spécialités
                        </a>
                        <a className="dropdown-item" href="/formation/ESB/reglement">
                          Réglement Scolaire
                        </a>
                        <a className="dropdown-item" href="/formation/ESB/inscription">
                          Inscription
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <a href="#" className="dropdown-toggle dropdown-item" data-toggle="dropdown">
                        Esprit-prépa
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/formation/espritPrepa/classeMPSI">
                          Classes M.P.S.I.
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <a href="#" className="dropdown-toggle dropdown-item" data-toggle="dropdown">
                        Formation Continue
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/formation/formationcontinue/coursdusoir">
                          Cours Du Soir
                        </a>
                        <a className="dropdown-item" href="/formation/formationcontinue/executiveMBA">
                          Executive MBA
                        </a>
                      </div>
                    </div>
                  </NavDropdown>

                  <NavDropdown title="R.D.I." id="admission-nav-dropdown">
                    <NavDropdown.Item href="/rdi/espritech">Esprit-Tech</NavDropdown.Item>
                    <NavDropdown.Item href="/rdi/production">Production</NavDropdown.Item>
                    <NavDropdown.Item href="/rdi/lesequipes">Les Équipes</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="ENTREPRISES" id="esprit-nav-dropdown">
                    <NavDropdown.Item href="/entreprise/espritEntreprise">Esprit Entreprises</NavDropdown.Item>
                    <NavDropdown.Item href="/entreprise/stages">Stages</NavDropdown.Item>
                    <NavDropdown.Item href="/entreprise/fondation">Fondation Esprit</NavDropdown.Item>
                    <div className="dropdown-submenu">
                      <a href="#" className="dropdown-toggle dropdown-item" data-toggle="dropdown">
                        Esprit Language Center
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/entreprise/EspritLanguageCenter/presentation">
                          Présentation
                        </a>
                        <a className="dropdown-item" href="/entreprise/EspritLanguageCenter/TEFTEFAQ">
                          TEF & TEFAQ
                        </a>
                        <a className="dropdown-item" href="/entreprise/EspritLanguageCenter/APTIS">
                          APTIS TEST
                        </a>
                      </div>
                    </div>
                    <NavDropdown.Item href="/entreprise/formationCertifiante">Formation Certifiante</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="INTERNATIONAL" id="admission-nav-dropdown">
                    <NavDropdown.Item href="/international/experience">
                      Avoir une Expérience<br></br>à l'International
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/international/veniraesprit">Venir à ESPRIT</NavDropdown.Item>
                    <NavDropdown.Item href="/international/partenariats">Partenariats</NavDropdown.Item>
                    <NavDropdown.Item href="/international/temoignages">Témoignages</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="VIE ÉTUDIANTE" id="vie-nav-dropdown" className="pull-left-level-1">
                    <NavDropdown.Item href="/vieetudiante/presentation">Présentation</NavDropdown.Item>
                    <div className="dropdown-submenu">
                      <a href="#" className="dropdown-toggle dropdown-item" data-toggle="dropdown">
                        Rentrée Scolaire
                      </a>
                      <div className="dropdown-menu pull-left">
                        <a className="dropdown-item" href="/vieetudiante/rentreescolaire/logementrestauration">
                          Logement Et Restauration
                        </a>
                        <a className="dropdown-item" href="/vieetudiante/rentreescolaire/espritfondation">
                          Fondation
                        </a>
                        <a className="dropdown-item" href="/vieetudiante/rentreescolaire/inscription">
                          Inscriptions
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <a href="#" className="dropdown-toggle dropdown-item" data-toggle="dropdown">
                        Vie Sur Compus
                      </a>
                      <div className="dropdown-menu  pull-left">
                        <a className="dropdown-item" href="/vieetudiante/viecampus/infrastructure">
                          Infrastructure
                        </a>
                        <a className="dropdown-item" href="/vieetudiante/viecampus/clubs">
                          Clubs
                        </a>
                        <a className="dropdown-item" href="/vieetudiante/viecampus/evenementschallenges">
                          Evénements Et Challenges
                        </a>
                      </div>
                    </div>
                    <NavDropdown.Item href="/vieetudiante/celluleecoute">Cellule D'Écoute</NavDropdown.Item>
                  </NavDropdown>
                </React.Fragment>
              </Nav>
            </Navbar.Collapse>

            <div className="header-search">
              <SearchModal />
            </div>
          </Container>
        </Navbar>
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
