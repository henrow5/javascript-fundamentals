const { get } = require("callback-fetch");

const fetchRepositoryInfo = (repoUrl, callback) => {
  get(`https://api.github.com/repos/${repoUrl}`, (data) => {
    const responseObject = JSON.parse(data);
    callback(responseObject);
  });
};

module.exports = fetchRepositoryInfo;

// const fetchRepositoryInfo = require("./fetchRepositoryInfo");

// fetchRepositoryInfo("sinatra/sinatra", (receivedResponse) => {
//   console.log(receivedResponse);
// });
