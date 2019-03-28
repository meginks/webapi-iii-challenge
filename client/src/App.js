import React, { Component } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import './App.css';

import { Route } from 'react-router-dom'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  
  componentDidMount() {
    console.log("componentdidmount");
    axios
    .get(`http://localhost:4005/api/users/`) 
    .then( users => 
      this.setState({users: users.data})
    )
    .catch(error => console.log(error))
  } 

  render() {
    return (
      <div className="App"> 
      <h1>Users</h1>
       <UsersList users={this.state.users} /> 
       <Route path="/" component={UsersList} />
      </div> 
    );
  }
}

export default App;
