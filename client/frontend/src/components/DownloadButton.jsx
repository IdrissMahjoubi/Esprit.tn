import React, { Component } from 'react';
class DownloadButton extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <a href={data.link} className="download-button">
          <span className="hide-hover">{data.text}</span>
          <span className="symbol">
            <img src={data.src} alt="download" title="download"></img>
          </span>
        </a>
      </React.Fragment>
    );
  }
}

export default DownloadButton;
