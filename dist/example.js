(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["example"] = factory();
	else
		root["example"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ])
});
;