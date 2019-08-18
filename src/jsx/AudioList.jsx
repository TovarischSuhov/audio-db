import React, { Component } from "react";
import Audio from "./Audio.jsx";


import "../style/audiolist.less";

class AudioList extends Component {
    render() {
        const audioList = this.props.audioList;
        let listItems = [];
        for (let i in audioList) {
            listItems.push(<li key={i}><Audio audio={audioList[i]} /></li>);
        }
        return (
            <div className="audioList">
            <ul>{listItems}</ul>
            </div>
        );
    }
}

export default AudioList;
