class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;

// const user = new User("Uma");

// console.log(user.getName());

// console.log(user.getIntroduction());
