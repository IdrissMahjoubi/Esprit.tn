import React, { Component } from 'react';
// import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import { getEvent } from '../../actions/eventActions';
import { connect } from 'react-redux';

//Import Component
import Sidebar from "./Sidebar"; 

class Single extends Component {

    state = {
        months: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
    };
    componentDidMount() {
        this.props.getEvent(this.props.match.params.id);
    }

    extractDay = date => {
        const dateMilli = Date.parse(date);
        return new Date(dateMilli * 1000).getDay();
      };
    
      extractMonth = date => {
        const dateMilli = Date.parse(date);
        const monthNumber = new Date(dateMilli * 1000).getMonth();
        return this.state.months[monthNumber];
          
      };
    
    render() {

        const { event,loading } = this.props;
        const username = event.user ? event.user.username : 'unknown';
        console.log('username:', username)

        const singleEvent = loading ? 'loading details' : (
            <React.Fragment>
                <div className="bread-cumbs-area bread-cumbs-bg">
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h1>Detailed Event</h1>
                                        <p>{event.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="blog" className="our-blog main-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-details">
                                            <div className="post-img">
                                                <img src={`http://localhost:4000/${event.image}`} alt="blog-one" />
                                            </div>
                                            
                                            <div className="blog-info">
                                                <div className="date-box">
                                                    {this.extractDay(event.dateStart)} <span className="month">{this.extractMonth(event.dateStart)}</span>
                                                </div>
                                                <div className="title-meta">
                                                    <h2>{event.title}</h2>
                                                    <div className="post-meta">
                                                        <ul>
                                                            <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={'/#0'}>{username}</Link></li>
                                                            <li><Icofont icon="icofont-tags" /> Tags: <Link to={'/#0'}>{event.type}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                
                                            <div className="post-content">
                                                <p>{event.description}</p>
                                                
                                                <div className="sharing-link">
                                                    <ul>
                                                        <li><strong>Shear : </strong></li>
                                                        <li><Link to={'/#0'}><Icofont icon="icofont-facebook" /></Link></li>
                                                        <li><Link to={'/#0'}><Icofont icon="icofont-twitter" /></Link></li>
                                                        <li><Link to={'/#0'}><Icofont icon="icofont-instagram" /></Link></li>
                                                        <li><Link to={'/#0'}><Icofont icon="icofont-linkedin" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                                                                        
                               
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar: src/components*/}
                            <Sidebar />

                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
        return singleEvent;
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    event: state.event.event,
    loading: state.event.loading
  });
  
  export default connect(
    mapStateToProps,
    { getEvent }
  )(Single);