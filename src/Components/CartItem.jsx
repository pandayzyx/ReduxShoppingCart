import React from "react";

export default function CartItem(props) {
	console.log(props);
	return (
		<div style={{ border: "1px solid black", margin: "10px" }}>
			<p>{props.item}</p>
			<p>{props.price}</p>
			<div>
				Quantity
				<p>{props.quantity}</p>
			</div>

			<button onClick={() => props.handleClick(props.id)}>Add Quantity</button>
			<button onClick={() => props.handleClick(props.id)}>
				Reduce Quantity
			</button>
		</div>
	);
}
