import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
// Here we emphasize the && operator
const judgmental = Math.random() < 0.5;
const age = 15;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>{ age > 14 && Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods,
	document.getElementById('app')
);
