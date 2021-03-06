import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Layout from './components/Layout'
import NavigationBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar> </NavigationBar>
        
        <Layout>
          <Router>
            <Switch>
              <Route exact path = "/" component = {Home}/> 
              <Route path = "/about" component = {About}/> 
              <Route component = {NoMatch}/> 
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
      
    );
  }
}

export default App;