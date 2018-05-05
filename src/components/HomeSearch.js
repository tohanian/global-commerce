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
				<ul className="home-search-header">
					<li>New Listings</li>
					<li>Loans</li>
				</ul>
				<form onSubmit={this.handleSearchSubmit}>
					<input
						type="text"
						name="search"
						placeholder="Search listings by city, neighborhood, or zip code"
						onChange={this.handleSearchChange}
						value={this.state.searchQuery}
						className="landing-page-search-input"
					/>
					<input type="submit" className="landing-page-search-submit-btn" />
				</form>
			</div>
		);
	}
}

export default HomeSearch;
