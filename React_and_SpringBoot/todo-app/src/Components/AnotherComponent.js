import React, {Component} from 'react';
export default function AnotherComponent(){
    return (
        <div className="App">
          <header className="Function-component">
            I am a function component
          </header>
        </div>
    );
}

export class SecondComponent extends Component{
    render() {
      return (
        <div className="App">
          <header className="SecondComponent">
            I am a second component
          </header>
        </div>
      );
  }
}
