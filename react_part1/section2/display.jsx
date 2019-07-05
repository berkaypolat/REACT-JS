import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './greeting';

class Display extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name='Berkay' />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <Display />,
  document.getElementById('app')
);
