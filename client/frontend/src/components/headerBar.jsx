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
      if (breadcrumb.src) {
        style = {
          backgroundImage: 'url(' + breadcrumb.src + ')',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '70%',
          position: 'absolute',
          left: '0'
        };
      } else {
        style = {
          background: '#db4437',
          width: '100%',
          height: '70%',
          position: 'absolute',
          left: '0'
        };
      }

      title = (
        <div id="breadcrumb-title" style={titleDivStyle}>
          <h2 className="breadcrumb-title" style={titleStyle}>
            {breadcrumb.Title}
          </h2>
        </div>
      );
      subtitle = (
        <div id="breadcrumb-sub" style={subtitleDivStyle}>
          <h2 className="breadcrumb-subtitle" style={subtitleStyle1}>
            {breadcrumb.Title}
          </h2>
          <h3 className="breadcrumb-subtitle" style={subtitleStyle2}>
            {breadcrumb.Subtitle}
          </h3>
        </div>
      );
    }
    return (
      <div id="header-bar" style={style}>
        <svg
                  style={{
                    position: 'absolute',
                    bottom: '0',
                  }}
          id="svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2107.34 64"
        >
          <defs></defs>
          <title>bar2-02</title>
          <image
            width="2303"
            height="124"
            transform="translate(380.68 -29)"
            href="data:image/png;base64,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"
          />
          <polygon
            fill="transparent"
            points="0 2 0 41.85 956.4 41.85 1885.32 2 1885.32 0 0 2"
          />
          <polygon
            fill="transparent"
            points="2107.84 0 1889.15 0 1889.15 2 2107.84 44.91 2107.84 0"
          />
          <polygon
            fill="#f5f8f9"
            points="2107.84 64 2107.71 55.02 2083.4 57 1872.4 8 985.4 64 2107.84 64"
          />
          <polygon
            fill="#f5f8f9"
            points="955.45 41.85 955.45 44.02 984.04 64 -0.16 64 0 41.85 955.45 41.85"
          />
        </svg>
        {title}
        {subtitle}
      </div>
    );
  }
}
export default HeaderBar;
