/**
 * Created by narendrasisodiya on 09/06/16.
 */

console.clear();
//===============Server Side Code=============
var API = {
  USER: {
    find: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("API Responsce Given");
          var Users = ["sam", "mark"];
          return resolve(Users);
        }, 3000);
      });
    }
  }
};
//===========Util Code============

API.USER.findCached = apiCacher({
  cache: true,
  cacheHash: function() {
    return "topLevel";
  },
  request: function() {
    console.log("API Request Initiated");
    return API.USER.find().then(function(data) {
      console.log("Data Transform");
      return {
        users: data
      }
    });
  }
});

API.USER.findCached().then(function(data) {
  //Wrong Code -
  data.users.push("first");
  console.log("async data, firtTime", data.users);
});
API.USER.findCached().then(function(data) {
  data.users.push("immediate");
  console.log("async data, immediate", data.users);
});
API.USER.findCached().then(function(data) {
  data.users.push("immediate1");
  console.log("async data, immediate1", data.users);
});

setTimeout(function() {
  API.USER.findCached().then(function(data) {
    data.users.push("5");
    console.log("async data, 5 sec", data.users);
  });
}, 5000);

setTimeout(function() {
  API.USER.findCached().then(function(data) {
    data.users.push("7");
    console.log("async data, 7 sec", data.users);
  });
}, 7000);
