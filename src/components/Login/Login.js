import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import axios from "axios";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <div class="text-center mt-4 name">Login Page</div>
        <form onSubmit={handleSubmit}>
        <div class="form-field d-flex align-items-center">
            <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div class="form-field d-flex align-items-center">
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button class="btn mt-3" type="submit">Login</button>
        </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }