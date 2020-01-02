import React, { Component } from "react"
import { Link } from "react-router-dom"

class Characters extends Component {

    render() {
        console.log(this.props.name)
        
        return (
            <div className="names">
                <Link to="characterData">
                    <ul>
                        {this.props.name}
                    </ul>
                </Link>   
            </div>
        )
    }
}

export default Characters;