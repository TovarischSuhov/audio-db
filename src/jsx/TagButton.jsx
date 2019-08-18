import React, { Component } from "react";
import removeIcon from "../img/crossButton.svg"
import "../style/tagbutton.less"

class TagButton extends Component {
    constructor(props){
        super(props);
        this.onTagRemove = this.onTagRemove.bind(this);
    }
    render(){
        return (
            <div className="tagButton">
                <label>{this.props.value}</label>
                <button onClick={this.onTagRemove}><img src={removeIcon} /></button>
            </div>
        );
    }

    onTagRemove() {
        this.props.onUsedTagsChange("delete", this.props.value);
    }
}

export default TagButton;
