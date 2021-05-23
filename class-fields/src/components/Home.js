import React, { Component } from 'react';

class Home extends Component {
    constructor(...args) {
        super(...args)
        // this.state = {clicks: 0}
        //this.handleClick = this.handleClick.bind(this)
    }

    state = {clicks: 0}
    // handleClick = function() {
    //     this.setState(prevState => {
    //         return {clicks: prevState.clicks + 1}
    //     })
    // }.bind(this)
    //OR
    //lexical binding using an arrow function
    handleClick = () => {
        this.setState(prevState => {
            return {clicks: prevState.clicks + 1}
        })
    }


    render(){
    return(
        <div>
            <div>
                Click Count: {this.state.clicks}
            </div>
            <button 
            onClick={this.handleClick}
            >
                Click Here
            </button>
        </div>
    )   
    }
}

export default Home