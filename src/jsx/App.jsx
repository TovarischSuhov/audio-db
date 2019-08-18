import React, { Component } from "react";

import AboutPane from "./AboutPane.jsx";
import MainPane from "./MainPane.jsx";

import "../style/app.less";

class App extends Component {
    constructor(props){
        super(props);
        this.handleUsedTagsChange = this.handleUsedTagsChange.bind(this);
        this.state = {
            tags: ["aaa", "bbb", "ccc"],
            usedTags: ["aaa"],
            audioList: [{
                name: "Temp melody",
                author: "Some jerk",
                length: "6:66",
                path: "./music/1.mp3",
                tags: ["aaa"],
                id: 1,
            },
            {
                name: "Temp melody",
                author: "Some jerk",
                length: "6:66",
                path: "./music/2.mp3",
                tags: ["bbb"],
                id: 2,
            }],
        };
    }

    render() {
        return (
            <div className="app">
                <AboutPane selectedItem={this.state.selectedAudio}/>
                <MainPane usedTags={this.state.usedTags} tags={this.state.tags} audioList={this.state.audioList} onUsedTagsChange={this.handleUsedTagsChange}/>
            </div>
        )
    }

    handleUsedTagsChange(action, name) {
        let tags = this.state.usedTags;
        if (action === "add") {
            tags.push(name);
        } else if (action === "delete") {
            for (let i in tags) {
                if (tags[i] === name) {
                    delete tags[i];
                }
            }
        }
        this.setState({usedTags: tags})
    }
}

export default App;
