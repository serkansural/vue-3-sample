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

export { DBApi };