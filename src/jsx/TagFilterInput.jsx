import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';

import "../style/tagfilterinput.less"

const getSuggestions = value => {
    return [];
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
    {suggestion.name}
    </div>
);

class TagFilterInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "",
            suggestions: [],
        };
    }
    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Type a tag name',
                value,
                onChange: this.onChange
        };

        return(
            <Autosuggest 
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        )
    }
    onChange(event, newValue) {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested(value) {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested() {
        this.setState({
            suggestions: []
        });
    };
}

export default TagFilterInput;
