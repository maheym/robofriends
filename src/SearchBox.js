import React from "react";

const SearchBox = (props) => {
	return (<div>
		 	<input className="bg-lightest-blue pa3 ba b--green" 
		 	type="search" placeholder="search robots"
		 	onChange = {props.onSearchChange}
		 	/>
		 	</div>
		)

}

export default SearchBox;
