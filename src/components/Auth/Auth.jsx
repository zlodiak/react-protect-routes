import React, { useState, createRef } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoginCreator, setPasswordCreator, setAuthCreator } from '../../redux/authReducer';

const mapStateToProps = state => {
  return {
    login: state.authReducer.login,
    password: state.authReducer.password,
  }
}

function Auth(props) {
  const history = useHistory();
  const loginRef = React.createRef();
  const passwordRef = React.createRef();

  const auth = () => {
    if(loginRef.current.value === 'l' && passwordRef.current.value === 'p') {
      props.setAuthCreator(true);
      alert('auth is successfull');
      props.setLoginCreator('');
      props.setPasswordCreator('');
      history.push("/page3");
    } else {
      props.setAuthCreator(false);
      alert('auth is failed');
    }
  }

  function loginChange() {
    props.setLoginCreator(loginRef.current.value);
  }

  function passwordChange() {
    props.setPasswordCreator(passwordRef.current.value);
  }

  return (
    <>
      <div className="login-form">
        <input type="text" onChange={ loginChange } ref={ loginRef } value={ props.login || '' } />
        <br />
        <input type="password" onChange={ passwordChange } ref={ passwordRef } value={ props.password || '' }/>
        <br/>
        <button onClick={ auth }>auth</button>
      </div>
    </>
  );
}

export default connect(mapStateToProps, { setLoginCreator, setPasswordCreator, setAuthCreator })(Auth);
