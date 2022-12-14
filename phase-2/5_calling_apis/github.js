class Github {
  constructor(client) {
    this.client = client;
    this.data;
  }

  fetch(repo) {
    this.client.fetchRepositoryData(repo, (repoData) => {
      this.data = repoData;
    });
  }

  getRepoData() {
    return this.data;
  }
}

module.exports = Github;
