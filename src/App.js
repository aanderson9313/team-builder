import React, { useState } from 'react';
import Form from './Components/Form';
import Members from './Components/Members';
import data from './data';
import './App.css';

function App() {
  const [members, setMembers] = useState(data)

  const addNewMember = member => {
    setMembers([ ...members, member])

  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Member List </h2>
        <div className = 'Form-Box'>
        <Form addNewMember = {addNewMember} />
        <Members memberList = {members} />
         
        </div>
     
      </header> 
    </div>
  );
}

export default App;
