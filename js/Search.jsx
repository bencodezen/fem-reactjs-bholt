import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data';

const Search = () =>
	<div className="search">
		<header>
			<h1>React Video Player</h1>
			<input type="text" placeholder="Search" />
		</header>
		<div>
			{preload.shows.map(show =>
				<ShowCard key={show.imdbID} show={show} />
			)}
		</div>
	</div>;

export default Search;
