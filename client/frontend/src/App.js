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
                            render={(props)  => <SingleBlog {...props} />}
                          />
                          <Route path="/events" render={(props) => <Events  {...props}/>} />
                          <Route path="/blog-two" render={(props) => <BlogTwo  {...props}/>} />
                          <Route
                            exact
                            path="/blog-one"
                            render={(props) => <BlogOne {...props} />}
                          />
                          <Route path="/recrutment" render={(props) => <Recrutment {...props} />} />
                          <Route path="/recherche_et_developement" render={(props) => <RDI {...props} />} />
                          <Route path="/clubs" render={(props) => <Clubs {...props} />} />
                          <Route path="/" render={() =>  <HomeOne />  }/>
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
