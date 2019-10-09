import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchModal from "./SearchModal";

class NavBar extends Component {


    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
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
                                    <li><a href={this.props.mailLink}><Icofont icon="icofont-email"/> {this.props.mail}</a></li>
                                    <li><a href={this.props.numberLink}><Icofont icon="icofont-ui-call" /> {this.props.Number}</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-5">
                            <div className="social-icons">
                                <ul className="list-inline">
                                    <li><a href={this.props.facebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>
                                    <li><a href={this.props.twitterLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-twitter" /></a></li>
                                    <li><a href={this.props.youtubeLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-youtube" /></a></li>
                                    <li><a href={this.props.linkedinLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-linkedin" /></a></li>
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
                                <img 
                                    src={this.props.MainLogo}
                                    alt="Logo" 
                                />
                            </LinkContainer>
                        </React.Fragment>
                    </Navbar.Brand>

                    <Navbar.Brand className="navbar-brand logo-2"> 
                            <React.Fragment>
                               <LinkContainer exact to="/">
                                    <img 
                                        className="img-fluid" 
                                        src={this.props.Logo2}
                                        alt="Logo"
                                    />
                                </LinkContainer>
                            </React.Fragment>
                    </Navbar.Brand>

                    <Navbar.Toggle 
                        className="navbar-toggler" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        id="collaspe-btn"
                    />
                    <Navbar.Collapse 
                        id="navbarSupportedContent"
                    >
                        <Nav className="navbar-nav ml-auto">
                            <React.Fragment>
                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        ESPRIT
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        ADMISSION
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        FORMATIONS
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/recherche_et_developement"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        R.D.I
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        to="/Clubs"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Clubs
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        ENTREPRISES
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        INTERNATIONAL
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        VIE ETUDIANTE
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        CONTACT
                                    </NavLink>
                                </Nav.Item>
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
    Logo2: PropTypes.string,
};

//Default Props
NavBar.defaultProps = {
    MainLogo: require('../assets/img/logo-esprit.png'),
    Logo2: require('../assets/img/logo2.png'),
    mailLink: "mailto:name@email.com",
    mail: "contact@esprit.tn",
    numberLink: "callto:+216 70 685 685",
    Number: "+216 70 685 685",
    facebookLink: "https://www.facebook.com/esprit.tn/?fref=ts",
    twitterLink: "https://twitter.com/Esprit_News?lang=fr",
    youtubeLink: "https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA",
    linkedinLink: "https://www.linkedin.com/company/esprit_2/",
};
export default NavBar;
