import React, { Component } from "react";

// Resources
import photo from "../img/landing-page/landing-page-search-photo-1.jpg";

class HomeSearch extends Component {
	state = {
		searchQuery: ""
	};

	// Styles
	homeSearchStyle = {
		backgroundImage: `url("${photo}")`,
		backgroundSize: "cover",
		height: "100vh"
	};

	// Event Handlers
	handleSearchChange = e => this.setState({ searchQuery: e.target.value });

	handleSearchSubmit = e => {
		e.preventDefault();
		console.log("search query", this.state.searchQuery);
		this.setState({ searchQuery: "" });
	};

	render() {
		return (
			<div className="home-search" style={this.homeSearchStyle}>
				<div className="home-search-transparent-layer" />
				<ul className="home-search-header">
					<li>New Listings</li>
					<li>Loans</li>
					<li>Request a Viewing</li>
				</ul>
				<div className="home-search-text">
					<h1 className="home-search-title">
						Buying a home has never been so easy.
					</h1>
					<h2 className="home-search-subtitle">
						This is a subheading about buying a home and stuff.
					</h2>
				</div>
				<form
					onSubmit={this.handleSearchSubmit}
					className="home-search-input-container"
				>
					<input
						type="text"
						name="search"
						placeholder="Search listings by city, neighborhood, or zip code"
						onChange={this.handleSearchChange}
						value={this.state.searchQuery}
						className="home-search-input"
					/>
					<button type="submit" className="button">
						Find Listings
					</button>
				</form>
			</div>
		);
	}
}

export default HomeSearch;
