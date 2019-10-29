// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component{

    constructor(){
        super();
        this.state={
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

    setBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, ()=> console.log(this.state.settings.bitrate))

    }
    
    setResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, ()=> console.log(this.state.settings.video.resolution))
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.setBitrate}>set bitrate</button>
                <button className="resolution" onClick={this.setResolution}>change resolution</button>
            </div>
        )
    }

}

export default YouTubeDebugger