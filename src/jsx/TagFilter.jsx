import React, { Component } from "react";
import TagButton from "./TagButton.jsx";

import "../style/filter.less"

class TagFilter extends Component {
    render() {
        list = <ul />;
        for (tag in this.props.usedTags) {
            list.appendChild(<li><TagButton value={this.props.usedTags[tag]}/></li>);
        }
        return (
        <div className="tagFilter">
            <FilterInput />
            {list}
        </div>
        )
    }
}
