import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


function App() {
  return (
    <div className="app">
        <Router>
          <Switch>
            <Route path="/search">
              <h1>Search page</h1>
            </Route>
            <Route path="/">
              <h1>Home page</h1>
            </Route>
          </Switch>
        </Router>


      {/*<Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div> */}
      

    </div>
  );
}

export default App;
