class UserBase {
  constructor(users) {
    this.users = users;
  }
  count() {
    return this.users.length;
  }

  getNames() {
    // return this.users.map((user) => user.getName());
    return this.users.map((user) => user.name);
  }

  getIntroductions() {
    // return this.users.map((user) => `Hi, my name is ${user.getName()}`);
    return this.users.map((user) => `Hi, my name is ${user.name}`);
  }
}

module.exports = UserBase;

// const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

//  const userBase = new UserBase(users);

//  userBase.count();
//  3

//  userBase.getNames();
//  [ 'Uma', 'Josh', 'Ollie' ]

//  userBase.getIntroductions();
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]
