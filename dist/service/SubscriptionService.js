'use strict';


/**
 * Choose subscription
 *
 * userId String user that needs to update their subsciption
 * subscription Integer type of subscription that is going to be selected
 * returns Subscription
 **/
exports.userEditSubscription = function (userId, subscription) {
  return new Promise(function (resolve, reject) {
    const Subscription = {
      subscriptionType: subscription,
      subscriptionId: (Math.floor(Math.random() * 9) + 1)
    }
    resolve(Subscription)
  });
}


/**
 * Get subscription of user
 *
 * userId String user that needs to update their subsciption
 * returns Subscription
 **/
exports.userGetSubscription = function (userId) {
  return new Promise(function (resolve, reject) {
    const Subscription = {
      subscriptionType: (Math.floor(Math.random() * 2) + 1),
      subscriptionId: (Math.floor(Math.random() * 9) + 1)
    }
    resolve(Subscription)
  });
}

