import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContextContainer from './components/ContextContainer';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <ContextContainer>
        <div className="main-container" id="home">
        <Navigation />
          <Main/>
          <Projects/>
        {/* <Route path="/" component={}/>
        <Route path="/" component={}/> */}
        </div>
      </ContextContainer>
    </Router>
  );
}

export default App;
