import React, { useState } from "react";
import "./App.css";
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [sub, setSub] = useState("");
  const [isFriendly, setIsFriendly] = useState(true); // Default true
  const [age, setAge] = useState(1); // Minimum age set to 1

  const submitAlien = () => {
    Axios.post('http://localhost:9000/aliens', {
      name: name,
      branch: branch,
      sub: sub,
      isFriendly: isFriendly,
      age: age
    }).then(() => {
      alert("Alien submitted successfully!");
    });
  };

  return (
    <div className="App">
      <h1>Alien CRUD Application</h1>
      <div className="information">
        <label><b>Name</b></label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />

        <label><b>Branch</b></label>
        <input
          type="text"
          name="branch"
          onChange={(e) => {
            setBranch(e.target.value);
          }}
          required
        />

        <label><b>Subject</b></label>
        <input
          type="text"
          name="sub"
          onChange={(e) => {
            setSub(e.target.value);
          }}
          required
        />

        <label><b>Is Friendly</b></label>
        <input
          type="checkbox"
          name="isFriendly"
          checked={isFriendly}
          onChange={(e) => {
            setIsFriendly(e.target.checked);
          }}
        />

        <label><b>Age</b></label>
        <input
          type="number"
          name="age"
          min="1"
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
          required
        />

        <button onClick={submitAlien}><b>Submit</b></button>
      </div>
    </div>
  );
}

export default App;
