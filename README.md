# api-cacher
Most simple way to add caching in Promise based API in JavaScript

# What is this ?
We normally query server data using `XHR requests`, and we use `Promises` for making `XHR requests`!

This tiny library add caching layer for `Promises`.
 
# Example

```js
function printUsers(){
  User.findAll().then(function(data){
     console.log("Users are ", data);
  })
}
```
Above function will print users users !

But, What if your code will call this `printUsers` method again and again ?

```js
printUsers();
printUsers();
printUsers();
//3 XHR Requests !
```

Solution is apiCacher library !

```js
User.findAllCached = apiCacher({
  cache: true,
  cacheHash: function() {
    return "all";
  },
  request: function() {
    return User.findAll();
  }
});
function printUsers(){
  User.findAllCached().then(function(data){
     console.log("Users are ", data);
  })
}
printUsers();
printUsers();
printUsers();
//just 1 XHR Requests !
```
# Bonus Examples
using cacheHash you can set cache key.

```js
User.findByIdCached = apiCacher({
  cache: true,
  cacheHash: function(reqObj) {
    return reqObj.id;
  },
  request: function(reqObj) {
    return User.findById(reqObj);
  }
});
```



#License 

MIT
