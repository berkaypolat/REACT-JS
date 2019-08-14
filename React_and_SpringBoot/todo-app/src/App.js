import React, {Component} from 'react';
import AnotherComponent, {SecondComponent} from './Components/AnotherComponent';
import './App.css';
import './bootstrap.css';
import Counter from './Components/counter/Counter';
import TodoApp from './Components/todo/TodoApp';


class App extends Component{
    render() {
      return (
        <div className="App">
            <TodoApp/>
        </div>
      );
  }
}

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
