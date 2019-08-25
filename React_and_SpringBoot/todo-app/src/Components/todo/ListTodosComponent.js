import React, {Component} from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: null,
            todos: [
                // {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                // {id: 2, description: 'Become an expert at React', done: false, targetDate: new Date()},
                // {id: 3, description: 'Call Asurion', done: false, targetDate: new Date()}
            ]
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }

    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedinUsername();
        TodoDataService.retrieveAllTodos(username)
        .then(response => this.setState({ todos: response.data }));
    }

    addTodoClicked(){
        this.props.history.push(`/todos/-1`);
    }

    updateTodoClicked(id){
        this.props.history.push(`/todos/${id}`);
        // let username = AuthenticationService.getLoggedinUsername;
        // TodoDataService.deleteTodo(username,id)
        // .then(response => {
        //     this.setState({message: `Delete of todo ${id} is successfull.`});
        //     this.refreshTodos();
        // });
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedinUsername();
        TodoDataService.deleteTodo(username,id)
        .then(response => {
            this.setState({message: `Delete of todo ${id} is successfull.`});
            this.refreshTodos();
        });
    }

    render(){
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Target Date</th>
                                <th scope="col">Is Completed?</th>
                                <th scope="col">Update</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button onClick={() => this.updateTodoClicked(todo.id)} className="btn btn-success">Update</button></td>
                                        <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Remove</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add New Todo</button>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;
