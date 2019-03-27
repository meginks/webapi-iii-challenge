import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
      <h1>Test</h1>
       {this.state.users.map(user => {
         return (
           <div key={user.id}>
             {user.name}
             </div>
         )
       })}
      </div>
    );
  }
}

export default App;
