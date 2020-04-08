import React, { Component } from "react";
import axios from "axios";


class CharacterData extends Component {
    constructor(props) {
        super(props);

        this.deleteCharacter = this.deleteCharacter.bind(this);
    }
    componentDidMount() {
        const character = this.props.match.params.character;
        console.log(character)   
    } 

    deleteCharacter(id) {
        axios.delete("https://alexg-api-backend.herokuapp.com/" +id)
        .then(res => {
            console.log(res);
        })
        this.setState({
            character: this.state.character.filter(char => char._id !==id)
        })
        window.location = '/characters'
    }

    render() {
        const charInfo = this.props.characterData.filter(item => item.name === this.props.match.params.character)
        return (
            <div className="info">
                <h1>{charInfo[0].name}</h1>
                <img className="charImage" src={charInfo[0].img} alt="pic"/>
                <h3>ID: {charInfo[0].char_id}</h3>
                <h3>Occupation: {charInfo[0].occupation[0]}</h3>
                <h3>{charInfo[0].occupation[1]}</h3>
                <h3>{charInfo[0].occupation[2]}</h3>
                <h3>{charInfo[0].occupation[3]}</h3>
                <h3>Birthday: {charInfo[0].birthday}</h3>
                <h3>Nickname: {charInfo[0].nickname}</h3>
                <h3>Status: {charInfo[0].status}</h3>
                <h3>Portrayed By: {charInfo[0].portrayed}</h3>
                <button className="deleteChar" onClick={this.deleteCharacter}>Delete Character</button>
            </div>
        )
    }
}

export default CharacterData;