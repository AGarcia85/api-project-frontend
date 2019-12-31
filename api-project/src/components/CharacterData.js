import React, { Component } from "react"


class CharacterData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charId: [],
            charName: [],
            charImage: [],
            charBDay: [],
            charNickName: [],
            charStatus: [],
            charPortrayed: []
        }
    }
    render() {
        console.log(this.props.characterData)

        let charId = this.props.characterData.map( item => {
            return(item.char_id)
          })
          console.log(charId)
        
        return (
            <div>
                {}
            </div>
        )
    }
}

export default CharacterData;