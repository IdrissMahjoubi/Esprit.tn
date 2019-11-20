import React, { Component } from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from 'react-page-loading';
import { CSSTransition } from 'react-transition-group';
import { Provider } from 'react-redux';
import store from './store';

//Package CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css/animate.min.css';

//Template CSS Style
import '../src/style.css';
import './assets/css/responsive.css';
import './assets/css/color/color-red.css';

//Import Component
import HomeOne from './pages/HomeOne';
import BlogOne from './pages/BlogOne';
import BlogTwo from './pages/BlogTwo';
import SingleBlog from './pages/SingleBlog';
import ScrollUpBtn from './components/ScrollUp';
import Events from './pages/Events';
import Recrutment from './pages/Recrutment';
import RDI from './pages/RDI';
import Clubs from './pages/Clubs';
// Esprit
import MotDuPresident from './pages/Esprit/MotDuPresident';
import ValeursEcole from './pages/Esprit/ValeursEcole';
import LePlusDEsprit from './pages/Esprit/LePlusDEsprit';
import GouvernanceStrategique from './pages/Esprit/GouvernanceStrategique';
import ServicesEcole from './pages/Esprit/ServicesEcole';
import PolitiqueQualite from './pages/Esprit/PolitiqueQualite';
import SalleDePresse from './pages/Esprit/SalleDePresse';
// Admission
import EspritIngenieur from './pages/Admission/EspritIngenieur';
import ESB from './pages/Admission/ESB';
import EspritPrepa from './pages/Admission/EspritPrepa';
// Formation 
  // ESB
import InscriptionESB from './pages/Formations/ESB/InscriptionESB';
import PresentationESB from './pages/Formations/ESB/PresentationESB';
import ReglementESB from './pages/Formations/ESB/ReglementESB';
import SpecialitesESB from './pages/Formations/ESB/SpecialitesESB';
  // Esprit Ingenieur
import PresentationIngenieur from './pages/Formations/EspritIngenieur/PresentationIngenieur';
import LanguesEtDev from './pages/Formations/EspritIngenieur/LanguesEtDev';
import ReglementIngenieur from './pages/Formations/EspritIngenieur/ReglementIngenieur';
import SpecialiteEtOptions from './pages/Formations/EspritIngenieur/SpecialiteEtOptions';
import StagesIngenieur from './pages/Formations/EspritIngenieur/StagesIngenieur';
import CalendrierExamen from './pages/Formations/EspritIngenieur/CalendrierExamen';
  // Esprit Prepa
import ClasseMPSI from './pages/Formations/EspritPrepa/ClasseMPSI';
  // Formation Continue
import CoursDuSoir from './pages/Formations/FormationContinue/CoursDuSoir';
import ExecutiveMBA from './pages/Formations/FormationContinue/ExecutiveMBA';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Page loader={'comet-spin'} color={'#ed1c24'} size={50}>
              <div>
                <Route
                  render={({ location }) => (
                    <CSSTransition
                      key={location.key}
                      timeout={{ enter: 900, exit: 900 }}
                      classNames="fade"
                    >
                      <section className="route-section">
                        <Switch>
                          <Route
                            path="/blog-details/:id"
                            render={props => <SingleBlog {...props} />}
                          />
                          <Route path="/events" render={props => <Events {...props} />} />
                          <Route path="/blog-two" render={props => <BlogTwo {...props} />} />
                          <Route exact path="/blog-one" render={props => <BlogOne {...props} />} />
                          <Route path="/recrutment" render={props => <Recrutment {...props} />} />
                          <Route
                            path="/recherche_et_developement"
                            render={props => <RDI {...props} />}
                          />
                          <Route path="/clubs" render={props => <Clubs {...props} />} />
                          {/* Esprit Routes */}
                          <Route
                            path="/esprit/motdupresident"
                            render={props => <MotDuPresident {...props} />}
                          />
                          <Route
                            path="/esprit/valeurs"
                            render={props => <ValeursEcole {...props} />}
                          />
                          <Route
                            path="/esprit/leplusesprit"
                            render={props => <LePlusDEsprit {...props} />}
                          />
                          <Route
                            path="/esprit/gouvernance/strategique"
                            render={props => <GouvernanceStrategique {...props} />}
                          />
                          <Route
                            path="/esprit/gouvernance/servicesesprit"
                            render={props => <ServicesEcole {...props} />}
                          />
                          <Route
                            path="/esprit/politiquequalite"
                            render={props => <PolitiqueQualite {...props} />}
                          />
                          <Route
                            path="/esprit/salledepresse"
                            render={props => <SalleDePresse {...props} />}
                          />
                          {/* Esprit Routes */}
                          {/* Admission Routes */}
                          <Route
                            path="/admission/espritprepa"
                            render={props => <EspritPrepa {...props} />}
                          />
                          <Route
                            path="/admission/espritschoolofbusiness"
                            render={props => <ESB {...props} />}
                          />
                          <Route
                            path="/admission/espritingenieur"
                            render={props => <EspritIngenieur {...props} />}
                          />
                          {/* Admission Routes */}
                          {/* Formation Routes*/}
                          <Route
                            path="/formation/ESB/presentation"
                            render={props => <PresentationESB {...props} />}
                          />
                          <Route
                            path="/formation/ESB/reglement"
                            render={props => <ReglementESB {...props} />}
                          />
                          <Route
                            path="/formation/ESB/inscription"
                            render={props => <InscriptionESB {...props} />}
                          />
                          <Route
                            path="/formation/ESB/specialites"
                            render={props => <SpecialitesESB {...props} />}
                          />
                          <Route
                            path="/formation/espritIngenieur/presentation"
                            render={props => <PresentationIngenieur {...props} />}
                          />
                           <Route
                            path="/formation/espritIngenieur/calendrierexamens"
                            render={props => <CalendrierExamen {...props} />}
                          />
                           <Route
                            path="/formation/espritIngenieur/languesdevpersonnel"
                            render={props => <LanguesEtDev {...props} />}
                          />
                           <Route
                            path="/formation/espritIngenieur/reglement"
                            render={props => <ReglementIngenieur {...props} />}
                          />
                           <Route
                            path="/formation/espritIngenieur/specialitesetoptions"
                            render={props => <SpecialiteEtOptions {...props} />}
                          />
                           <Route
                            path="/formation/espritIngenieur/stages"
                            render={props => <StagesIngenieur {...props} />}
                          />
                          <Route
                            path="/formation/espritPrepa/classeMPSI"
                            render={props => <ClasseMPSI {...props} />}
                          />
                          <Route
                            path="/formation/formationcontinue/coursdusoir"
                            render={props => <CoursDuSoir {...props} />}
                          />
                          <Route
                            path="/formation/formationcontinue/executiveMBA"
                            render={props => <ExecutiveMBA {...props} />}
                          />
                          {/* Formation Routes*/}
                          <Route path="/" render={() => <HomeOne />} />
                          <Redirect to="/not-found" />
                        </Switch>
                      </section>
                    </CSSTransition>
                  )}
                />
                <ScrollUpBtn />
              </div>
            </Page>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
