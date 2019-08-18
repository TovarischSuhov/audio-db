import React, { Component } from "react";
import TagButton from "./TagButton.jsx";
import TagFilterInput from "./TagFilterInput.jsx";

import "../style/filter.less"

class TagFilter extends Component {
    render() {
        const usedTags = this.props.usedTags;
        let listItems = [];
        for (let i in usedTags) {
            listItems.push(<li key={i}><TagButton value={usedTags[i]} onUsedTagsChange={this.props.onUsedTagsChange}/></li>)
        }
        let classNames = "tagFilter";
        if (this.props.extraClass) {
            classNames += " " + this.props.extraClass;
        }
        return (
        <div className={classNames}>
            <TagFilterInput onUsedTagsChanged={this.props.onUsedTagsChange}/>
            <ul>{listItems}</ul>
        </div>
        )
    }
}

export default TagFilter;
