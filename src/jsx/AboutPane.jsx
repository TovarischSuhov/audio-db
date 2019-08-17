import React, { Component } from "react";
import AudioName from "./AudioName.jsx";
import AudioAuthor from "./AudioAuthor.jsx";
import AudioLength from "./AudioLength.jsx";
import TagFilter from "./TagFilter.jsx";


import "../style/aboutpane.less";

class AboutPane extends Component {
    render(){
        return (
            <div className="aboutPane">
                <AudioName />
                <AudioAuthor />
                <AudioLength />
                <TagFilter />
            </div>
        );
    }
}
