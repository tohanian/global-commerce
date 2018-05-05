import React, { Component } from "react";

class HomeSearch extends Component {
	state = {
		searchQuery: ""
	};

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						name="search"
						placeholder="Search listings by city, neighborhood, or zip code"
						value={this.state.searchQuery}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default HomeSearch;
