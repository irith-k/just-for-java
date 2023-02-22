import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import React from 'react';
import './App.css';
import axios from 'axios';
import SideBar from './components/SideBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Variables from './components/Variables';
import Printing from './components/Printing';
import UserInput from './components/UserInput';
import IfStatement from './components/IfStatement';
import BooleanLogic from './components/BooleanLogic';
import ForLoop from './components/ForLoop';
import WhileLoop from './components/WhileLoop';
import Comments from './components/Comments';
import Functions from './components/Functions';
import RandomNumbers from './components/RandomNumbers';
import ASCII from './components/ASCII';
import Break from './components/Break';
import Strings from './components/Strings';
import Mathematics from './components/Mathematics';
import ArrayList from './components/ArrayList';
import HashMap from './components/HashMap';
import Arrays from './components/Array';
import Arithmetic from './components/Arithmetic';
import Nesting from './components/Nesting';
import GettingStarted from './components/GettingStarted';
import TwoDimArrays from './components/TwoDimArrays';
import Searching from './components/Searching';
import Constants from './components/Constants';
import Overloading from './components/Overloading';
import ForEachLoop from './components/ForEachLoop';
import EscapeSequences from './components/EscapeSequences';
import Oof from './components/Oof';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ReactGA from 'react-ga';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class App extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const trackingId = "UA-183909754-1";
    ReactGA.initialize(trackingId);
    ReactGA.pageview("/")
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    if(user){
      ReactGA.set({
        userId: user.uid
      })
    }
    return (
      <Router>
        <div className="full">
          <div className = "title">
            <h1>
              just for java
            </h1>
            {
                user
                  ? <button className="login" onClick={signOut}>sign out of account</button>
                  : <button className="login" onClick={signInWithGoogle}>sign in with google</button>
              }

          </div>
          <div className = "bottom">
            <SideBar />
            <div className = "content"> 
              <Switch>
                <Route exact path="/">
                  <Home user={user} page="home"/>
                </Route>
                
                <Route path="/constants">
                  <Constants user={user} page="constants"/>
                </Route>

                <Route path="/about">
                  <About user={user} page="about"/>
                </Route>

                <Route path="/contact-us">
                  <ContactUs user={user} page="contact us"/>
                </Route>

                <Route path="/variables">
                  <Variables user={user} page="variables"/>
                </Route>

                <Route path="/printing">
                  <Printing user={user} page="printing"/>
                </Route>

                <Route path="/user-input">
                  <UserInput user={user} page="user input"/>
                </Route>

                <Route path="/if-statement">
                  <IfStatement user={user} page="if statement"/>
                </Route>

                <Route path="/boolean-logic">
                  <BooleanLogic user={user} page="boolean logic"/>
                </Route>

                <Route path="/for-loop">
                  <ForLoop user={user} page="for loop"/>
                </Route>

                <Route path="/while-loop">
                  <WhileLoop user={user} page="while loop"/>
                </Route>

                <Route path="/comments">
                  <Comments user={user} page="comments"/>
                </Route>

                <Route path="/functions">
                  <Functions user={user} page="functions"/>
                </Route>

                <Route path="/for-each-loop">
                  <ForEachLoop user={user} page="for-each loop"/>
                </Route>

                <Route path="/random-numbers">
                  <RandomNumbers user={user} page="random numbers"/>
                </Route>

                <Route path="/ascii">
                  <ASCII user={user} page="ascii"/>
                </Route>

                <Route path="/hashmap">
                  <HashMap user={user} page="hashmap"/>
                </Route>

                <Route path="/array">
                  <Arrays user={user} page="array"/>
                </Route>

                <Route path="/math">
                  <Mathematics user={user} page="math"/>
                </Route>

                <Route path="/strings">
                  <Strings user={user} page="strings"/>
                </Route>

                <Route path="/escape-sequences">
                  <EscapeSequences user={user} page="escape sequences"/>
                </Route>

                <Route path="/arraylist">
                  <ArrayList user={user} page="arraylist"/>
                </Route>

                <Route path="/arithmetic">
                  <Arithmetic user={user} page="arithmetic"/>
                </Route>

                <Route path="/break">
                  <Break user={user} page="break"/>
                </Route>

                <Route path="/getting-started">
                  <GettingStarted user={user} page="getting started"/>
                </Route>

                <Route path="/nesting">
                  <Nesting user={user} page="nesting"/>
                </Route>

                <Route path="/2d-array">
                  <TwoDimArrays user={user} page="2d array"/>
                </Route>

                <Route path="/searching">
                  <Searching user={user} page="searching"/>
                </Route>

                <Route path="/overloading">
                  <Overloading user={user} page="overloading"/>
                </Route>

                <Route>
                  <Oof user={user} page="oof"/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);