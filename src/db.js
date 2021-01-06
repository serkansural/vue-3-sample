const endpoint = 'https://jsonplaceholder.typicode.com/';

const cache = {};

function DBApi() {

}

DBApi.prototype.getUsers = function(callback) {
    fetch(`${endpoint}users`, {
        method: 'GET',
    }).then(response => response.json()).then(
        (data) => { callback(data); }
    );
};

DBApi.prototype.getUser = function(id, callback) {
    fetch(`${endpoint}users?id=${id}`, {
        method: 'GET',
    }).then(response => response.json()).then(
        (data) => { callback(data[0] || {}); }
    );
};

DBApi.prototype.getPosts = function(id, callback) {
    fetch(`${endpoint}posts?userId=${id}`, { method: 'GET' })
        .then((response) => { return response.json() }).then((data) => {
            callback(data);
        });
};

export { DBApi };