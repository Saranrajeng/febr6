import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    constructor(props) {
      super(props)
    this.state = {
         name: '',
         Comments: ''
       
      }
    }

    UsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    
    CommentsChange = event => {
        this.setState({
            Comments: event.target.value
        })
    }
    
    Submit = event => {
        document.write(`${this.state.username} ${this.state.Comments} `)
        event.preventDefault()
    }


  render() {
    return (
        <form className='App' onSubmit={this.Submit}>
            <div>
                <label>Username</label><br/>
                <input
                type='text' value={this.state.username} 
                onChange={this.UsernameChange}
                />
            </div>
            <div>
                <label>Password</label><br/>
                <input type="password" value={this.state.Comments} 
                onChange={this.CommentsChange}></input>
            </div>
          
            <button className='btn' type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form;