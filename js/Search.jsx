import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data';

const Search = () =>
	<div className="search">
		{preload.shows.map(show => <ShowCard key={show.imdbID} show={show} />)}
	</div>;

export default Search;
