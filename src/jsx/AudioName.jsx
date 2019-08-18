import React, { Component } from "react";

import "../style/audioname.less";

class AudioName extends Component {
    render() {
        return (
            <div className="audioName aboutElement">
            <input className="aboutElement" type="text" placeholder="Название трека"/>
            </div>
        )
    }
}

export default AudioName;

