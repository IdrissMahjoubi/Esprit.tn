import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { getHomeNews } from '../../actions/newsActions';
import { connect } from 'react-redux';
import LinkDuo from '../utils/LinkDuo'
class News extends Component {
  state = {
      homeNews: [],
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
  extractDay = date => {
    const dateMilli = Date.parse(date);
    return new Date(dateMilli * 1000).getDay();
  };

  extractMonth = date => {
    const dateMilli = Date.parse(date);
    const monthNumber = new Date(dateMilli * 1000).getMonth();
    return this.state.months[monthNumber];
      
  };
    componentDidMount() {
    let scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset;
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: 'smooth'
      });
    };
    this.setState({ scrollWithOffset });
  }
  render() {
    //Blog loop start
    const { data } = this.props;

    const homeNewsData = data.map((singleNews, index) => (
        <div className="col-md-6 col-lg-6" key={index}>
            <div className="blog-item">
                <LinkDuo to={singleNews.url} className="blog-img"><img src={`http://localhost:4000/${singleNews.image}`} alt="blog-one" /></LinkDuo>
                <div className="blog-info">
                    <div className="date-box">
                        {this.extractDay(singleNews.dateStart)} <span className="month">{this.extractMonth(singleNews.dateStart)}</span>
                    </div>
                    <div className="title-meta">
                        <h2><LinkDuo to={singleNews.url}>{singleNews.title}</LinkDuo></h2>
                        <div className="post-meta">
                            <ul>
                                <li><Icofont icon="icofont-funky-man" /> Posted By: {singleNews.user ? singleNews.user.username : 'Unknown'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>{singleNews.description}</p>
                </div>
            </div>
        </div>
    ));
    //Blog loop END
    return (
        <React.Fragment>
            <section id="blog" className="our-blog ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>Actualités</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <span className="section-title-bg">Actualités</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        {homeNewsData}
                        <div className="col-lg-12 col-md-12 all-post">
                            <div className="center-wrap">
                            <Link to='/news-page' className="btn-a">
                                <div className="button">
                                    All News <Icofont icon="icofont-long-arrow-right" />
                                    <div className="mask"></div>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  homeNews: state.news.homeNews,
  loading: state.news.loading
});

export default connect(
  mapStateToProps,
  { getHomeNews }
)(News);
