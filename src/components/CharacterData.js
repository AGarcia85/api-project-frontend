import React, { Component } from "react"


class CharacterData extends Component {
    componentDidMount() {
        const character = this.props.match.params.character;
        console.log(character)   
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
            </div>
        )
    }
}

export default CharacterData;