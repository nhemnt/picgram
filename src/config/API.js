const API = {
    get(url, config) {
        return fetch(url, config).then((res) => res.json());
    }
};

export default API;
