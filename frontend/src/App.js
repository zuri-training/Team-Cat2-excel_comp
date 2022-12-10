import React, { useState } from "react";
import axios from "axios"

function App() {
  const [email, setEmail] = useState('')

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === "email") {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      email:email
    }

    axios.post("http://localhost:3000/api/sendMail", dataToSubmit)
  }

  return (
    <div className="">
      <header className="App-header">

        <form onSubmit={handleSubmit}>
          <input id="email" placeholder="Email" value={email} onChange={handleClick} />
          <button onClick={handleSubmit}>Submit</button>
        </form>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
