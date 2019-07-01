import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component{
	render(){
    var stat;
    if (fiftyFifty){
			stat = "Tonight I'm going out WOOO";
    }else{
			stat = "Tonight I'm going to bed WOOO";
    }

    return <h1>{stat}</h1>;
  }
}

ReactDOM.render(<TonightsPlan />, document.getElementById('app'));
