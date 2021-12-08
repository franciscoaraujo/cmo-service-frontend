import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React, { useState } from 'react';

import TelaLogin from '../Components/TelaLogin';
import './App.css';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

//recuperando o token
function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  //const [token, setToken] = useState();
  const token = getToken();
  return <TelaLogin setToken={setToken} />
}

export default App;
