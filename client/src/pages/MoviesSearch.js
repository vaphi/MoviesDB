import React, {Component} from 'react';

import '../Misc/css/MoviesSearch.css';
import MovieResults from '../components/MovieSearch.js'
import axios from 'axios';

class MovieSearch extends Component {
	constructor(props) {
		super(props)

		this.state = {}
		this.performSearch()
	}

	performSearch(searchTerm) {
		console.log("perform search using movieDB")
		const urlString = "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=439e525f3c7b6259d2526faf374dbf4e&query=" + searchTerm
			axios.get(urlString)
				.then((searchResults) => {
				console.log("Fetched data successfully")
				console.log(searchResults)
				const results = searchResults.data.results
				//console.log(results[0])
				
				var movieRows = []
				
				results.forEach((movie) => {
					console.log(movie.id)
					movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
					const movieGrid = <MovieResults key={movie.id} movie={movie}/>
					movieRows.push(movieGrid)
					})
					this.setState({rows: movieRows})
		})
	}

	searchChangeHandler(event) {
		console.log(event.target.value)
		const boundObject = this
		const searchTerm = event.target.value
		boundObject.performSearch(searchTerm)
	}
	
render() {
return(
	<div>
	<div class="search-container">
  		<div class="row">
    		<div class="col-sm">
      			<input className="search-bar" placeholder="Please enter movie name" onChange={this.searchChangeHandler.bind(this)}/> 
    		</div>
  		</div>
	</div>
	<div class="container">
	<div class="row">
	{this.state.rows}
	</div>
	</div>
</div>
	)
	}
}

export default MovieSearch;