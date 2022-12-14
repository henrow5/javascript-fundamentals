const Github = require("./github");

describe(Github, () => {
  it("gets the repo data by the GithubClient class", () => {
    const mockedClient = {
      fetchRepositoryData: (repoUrl, callback) => {
        callback({
          name: "sinatra/sinatra",
          description: "fake description",
        });
      },
    };

    const github = new Github(mockedClient);
    github.fetch("sinatra/sinatra");

    expect(github.getRepoData()).toEqual({
      name: "sinatra/sinatra",
      description: "fake description",
    });
  });
});
