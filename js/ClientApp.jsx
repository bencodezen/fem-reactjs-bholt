const ce = React.createElement

const myTitle = function(props) {
	return (
		ce('div', null,
			ce('h1', { style: { color: props.color } }, props.title)
		)
	)
}

const myFirstComponent = function() {
	return ce('div', null,
		ce(myTitle, { title: 'Game of Thrones', color: 'LemonChiffon' }),
		ce(myTitle, { title: 'Westworld', color: 'Crimson' }),
		ce(myTitle, { title: 'Silicon Valley', color: 'PapayaWhip' }),
		ce(myTitle, { title: 'Red Rising', color: 'BurlyWood' }),
		ce(myTitle, { title: 'Sabriel', color: 'PeachPuff' })
	)
}

ReactDOM.render(
	ce(myFirstComponent),
	document.getElementById('app')
)
