const { get } = require("callback-fetch");

class GithubClient {
  fetchRepositoryData(repoUrl, callback) {
    get(`https://api.github.com/repos/${repoUrl}`, (data) => {
      const responseObject = JSON.parse(data);
      callback(responseObject);
    });
  }
}

module.exports = GithubClient;

// const GithubClient = require("./githubClient");

// const client = new GithubClient();

// client.fetchRepositoryData("sinatra/sinatra", (repositoryData) => {
//   console.log(repositoryData);
// });
