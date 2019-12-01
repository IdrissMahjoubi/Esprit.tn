import React, { Component } from 'react';
import { connect } from 'react-redux';
//Import Component
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import {getAllPress} from '../../actions/pressActions'
import Caroussel from '../../components/Caroussel'
class SalleDePresse extends Component {


  componentDidMount() {
    this.props.getAllPress();
}
  render() {
    const { articles,rapports,brochures,communiques,loading } = this.props
console.log(articles);
console.log(rapports);
console.log(brochures);
console.log(communiques);
console.log(loading);
    
    return (
      <React.Fragment>
        <NavBar />
        <div className="bread-cumbs-area bread-cumbs-bg">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <h1>Salle de Presse</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="services" className="services-rdi ptb-100">
            <Caroussel title="Articles" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet." pressData={articles}/>
            <Caroussel title="Brochures" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet." pressData={brochures}/>
            <Caroussel title="Rapports" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet." pressData={rapports}/>
            <Caroussel title="Communiques" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet." pressData={communiques}/>
            </section>
        <Footer />
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.press.loading,
  articles :state.press.articles,
  rapports :state.press.rapports,
  brochures :state.press.brochures,
  communiques :state.press.communiques,
});

export default connect(
  mapStateToProps,
  { getAllPress }
)(SalleDePresse);
