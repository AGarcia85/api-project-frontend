import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Characters from "./components/Characters";
import CharacterData from "./components/CharacterData";
import BadImage from "./image/breakingbad.jpg";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterData: [],
    }
  }
  componentDidMount() {
    fetch("https://alexg-api-backend.herokuapp.com/")
      .then(res => res.json())
        .then(res => {
          this.setState({ characterData: res }) 
        })  
        console.log(this.state.characterData)    
  }  
  render() {
    
    let charData = this.state.characterData.map(char => {
      return( <Characters key={char.id} name={char.name} />)
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
        <Route path="/" exact component={App}>
          <img className="title" src={BadImage} alt="hiesenburg" />
        </Route>
        
        <main className="container">
          <Route path="/characters" exact component={Characters}>
          <ul>{ charData }</ul>
          </Route>
          <Route path="/characterData" exact component={CharacterData}>
          <CharacterData characterData={this.state.characterData} />
          </Route>
        </main>
      </div>
    )
  }
}

export default App;
