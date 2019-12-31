import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Characters from "./components/Characters";
import CharacterData from "./components/CharacterData"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterData: [],
    }
  }
  componentDidMount() {
    fetch("http://localhost:4010/")
      .then(res => res.json())
        .then(res => {
          //console.log(res)
          this.setState({ characterData: res })
        })
  }
  render() {
    let charData = this.state.characterData.map(char => {
      return( <Characters key={char.name} name={char.name} />)
    })
    return (
      <div>
        <nav>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/characters">
            <h2>Characters</h2>
          </Link>
        </nav>
        <h1 className="title">Breaking Bad</h1>
        <main className="container">
          <Route path="/characters" component={Characters}>
          <Route path="/characterData" component={CharacterData} />
          <CharacterData characterData={this.state.characterData} />
          <ul>
            { charData }
          </ul>
          </Route>  
        </main>
      </div>
    )
  }
}

export default App;
