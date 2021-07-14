import React, { useState } from 'react';
import './App.css';

function App(props){
  const [cep, setCep] = useState({});

  function handleTextChange(e){
    e.preventDefault()
    fetch(`https://viacep.com.br/ws/${e.target.value}/json`)
      .then(res => res.json())
      .then(res => setCep(res))
  }

  return(
    <div className="app">
        <h1>Buscar CEP</h1>
        <strong>Olá, {props.name}</strong>
        <div>
            Digite o cep:
            <input className="input" type="text" onChange={handleTextChange} />
        </div>
        <div className="data-cep">
          {Object.entries(cep).map((values, key) => {
            return(
              <p key={key}><strong>{values[0]}:</strong>{values[1]}</p>
            )
          })}
        </div>
    </div>
  )
}

export default App;
