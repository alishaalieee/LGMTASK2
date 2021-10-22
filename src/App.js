import React, { useState } from "react";
import './App.css'
const App=()=>{

  const [users, setUser] = useState([]);

  const loadUsers = async()=>{
    console.log("Hello");
    const response = await fetch('https://reqres.in/api/users?page=1');

    const json = await response.json();

    setUser(json.data);
  };

  return (
      <React.Fragment>
          <div className="App">
            <header>
                <h1 class="logo">USERS DETAILS</h1>
                <button onClick={ loadUsers } class="one">Get Users</button>
            </header>
            
            <ul class="points">

              {users.map(({ id, email, first_name, last_name, avatar })=> (
              <li class="details" key = {id}>
                <img class="dp" src={avatar}></img>
                
                <li class="about" id="name">Name - {first_name} {last_name}</li>
              
                <li class="about" id="email">Email - {email}</li>
                
                </li>
                ))}
            </ul>
          </div>
      </React.Fragment>
      );
};

export default App;