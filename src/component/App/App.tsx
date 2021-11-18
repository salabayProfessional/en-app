import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from '../../Pages/Main/Main';
import Profile from '../../Pages/Profile/Profile';
import SignIn from '../../Pages/Sign-in/Sign-in';
import Tests from '../../Pages/Tests/Tests';
import Header from '../Header/Header';
import Story from '../../Pages/Story/Story';
import { Container } from 'reactstrap';
import "./App.scss";
import ErrorBoundry from '../ErrorBoudry/ErrorBoundry';

const App: React.FC = () => {
  console.log(this)
  return (
   <ErrorBoundry>
      <Router>
        <Header />
        <Switch>
          <Container fluid>
            <Route path="/main" exact component={Main}/>
            <Route path="/sign-in" exact component={SignIn}/>
            <Route path="/story" exact component={Story}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/profile/:id" exact component={Profile}/>
            <Route path="/tests" exact component={Tests}/>
          </Container>
        </Switch>
      </Router>
   </ErrorBoundry>
  )
}

export default App;