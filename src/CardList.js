import React from "react";
import Card from "./Card";
// import {robots} from "./robots";

function CardList(props){

return (	
	<div>
		{props.robots.map((item) =>{
 	 		return (
 	 		<Card
  			 key={item.id}
   			 id={item.id}
   			 name={item.name}
   			 username={item.username}
   			 email={item.email}/>
   			 )
		})}
	</div>
	)
}


	export default CardList;