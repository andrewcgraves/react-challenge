import React, { Component } from 'react'

export default class SearchField extends Component {
    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({searchText: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSearch(this.query.value)
        e.currentTarget.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onSearchChange} name="search" ref={(input) => this.query = input} placeholder="Search..."/>
                <button type="submit" id="submit">search</button>

            </form>
        )
    }
}