import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset(){
        this.setState({
            counter: 0
        });
    }
    increment(by){
        // this.setState({
        //     counter: this.state.counter + by
        // });
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by){
        // this.setState({
        //     counter: this.state.counter + by
        // });
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    render() {
      return (
        <div className="App">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButtonV2 by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className='count'>{this.state.counter}</span>
            <div>
            <button className="reset" onClick={this.reset}>Reset</button>
            </div>
        </div>
      );
  }
}

class CounterButton extends Component{
    constructor(props){
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    decrement(){
        this.props.decrementMethod(this.props.by)
    }

    increment(){
        this.props.incrementMethod(this.props.by)
    }

    render(){
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                {/*<span className='count'>{this.state.counter}</span>*/}
                <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        );
    }
}

class CounterButtonV2 extends Component{
    render(){
        return (
            <div className="counter">
                <button onClick={() => {this.props.incrementMethod(this.props.by)}}>+{this.props.by}</button>
                <button onClick={() => {this.props.decrementMethod(this.props.by)}}>-{this.props.by}</button>
            </div>
        );
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButtonV2.defaultProps = {
    by: 1
}

CounterButtonV2.propTypes = {
    by: PropTypes.number
}

export default Counter;
