// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here

import React from 'react';


export default class YouTubeDebugger extends React.Component {

    constructor(){
        super();

        this.state =   {
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
    

    updateBitrate = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          });
    }

    updateResolution = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                  resolution: '720p'
              }
            }
          })
    }


    render () {
        return (<div>
            <button onClick={this.updateBitrate} className='bitrate'>{this.state.settings.bitrate}</button>
            <button onClick={this.updateResolution} className='resolution'>{this.state.settings.video.resolution}</button>
        </div>)
    }
}