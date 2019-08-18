import React, { Component } from "react";

import "../style/audio.less";

class Audio extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.audio);
        let downloadName = this.props.audio.name + ".mp3";
        return(
            <div className="audio">
                <label>{this.props.audio.name}</label>
                <audio controls src={this.props.audio.path}></audio>
                <a href={this.props.audio.path} download={downloadName} className="downloadButton">Download</a>
            </div>
        );
    }
}

export default Audio;
