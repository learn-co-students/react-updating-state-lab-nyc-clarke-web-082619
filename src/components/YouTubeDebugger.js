// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitrate = (event) => {
        this.setState(prevState => {
            return{
            settings: prevState.settings ={
                bitrate: 12,
                video: {
                  resolution: '1080p'
                }
            }
            }
        }, () => {
            console.log(this.state)
        })
    }

    handleRes = (event) => {
        this.setState(prevState=>{
            return {
                settings: prevState.settings ={
                    bitrate: 8,
                    video: {
                      resolution: '720p'
                    }
                }
            }
        }, ()=>{
            console.log(this.state)
        })
    }


    render(){
        return (
            <div>
            <button 
            className='bitrate'
            onClick={this.handleBitrate}
            >Change Bitrate to 12</button>
            <button
            className='resolution'
            onClick={this.handleRes}
            >Change Resolution to 720
            </button>
            </div>
        )
    }


}
