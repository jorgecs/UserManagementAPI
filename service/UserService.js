'use strict';

/**
 * Account deletion
 *
 * userId String User id to delete
 * returns APIResponse
 **/
exports.userDelete = function (userId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "message": "Account deleted successfully"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Forgot password
 *
 * username String user that forgot their password
 * returns APIResponse
 **/
exports.userForgotPassword = function (username) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "message": "Password sent to email f**d@email.com"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search user
 *
 * userId String User id to search
 * returns User
 **/
exports.userGet = function (userId) {
  return new Promise(function (resolve, reject) {
    const User = {
      userId: userId,
      username: "frederick62",
      email: "fred@email.com",
      recoveryEmail: "rick@email.com",
      password: "1234"
    }
    resolve(User)
  });
}


/**
 * User identification
 *
 * body User_login_body 
 * returns UserSession
 **/
exports.userLogin = function (body) {
  return new Promise(function (resolve, reject) {
    const UserSession = {
      userId: (Math.floor(Math.random() * 9) + 1),
      username: body.username || "frederick62",
    }
    resolve(UserSession)
  });
}


/**
 * Logout
 *
 * returns APIResponse
 **/
exports.userLogout = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "message": "You logged out from the application"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register account
 *
 * body User Create a new user
 * returns User
 **/
exports.userRegister = function (body) {
  return new Promise(function (resolve, reject) {
    const User = {
      userId: body.userId || uuidv4(),
      username: body.username || "frederick62",
      email: body.email || "fred@email.com",
      recoveryEmail: body.recoveryEmail || "rick@email.com",
      password: body.password || "1234"
    }
    resolve(User)
  });
}


/**
 * Edit user
 *
 * body User_userId_body  (optional)
 * userId String user that needs to be updated
 * returns User
 **/
exports.userUpdate = function (body, userId) {
  return new Promise(function (resolve, reject) {
    const User = {
      userId: userId,
      username: body.username || "frederick62",
      email: body.email || "fred@email.com",
      recoveryEmail: body.recoveryEmail || "rick@email.com",
      password: body.password || "1234"
    }
    resolve(User)
  });
}
