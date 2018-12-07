import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import "./App.css";

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Import components
import Landing from './components/landing/Landing';
import Internships from "./components/internships/Internships";
import InternshipsSearch from "./components/internships/InternshipsSeach";
import InternshipsTag from "./components/internships/InternshipsTag";
import InternshipsCategory from "./components/internships/InternshipsCategory";

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Landing />
            <Route exact path="/" component={Internships} />
            <Route exact path="/search/:keyword" component={InternshipsSearch} />
            <Route exact path="/tag/:tag" component={InternshipsTag} />
            <Route exact path="/category/:category" component={InternshipsCategory} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
