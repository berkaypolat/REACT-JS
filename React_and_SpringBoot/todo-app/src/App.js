import React, {Component} from 'react';
import AnotherComponent, {SecondComponent} from './Components/AnotherComponent';
import './App.css';
import './bootstrap.css';
import TodoApp from './Components/todo/TodoApp';

// eslint-disable-next-line
import Counter from './Components/counter/Counter';


class App extends Component{
    render() {
      return (
        <div className="App">
            <TodoApp/>
        </div>
      );
  }
}

// eslint-disable-next-line
class LearningComponents extends Component{
    render() {
      return (
        <div className="LearningComponents">
            Hello World!
            <AnotherComponent/>
            <SecondComponent/>
        </div>
      );
  }
}

export default App;
