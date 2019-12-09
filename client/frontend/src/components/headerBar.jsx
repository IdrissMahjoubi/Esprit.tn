import React, { Component } from 'react';

class HeaderBar extends Component {
  render() {
    const breadcrumb = this.props.breadcrumb;
    let style = {
      background: '#db4437',
      width: '100%',
      height: '30%',
      position: 'absolute',
      left: '0'
    };
    let title;
    let subtitle;
    let titleDivStyle = {
      position: 'absolute',
      top: '50%',
      left: '12.5%'
    };
    let subtitleDivStyle = {
      position: 'absolute',
      top: '50%',
      left: '62.5%'
    };
    let titleStyle = {
      color: '#eee',
      lineHeight: '1.5',
      fontSize: '24px',
      fontWeight: '600',
      padding: '7px 5px 6px',
      background: 'rgba(0, 0, 0, 0.8)',
      marginBottom: '2px'
    };
    let subtitleStyle1 = {
      color: '#eee',
      lineHeight: '1.5',
      fontSize: '20px',
      fontWeight: '600',
      padding: '7px 5px 0px',
      marginBottom: '2px'
    };
    let subtitleStyle2 = {
      color: '#eee',
      lineHeight: '1.5',
      fontSize: '16px',
      fontWeight: '600',
      padding: '0px 5px 6px',
      marginBottom: '2px'
    };
    if (breadcrumb) {
      style = {
        backgroundImage: 'url(' + breadcrumb.src + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '70%',
        position: 'absolute',
        left: '0'
      };
      title = (
        <div style={titleDivStyle}>
          <h2 style={titleStyle}>{breadcrumb.Title}</h2>
        </div>
      );
      subtitle = (
        <div style={subtitleDivStyle}>
          <h2 style={subtitleStyle1}>{breadcrumb.Title}</h2>
          <h3 style={subtitleStyle2}>{breadcrumb.Subtitle}</h3>
        </div>
      );
    }
    return (
      <div id="header-bar" style={style}>
        <svg
          width="2700px"
          height="64px"
          style={{
            // background: '#db4437',

            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          className="svgmask"
          viewBox="0 0 2700 64"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
              id="filter-mask5"
            >
              <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetInner1"></feOffset>
              <feGaussianBlur
                stdDeviation="1.5"
                in="shadowOffsetInner1"
                result="shadowBlurInner1"
              ></feGaussianBlur>
              <feComposite
                in="shadowBlurInner1"
                in2="SourceAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                result="shadowInnerInner1"
              ></feComposite>
              <feColorMatrix
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.45 0"
                in="shadowInnerInner1"
                type="matrix"
                result="shadowMatrixInner1"
              ></feColorMatrix>
              <feMerge>
                <feMergeNode in="SourceGraphic"></feMergeNode>
                <feMergeNode in="shadowMatrixInner1"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <path
            d="M1892,0 L2119,44.993 L2701,45 L2701.133,63.993 L-0.16,63.993 L1.73847048e-12,45 L909,44.993 L1892,0 Z"
            className="bmask-bgfill"
            fill="#f5f5f5"
            filter="url(#filter-mask5)"
          ></path>
          <path
            d="M2216,44.993 L2093,55 L1882,6 L995,62 L966,42 L1892,0 L2118,44.993 L2216,44.993 L2216,44.993 Z"
            fill="#cd2122"
            className="bmask-customfill"
            filter="url(#filter-mask5)"
          ></path>
        </svg>
        {title}
        {subtitle}
      </div>
    );
  }
}
export default HeaderBar;
