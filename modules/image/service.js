const axios = require('axios');
require('dotenv').config()

let service = {
  create: (payload, callback) => {
    let data = JSON.stringify({
      "prompt": payload.prompt,
      "n": payload.number,
      "size": "1024x1024"
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.openai.com/v1/images/generations',
      headers: { 
        'Authorization': 'Bearer ' + process.env.API_KEY, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });

  }
}

module.exports = service;