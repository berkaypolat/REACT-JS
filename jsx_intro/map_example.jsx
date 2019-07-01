import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  <li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
	<ul>{peopleLis}</ul>,document.getElementById('app')
);
