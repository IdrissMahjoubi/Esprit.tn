import React, { Component } from 'react';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { getAllPress } from '../../actions/pressActions';
import Caroussel from '../../components/Caroussel';
import breadcrumbbg from '../../assets/img/img_back_news.jpg';
class SalleDePresse extends Component {
  componentDidMount() {
    this.props.getAllPress();
  }
  render() {
    const { articles, rapports, brochures, communiques } = this.props;
    return (
      <React.Fragment>
        <NavBar breadcrumb={breadcrumb} />
        <section id="services" className="services-rdi ptb-100 our-blog main-blog dynamic-margin">
        <div className="container">
          <Caroussel
            title="Articles"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
            pressData={articles}
          />
          <Caroussel
            title="Brochures"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
            pressData={brochures}
          />
          <Caroussel
            title="Rapports"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
            pressData={rapports}
          />
          <Caroussel
            title="Communiques"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
            pressData={communiques}
          />
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

const breadcrumb = {
  src: breadcrumbbg,
  Title: 'Salle de presse',
  Subtitle: 'Brochures et articles'
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.press.loading,
  articles: state.press.articles,
  rapports: state.press.rapports,
  brochures: state.press.brochures,
  communiques: state.press.communiques
});

export default connect(mapStateToProps, { getAllPress })(SalleDePresse);
