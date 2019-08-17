import React, { Component } from "react";

import "../style/audiolist.less";

class AudioList extends Component {
    render() {
        let list = <ul />;
        for (audio in this.props.audio) {
            list.appendChild(<li><Audio audio={this.props.audio[audio]} /></li>);
        }
        return (
            <div className="audioList">
            {list}
            </div>
        );
    }
}

export default AudioList;
