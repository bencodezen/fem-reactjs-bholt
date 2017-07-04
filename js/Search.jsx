import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: 'this is some sort of debug statement'
		};

		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	handleSearchTermChange(event) {
		this.setState({ searchTerm: event.target.value });
	}

	render() {
		return (
			<div className="search">
				<header>
					<h1>React Video Player</h1>
					<input
						type="text"
						placeholder="Search"
						value={this.state.searchTerm}
						onChange={this.handleSearchTermChange}
					/>
				</header>
				<div>
					{preload.shows.map(show =>
						<ShowCard key={show.imdbID} show={show} />
					)}
				</div>
			</div>
		);
	}
}

export default Search;
