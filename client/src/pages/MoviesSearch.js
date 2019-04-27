import React, {Component} from 'react';

import '../Misc/css/MoviesSearch.css'

class MovieSearch extends Component {
	constructor(props) {
		super(props)

		const movies = [
			{id:0, poster_src:"", title:"Avengers: Infinity War", overview: "summary"},
			{id:1, poster_src:"", title:"Avengers", overview: "summary"},
			{id:2, poster_src:"", title:"Avengers: Infinity War", overview: "summary"},
			{id:3, poster_src:"", title:"Avengers", overview: "summary"}
		]

		this.state = {row: [
			<p key="1">this is my row0</p>,
			<p key="2">this is my row1</p>,
			<p key="3">this is my row2</p>
		]}

		var movieRows = [];
		movies.forEach((movie) => {
			console.log(movies.id)
			const movieGrid = 
			
			<div class="col-sm-6" key={movie.id}>
				<img alt="poster" src= {movie.poster_src}/>
				{movie.title}
				<p>{movie.overview}</p>
			  </div> 
		
		movieRows.push(movieGrid)
		})

		this.state = {rows: movieRows};
	}
render() {
return(
	<div>
	<div class="search-container">
  		<div class="row">
    		<div class="col-sm">
      			<input className="search-bar" placeholder="Please enter movie name"/>
    		</div>
  		</div>
	</div>
	<div class="container">
	<div class="row" >
	{this.state.rows}
	</div>
	</div>
</div>
	)
	}
}

export default MovieSearch;