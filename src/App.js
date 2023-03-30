import React from "react";
import CardList from "./CardList"
import SearchBox from "./SearchBox"
import {robots} from "./robots";

class App extends React.Component {

constructor (){
super();
this.state = {
	robots : robots,
	search : '',
}
}

onSearchChange = (event) => {
	this.setState({search : event.target.value});
}

render (){
	const filteredRobots = this.state.robots.filter(item =>{
	return item.name.toUpperCase().includes(this.state.search.toUpperCase())})

 return (
 	<dev className="tc">
 		<h1>RoboFriends1</h1>
 		<SearchBox  onSearchChange={this.onSearchChange}/>
 		<CardList robots={filteredRobots}/>
 	</dev>)
}
}

export default App;