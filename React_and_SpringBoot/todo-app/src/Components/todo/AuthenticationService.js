class AuthenticationService{
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser', username);
    }

    registerSuccessfulLogout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isLoggedIn(){
        return sessionStorage.getItem('authenticatedUser') !== null; 
    }
}

export default new AuthenticationService();
