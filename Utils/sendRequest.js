const axios = require('axios');
// function sendRequest(error, req, res, next) {

// }
const sendRequest = async (url, method, data, token) => {
    var base_uri = "https://api.sandbox.sudo.cards";
    var headers = {
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + process.env.SUDO_KEY
    }

    const request = await axios({
            method: method,
            url: base_uri + url,
            headers: headers,
            data: data
        })
        .then(response => {
            // console.log(response.data);
            return response.data;
        });
    // console.log(request);
    return request;
};

module.exports = sendRequest;