import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    cep: {

    }
  }
  handleTextChange(e){
    fetch(`https://viacep.com.br/ws/${e.target.value}/json`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cep: res
        })
      })
  }
  render(){
    console.log(this.state.cep)
    return(
      <div className="app">
          <h1>Buscar CEP</h1>
          <strong>Olá, {this.props.name}</strong>
          <div>
              Digite o cep:
              <input className="input" type="text" onChange={this.handleTextChange.bind(this)} />
          </div>
          <div className="data-cep">
            {Object.entries(this.state.cep).map((values, key) => {
              return(
                <p key={key}><strong>{values[0]}:</strong>{values[1]}</p>
              )
            })}
          </div>
      </div>
    )
  }
}

export default App;
