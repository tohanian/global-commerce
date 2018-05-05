import React, { Component } from "react";

class HomeSearch extends Component {
	state = {
		searchQuery: ""
	};

	handleSearchChange = e => this.setState({ searchQuery: e.target.value });

	handleSearchSubmit = e => {
		e.preventDefault();
		console.log("search query", this.state.searchQuery);
		this.setState({ searchQuery: "" });
	};

	render() {
		return (
			<div className="home-search">
				<div className="home-search-header">
					This will contain duplicate info as the header.
				</div>
				<form onSubmit={this.handleSearchSubmit}>
					<input
						type="text"
						name="search"
						placeholder="Search listings by city, neighborhood, or zip code"
						onChange={this.handleSearchChange}
						value={this.state.searchQuery}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default HomeSearch;
