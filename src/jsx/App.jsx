import React, { Component } from "react";

import AboutPane from "./AboutPane.jsx";
import MainPane from "./MainPane.jsx";

import "../style/app.less";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="app">
                <AboutPane selectedItem={this.state.selectedAudio}/>
                <MainPane usedTags={this.state.usedTags} />
            </div>
        )
    }
}

export default App;
