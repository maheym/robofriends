import React from 'react';



function Card({name,username,email,id}){

return (
<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-4'>
	 <div>
		  <img src={`https://robohash.org/rob/${id}?size=250x250`} alt='No Image' />		
	 </div>
	<h2>
		  {name}
	</h2>
	<h3>
		  {username}
	</h3>
	<p>
	 	{email}
	</p>
</div>



	)
}

export default Card;