// Prototype

var admin = {

  name: 'Admin Name',

  getName: function () {
    return this.name
  },

  setName: function (name) {
    this.name = name;
  }

}


// Inheritance
user = Object.create(admin);

user.setName('User Name');

user.getName(); // User Name


// Super
user.getQutedName = function () {
  return "'" + admin.getName() + "'";
}

user.getQutedName(); // 'Admin Name'

user.getQutedName = function () {
  return "'" + admin.getName.call(this) + "'";
}

user.getQutedName(); // 'User Name'