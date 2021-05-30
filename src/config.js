import pkg from '../package.json';


export default {
    development:{
        endpoint:pkg.proxy,
        api_key:pkg.api_key
    },
    production: {
        endpoint:window.location.hostname,
        api_key:pkg.api_key
    }
}