import React, { Component } from 'react';

//Import Component
import NavBar from '../components/NavBar';
import BlogBanner from '../components/blog/BlogBanner';
import BlogPost from '../components/blog/BlogPost';
import Footer from '../components/Footer';
import { getEvents } from '../actions/eventActions';
import { connect } from 'react-redux';

class EventsPage extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { loading, events } = this.props;

    return (
      <React.Fragment>
        {/* NavBar: src/components/NavBar.jsx */}
        <NavBar />
        {/* NavBar: src/components/blog/BlogBanner.jsx */}
        <BlogBanner />
        {/* NavBar: src/components/blog/BlogPost.jsx */}
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <BlogPost data={events} />
        )}
        {/* NavBar: src/components/Footer.jsx */}
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  events: state.event.events,
  loading: state.event.loading
});

export default connect(
  mapStateToProps,
  { getEvents }
)(EventsPage);
