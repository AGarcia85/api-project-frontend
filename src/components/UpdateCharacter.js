import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            birthday: "",
            occupation: "",
            nickname: "",
            status: "",
            portrayed: ""
        };
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://alexg-api-backend.herokuapp.com/", this.state) 
            .then(res => {
                console.log(res);
            })
            .then(err => {
                console.log(err)
        });
      }

      render() {
        return (
            <div className='contain'>
                <div className='add'>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='name'
                            placeholder='Character Name'
                            
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='birthday'
                            placeholder='Birthday'
                            
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='occupation'
                            placeholder='Occupation'
                            
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='nickname'
                            placeholder='Nickname'
                            
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='status'
                            placeholder='Status'
                            
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='portrayed'
                            placeholder='Portrayed by'
                            
                            onChange={this.handleChange}
                        />
                        <button type='submit' className='addChar' onSubmit={this.handleSubmit}>Submit Character</button>
                    </form>    
                </div>

            </div>
        )
    }
      
}

export default Update