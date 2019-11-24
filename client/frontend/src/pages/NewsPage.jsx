import React, { Component } from 'react';

//Import Component
import NavBar from '../components/NavBar';
import BlogBanner from '../components/blog/BlogBanner';
import BlogPost from '../components/blog/BlogPost';
import Footer from '../components/Footer';
import { getHomeNews } from '../actions/newsActions';
import { connect } from 'react-redux';
import Page from 'react-page-loading';

class NewsPage extends Component {
  componentDidMount() {
    this.props.getHomeNews();
  }

  render() {
    const { loading, homeNews } = this.props;

    return (
      <React.Fragment>
        {/* NavBar: src/components/NavBar.jsx */}
        <NavBar />
        {/* NavBar: src/components/blog/BlogBanner.jsx */}
        <BlogBanner title = "Actualites" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."/>
        {/* NavBar: src/components/blog/BlogPost.jsx */}
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <BlogPost data={homeNews} />
        )}
        {/* NavBar: src/components/Footer.jsx */}
        <Footer />
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
)(NewsPage);
