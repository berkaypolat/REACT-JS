import React, {Component} from 'react';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class HeaderComponent extends Component{
    render(){
        const LoggedIn = AuthenticationService.isLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                    {/*Brand and toggle get grouped for better mobile display*/}
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a href="https://github.com/berkaypolat" className="navbar-brand">My GITHUB</a>
                    </div>

                    {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        {LoggedIn && <li><Link to="/welcome/berkayp" className="nav-link">Home<span className="sr-only">(current)</span></Link></li>}
                        {LoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                        {!LoggedIn && <li className="nav-link"><Link to="/login" className="nav-link">Login</Link></li>}
                        {LoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li>}
                      </ul>
                    </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
