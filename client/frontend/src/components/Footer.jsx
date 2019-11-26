import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import LinkDuo from './../components/utils/LinkDuo';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <p className="copyright">{this.props.copyrightText} <LinkDuo to="http://www.idriss-mahjoubi.tn">Idriss Mahjoubi</LinkDuo></p>
                            </div>
                            <div className="col-md-7">
                                <div className="social-icons bottom">
                                    <ul className="list-inline">
                                        <li>{this.props.socialTitle} </li>
                                        <li><LinkDuo to={this.props.FacebookLink}><Icofont icon="icofont-facebook"/></LinkDuo></li>
                                        <li><LinkDuo to={this.props.TwitterLink}><Icofont icon="icofont-twitter"/></LinkDuo></li>
                                        <li><LinkDuo to={this.props.YoutubeLink}><Icofont icon="icofont-youtube"/></LinkDuo></li>
                                        <li><LinkDuo to={this.props.linkedinLink}><Icofont icon="icofont-linkedin"/></LinkDuo></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
//Props Types
Footer.propTypes = {
    copyrightText: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    YoutubeLink: PropTypes.string,
    linkedinLink: PropTypes.string,
};

//Default Props
Footer.defaultProps = {
    copyrightText: "2019 © All Rights Reserved. Created By",
    socialTitle: "SUIVEZ-NOUS:",
    FacebookLink: "https://www.facebook.com/esprit.tn",
    TwitterLink: "https://twitter.com/Esprit_News",
    YoutubeLink: "https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA",
    linkedinLink: "/#0",
};
export default Footer;
