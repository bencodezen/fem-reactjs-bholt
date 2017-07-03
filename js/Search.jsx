import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data';

const Search = () =>
	<div className="search">
		<div>
			{preload.shows.map(show =>
				<ShowCard key={show.imdbID} show={show} />
			)}
		</div>
	</div>;

export default Search;
