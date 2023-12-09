'use strict';

var utils = require('../utils/writer.js');
var Subscription = require('../service/SubscriptionService');

module.exports.userEditSubscription = function userEditSubscription (req, res, next, userId, subscription) {
  Subscription.userEditSubscription(userId, subscription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGetSubscription = function userGetSubscription (req, res, next, userId) {
  Subscription.userGetSubscription(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
