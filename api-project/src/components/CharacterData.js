import React, { Component } from "react"


class CharacterData extends Component {
    render() {
        const charInfo = [];
            
            this.props.characterData.forEach(item => {
                charInfo.push(
                    <div key={item._id}>
                    <h1>{item.name}</h1>
                    <img className="charImage" src={item.img} alt="pic"/>
                    <h3>ID: {item.char_id}</h3>
                    <h3>Occupation: {item.occupation[0]}</h3>
                    <h3>{item.occupation[1]}</h3>
                    <h3>{item.occupation[2]}</h3>
                    <h3>{item.occupation[3]}</h3>
                    <h3>Birthday: {item.birthday}</h3>
                    <h3>Nickname: {item.nickname}</h3>
                    <h3>Status: {item.status}</h3>
                    <h3>Portrayed By: {item.portrayed}</h3>
                    </div>
                )
            });
        return (
            <div className="info">
                <div >{charInfo}</div>
            </div>
        )
    }
}

export default CharacterData;