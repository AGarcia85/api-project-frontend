import React, { Component } from "react"


class CharacterData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charId: [],
            charName: [],
            charImage: [],
            charBDay: [],
            charNick: [],
            charStatus: [],
            charPortrayed: []
        }
    }
    render() {
        console.log(this.props.characterData)

        const charInfo = [];
            
            this.props.characterData.forEach(item => {
                charInfo.push(
                    <div key={item._id}>
                    <h1>{item.name}</h1>
                    <img className="charImage" src={item.img}/>
                    <h3>Id: {item.char_id}</h3>
                    <h3>Birthday: {item.birthday}</h3>
                    <h3>Nickname: {item.nickname}</h3>
                    <h3>Status: {item.status}</h3>
                    <h3>Portrayed By: {item.portrayed}</h3>
                    </div>
                )
            });

        // let charId = this.props.characterData.map( item => {
        //     return(item.char_id)
        //   }) 
        
        // let charName = this.props.characterData.map( item => {
        //     return(item.name)
        //   })
          
        // let charImage = this.props.characterData.map( item => {
        //     return(item.img)
        //   })

        // let charBDay = this.props.characterData.map( item => {
        //     return(item.birthday)
        //   })

        // let charNick = this.props.characterData.map( item => {
        //     return(item.nickname)
        //   })

        // let charStatus = this.props.characterData.map( item => {
        //     return(item.status)
        //   })

        // let charPortrayed = this.props.characterData.map( item => {
        //     return(item.portrayed)
        //   })
        
        return (
            <div className="info">
                {charInfo}
                {/* <h1 className="charName">{charName[0]}</h1>
                <img src={charImage[0]} />
                <p>ID: {charId[0]}</p>
                <p>Birthday: {charBDay[0]}</p>
                <p>Nickname: {charNick[0]}</p>
                <p>Status: {charStatus[0]}</p>
                <p>Portrayed By: {charPortrayed[0]}</p> */}
            </div>
        )
    }
}

export default CharacterData;