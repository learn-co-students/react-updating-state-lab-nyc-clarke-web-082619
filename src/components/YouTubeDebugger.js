import React, { Component } from 'react'

export default class YouTubeDebugger extends Component{

    constructor(){
        super();
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

    bitrateClick = () => {
        this.setState({settings: {...this.state.settings, bitrate: 12}})

        // console.log(this.state.settings.bitrate)
    }

    resolutionClick = () => {
        this.setState({settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}})
        
        // console.log(this.state.settings.video.resolution)
    }

    // bitrateClick = () => {
    //     let updateBitrate = {...this.state.settings}
    //     updateBitrate.bitrate = 12
    //     this.setState({updateBitrate})

    //     console.log(this.state.settings.bitrate)
    // }

    // resolutionClick = () => {
    //     let updateResolution = {...this.state.settings.video}
    //     updateResolution.resolution = '720p'
    //     this.setState({updateResolution})

    //     console.log(this.state.settings.video.resolution)
    // }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.bitrateClick}>Bitrate</button>
                <button className='resolution' onClick={this.resolutionClick}>Resolution</button>
            </div>
        )
    }

}