import React from 'react';
import Modal from '../components/Login/modal';
import axios from 'axios';

import { bindActionCreators } from 'redux';

import * as loginActions from '../store/module/login';

const LoginContainer = (props)  => {
  const { LoginActions, isLoggedIn } = props;
  const handleLogin = async (email, password) => {
    const res = await axios.get("http://localhost:5000/api/auth/login")
    if(res){
      LoginActions.userLogin()
      localStorage.setItem("isLogin", "true")
    }
  }
  const handleLogout = () => {
    LoginActions.userLogout()
    localStorage.removeItem("isLogin")
  }

  return (
    <Modal onLogin={handleLogin} onLogout={handleLogout} />
  )
}


const mapStateToProps = ({ login })=> ({
  isLoggedIn: login.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
  LoginActions: bindActionCreators(loginActions, dispatch),
});