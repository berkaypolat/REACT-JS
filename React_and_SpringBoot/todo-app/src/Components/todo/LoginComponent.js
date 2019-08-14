import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'berkayp',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //refactored in handleChange
    handleUserNameChange(event){
        this.setState({
            username: event.target.value
        });
    }

    //refactored in handleChange
    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        });
    }

    loginClicked(){
        if(this.state.username === 'berkayp' && this.state.password === '123'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            //this.setState({showSuccessMessage: true});
            //this.setState({hasLoginFailed: false});
        }else{
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
        }
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {this.state.showSuccessMessage && <div>Login Successful!</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type='password' name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success"onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

//simplied with inline logic jsx expression
function ShowInvalidCredentials(props){
    if (props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null;
}

//simplied with inline logic jsx expression
function ShowLoginSuccessMessage(props){
    if (props.showSuccessMessage){
        return <div>Login Successful!</div>
    }
    return null;
}

export default LoginComponent;
