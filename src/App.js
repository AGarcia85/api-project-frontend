import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Characters from "./components/Characters";
import CharacterData from "./components/CharacterData";
import Create from "./components/Create"
import BadImage from "./image/breakingbad.jpg";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterData: [],
      singleData: [],
    }
    this.singleChar = this.singleChar.bind(this);
  }
  componentDidMount() {
    fetch("https://alexg-api-backend.herokuapp.com/")
      .then(res => res.json())
        .then(res => {
          this.setState({ characterData: res }) 
        console.log(this.state.characterData) 
        })  
          
  }
  singleChar() {
    this.setState({ singleData: this.state.characterData })
  }
  
  render() {
    
    let charData = this.state.characterData.map(char => {
      return( <Characters key={char.id} name={char.name} addNew={this.addNew}/>)
    })
    
    return (
      <div className="container">
        <nav>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/characters">
            <h2>Characters</h2>
          </Link>
          <Link to="/create">
            <h2>Create Character</h2>
          </Link>
        </nav>
        <Route path="/" exact component={App}>
          <img className="title" src={BadImage} alt="hiesenburg" />
        </Route>
        
        <main >
          <Route path="/characters" exact component={Characters}>
            <div className="list">
          <ul>{ charData }</ul>
          </div>
          </Route>
          <Route path="/create" component={Create} />
          <Route path="/characterData/:character"
          render={routerProps => (
          <CharacterData
            {...routerProps}
            {...this.state}
            singleChar={this.singleChar}
          />
          )}
          />
        </main>
      </div>
    )
  }
}

export default App;
