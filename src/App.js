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
        <div className = 'Form-Box'>
        <h1 className = 'Title1' >New Member Form </h1>
        <Form addNewMember = {addNewMember} />
        <h2 className = 'Title2' >Current Member List </h2>
        <Members memberList = {members} />
        <button className = 'edit'>Edit Members </button> 
        </div>
     
      </header> 
    </div>
  );
}

export default App;
