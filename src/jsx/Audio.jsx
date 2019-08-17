import React, { Component } from "react";

import "../style/Audio.less";

class Audio extends Component {
    render() {
        return(
            <div className="audio">
                <audio controls src={this.props.audioPath}></audio>
                <a href={this.props.audioPath} download=`${this.props.audioName}.mp3` className="downloadButton"><img src={}></a>
            </div>
        );
    }
}

export default Audio;
