import React from "react";

export default function CartItem(props) {
	console.log(props);
	return (
		<div style={{ border: "1px solid black", margin: "10px" }}>
			<p>{props.item}</p>
			<p>{props.price}</p>
			<div>
				Quantity
				<p>{props.qty}</p>
			</div>

			<button onClick={() => props.handleAdd(props.id)}>Add Quantity</button>
			<button onClick={() => props.handleReduce(props.id)}>
				Reduce Quantity
			</button>
		</div>
	);
}
