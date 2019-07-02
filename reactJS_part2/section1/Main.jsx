import React from 'react';
import ReactDOM from 'react-dom';
import { SubChild } from './SubChild';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName){
		this.setState({name:newName});
  }
  render() {
    return <SubChild onChange={this.changeName} name={this.state.name} />
  }
}

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);
