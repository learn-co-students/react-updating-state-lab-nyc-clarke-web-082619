// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            timesClicked: 0
        }
    }
    increment = () =>{
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked + 1            }
        })
    }

    render(){
        return(
            <button onClick={this.increment}>
                {this.state.timesClicked}     
            </button>
        );
    }
}

export default DigitalClicker;