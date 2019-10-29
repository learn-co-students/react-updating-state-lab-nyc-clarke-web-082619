// Code YouTubeDebugger Component Here
// Code YouTubeDebugger Component Here
import React, {Component,Fragment} from 'react'

class YouTubeDebugger extends Component  {
    constructor(props) {
        super(props);
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
    changeBitrate = () =>{
        this.setState(prevState => {
            return {
                ...prevState,
                settings: {
                    ...prevState.settings, 
                    bitrate: 12,
                }
            }
        });
    }

    changeResolution = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                settings: {
                    ...prevState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        });
    }

    render(){
        return(
            <Fragment> 
                <button className="bitrate" onClick={this.changeBitrate}> </button>
                <button className="resolution" onClick={this.changeResolution}> </button>
            </Fragment>
        );
    }
}

export default YouTubeDebugger;