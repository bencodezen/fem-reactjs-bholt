import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data';

const Search = () =>
	<div className="search">
		{preload.shows.map(show => <ShowCard show={show} />)}
	</div>;

export default Search;
