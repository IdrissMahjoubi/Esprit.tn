import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import isExternal from 'is-url-external';


export default class LinkDuo extends Component {
  render() {
    return isExternal(this.props.to) ?
      <a
            href={this.props.to}
        target="_blank"
        {...this.props}
      >      {this.props.children}
      </a>
      :
        <Link {...this.props} >
                  {this.props.children}
      </Link>;
  }
}

