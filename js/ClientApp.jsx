import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
	const style = { color: props.color };

	return (
		<div>
			<h1 style={style}>
				{props.title}
			</h1>
		</div>
	);
};

const MyFirstComponent = function() {
	return (
		<div>
			<MyTitle title="Game of Thrones" color="LemonChiffon" />
			<MyTitle title="Westworld" color="Crimson" />
			<MyTitle title="Silicon Valley" color="PapayaWhip" />
			<MyTitle title="Red Rising" color="BurlyWood" />
			<MyTitle title="Sabriel" color="PeachPuff" />
		</div>
	);
};

render(<MyFirstComponent />, document.getElementById('app'));
