import React, {Component} from 'react';
import axios from 'axios'

import ShowList from './Components/ShowList'
import SearchField from './Components/SearchField'
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      shows: []
    }
  }

  componentDidMount() {
    this.preformSearch();
  }

  preformSearch = (query = 'marvel') => {
    axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(responce => {
        this.setState({
          loading: false,
          shows: responce.data
        })
      })
      .catch(error => {
        console.log("Error fetching and parsing data");
      })
  }

  render() {
    console.log(this.state.shows)
    return (
      <div>
        <div>
          <SearchField onSearch={this.preformSearch}/>
          <ShowList data={this.state.shows} />
        </div>
      </div>
      
    );
  }
}