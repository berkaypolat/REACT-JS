import axios from 'axios';

class HelloWorldService {
    executeHellowWorldService(){
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHellowWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHellowWorldPathVariableService(name){
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }
}

export default new HelloWorldService();
