// import $ from 'jquery';

class API {
    constructor() {
        this.URLMap = this.generateURLMap();
    }

    generateURLMap() {
        return {};
    }

    getAPIMethodURL(methodName) {
        return ``;
    }
}

export const createAPI = () => new API();