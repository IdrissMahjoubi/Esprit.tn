import React, { Component } from 'react';
import PropTypes from "prop-types";

class BlogBanner extends Component {
    render() {
        const {title, description} = this.props
        return (
            <React.Fragment>
                <div className="bread-cumbs-area bread-cumbs-bg">
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        );
    }
}


export default BlogBanner;
