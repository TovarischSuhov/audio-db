import React, { Component } from "react";
import TagFilter from "./TagFilter.jsx";
import AudioList from "./AudioList.jsx";

import "../style/mainpane.less";

class MainPane extends Component {
    render(){
        return (
            <div className="mainPane">
                <TagFilter usedTags={this.props.usedTags} tags={this.props.tags} onUsedTagsChange={this.props.onUsedTagsChange}/>
                <AudioList audioList={this.props.audioList}/>
            </div>
        );
    }
}

export default MainPane;
