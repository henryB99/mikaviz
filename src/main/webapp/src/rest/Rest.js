const axios = require('axios');

class Rest {

    url;

    constructor(url) {
        this.url = url;
    }

    get() {
        return axios.get(this.url);
    }

    static b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
}

export default Rest;