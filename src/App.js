import { BrowserRouter, Route, Redirect, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";

import './App.css';
import Auth from './components/Auth/Auth';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';

const mapStateToProps = state => {
  return {
    auth: state.authReducer.auth,
  }
}

function App(props) {
  function PrivateRoute({ component: Component, ...rest }) {
    if(!props.auth) {
      return <Redirect to='/auth'/>;
    }
    return <Component {...rest} />;
  }
  
  return (
    <BrowserRouter>
      <header>
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>             
        <Link to="/page3">page3</Link>             
        <Link to="/auth">auth</Link>             
      </header>
      <br/>
      <br/>
      <br/>
      <main>
        <Switch>
          <Route exact path='/'                 render={ () => <Page1/> }/>
          <Route exact path='/page1'            render={ () => <Page1/> }/>
          <Route exact path='/page2'            render={ () => <Page2/> }/>
          <PrivateRoute exact path='/page3'     render={ () => <Page3/> } component={ Page3 }/>
          <Route exact path='/auth'             render={ () => <Auth/> }/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps, {})(App);
