import React, { Component } from 'react';

class ImageBox extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="image-box">
          <div className="image-box-holder">
            <div className="image-box-wrapper">
              <img src={data.src} alt={data.alt} />
            </div>
            <h3 className="image-box-title">{data.title}</h3>
          </div>
          <div className="iamge-box-text">
            <p>{data.text}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageBox;
