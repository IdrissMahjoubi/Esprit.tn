import React, { Component } from 'react';

class InformationBox extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="information-container">
          <div className="information-content">
            <h4>{data.title}</h4>
            <h3>{data.subtitle}</h3>
            <p>{data.description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InformationBox;
