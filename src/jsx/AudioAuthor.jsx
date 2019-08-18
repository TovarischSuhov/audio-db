import React, { Component } from "react";

import "../style/audioauthor.less";

class AudioAuthor extends Component {
    render() {
        return (
            <div className="AudioAuthor aboutElement">
            <input className="aboutElement" type="text" placeholder="Автор произведения" />
            </div>
        )
    }
}

export default AudioAuthor;

