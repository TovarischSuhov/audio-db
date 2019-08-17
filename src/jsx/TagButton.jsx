import React, { Component } from "react";
import removeIcon from "../img/crossButton.svg"
import "../style/tagbutton.less"

class TagButton extends Component {
    render(){
        return (
            <div className="tagButton">
                <label>{this.props.value}</label>
                <button onClick={}><img src={removeIcon} /></button>
            </div>
        );
    }
}
