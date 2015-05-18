// Enhansed Prototype

var User = {

  init: function (name) {
    this.name = name
  },

  getName: function () {
    return this.name
  },

  setName: function (name) {
    this.name = name;
  }

}

// Instance
var user1 = Object.create(User);
user1.init('User Name 1');

user1.getName(); // Admin Name


// Inheritance
var Admin = Object.create(User);

// Super
Admin.getName = function () {
  var name = User.getName.call(this);

  return name.toUpperCase()
}

// Instance
admin1 = Object.create(Admin);
admin1.init('Admin Name 1')