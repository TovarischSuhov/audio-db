import React, { Component } from "react";

import AboutPane from "./AboutPane.jsx";
import MainPane from "./MainPane.jsx";

import "../style/app.less";

class App extends Component {
    render() {
        return (
            <div className="app">
                <AboutPane selectedItem={this.state.selectedAudio}/>
                <MainPane usedTags={this.state.usedTags}>
            </div>
        )
    }
}
