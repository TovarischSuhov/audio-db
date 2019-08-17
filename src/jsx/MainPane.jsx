import React, { Component } from "react";
import TagFilter from "./TagFilter.jsx";
import AudioList from "./AudioList.jsx";

import "../style/mainpane.less";

class MainPane extends Component {
    render(){
        return (
            <div className="mainPane">
                <TagFilter usedTags={this.props.usedTags} />
                <AudioList />
            </div>
        );
    }
}
