import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/title/:movieId" component={SingleMovie} />
      </Switch>
    </Router>
  );
}

export default App;
