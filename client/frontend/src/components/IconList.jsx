import React, { Component } from 'react';
import Icofont from 'react-icofont';

class IconList extends Component {
  render() {
    const { data } = this.props;
    const list = data.list.map((singleItem, index) => (
      <li className="" key={index}>
        <span className="services-box-list-text">{singleItem}</span>
      </li>
    ));
    return (
      <React.Fragment>
        <div className="services-box">
          <div className="services-box-icon">
            <div className="services-box-icon-inner">
              <Icofont className="services-box-fonticon" icon={data.icon} />
            </div>
          </div>
          <div className="services-box-content">
            <h4 className="services-box-title">{data.title}</h4>
            <div className="services-box-desc">
              <p>{data.description}</p>
            </div>

            <ul className="services-box-list">{list}</ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IconList;
