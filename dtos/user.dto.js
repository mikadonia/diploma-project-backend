module.exports = class UserDto {
  email;
  role;
  id;
  balance;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
  }
};
