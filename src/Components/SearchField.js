import React, { Component } from 'react'

export default class SearchField extends Component {
    state = {
        searchText: ''
    }

    // Method that is triggered when the text is changed in the search field
    onSearchChange = e => {
        this.setState({searchText: e.target.value})
    }

    // Gets the text from the field and passess it to the onSearch method provided to the component as a prop
    handleSubmit = e => {
        e.preventDefault()
        this.props.onSearch(this.query.value)
        e.currentTarget.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onSearchChange} name="search" ref={(input) => this.query = input} placeholder="Enter a show..."/>
                <button type="submit" id="submit">search</button>
            </form>
        )
    }
}