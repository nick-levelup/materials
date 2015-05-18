// Classic

var User = function (name) {

  this.name = name;

}

User.prototype.getName = function() {
  return this.name;
};

User.prototype.setName = function(newName) {
  this.name = newName;
};

// instance
var user1 = new User('User1')


// Inheritance
var Admin = function (name) {
  User.call(this, name);
}

Admin.prototype = Object.create(User.prototype);
Admin.constructor = User;

// instance
var admin1 = new Admin('Admin1')


// super
Admin.prototype.getName = function () {
  return "_" + User.prototype.getName.call(this) + '_';
}