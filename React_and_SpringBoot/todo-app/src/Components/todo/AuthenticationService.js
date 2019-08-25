import axios from 'axios';
import { S_KEY, API_URL} from '../../constants';

class AuthenticationService{

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ':' + password);
    }

    createJWTAuthToken(token){
        return 'Bearer ' + token;
    }

    executeBasicAuthService(username,password){
        return axios.get(`${API_URL}/basicauth`,
                {headers: {authorization: this.createBasicAuthToken(username,password)}});
    }

    executeJWTAuthService(username,password){
        return axios.post(`${API_URL}/authenticate`,
                {
                    username,
                    password
                });
    }

    registerSuccessfulLogin(username, password){
        sessionStorage.setItem(S_KEY, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password));
    }

    registerSuccessfulLoginJWT(username, token){
        sessionStorage.setItem(S_KEY, username);
        this.setupAxiosInterceptors(this.createJWTAuthToken(token));
    }

    registerSuccessfulLogout(){
        sessionStorage.removeItem(S_KEY);
    }

    isLoggedIn(){
        return sessionStorage.getItem(S_KEY) !== null;
    }

    getLoggedinUsername(){
        let username = sessionStorage.getItem(S_KEY);
        if (username === null) return '';
        return username;
    }

    setupAxiosInterceptors(basicAuthHeader){
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn()){
                    config.headers.authorization = basicAuthHeader;
                }
                return config;
            }
        )
    }

}

export default new AuthenticationService();
