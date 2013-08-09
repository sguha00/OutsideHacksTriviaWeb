$(function () {

  Parse.initialize("AJMVy2PftvJBCJtfvJTernW5POWczJgj6c8ZRh2r", "vKkNhO7rEtZv8witjKjNqWvb5z2Vf5z7ElZfhS4R");
  
  var bundleId = "jlx90PqBMN";
  
  var Bundles = Parse.Object.extend("Bundles");
  
  var BundleTrivia = Parse.Object.extend("BundleTrivia");
  
  var bundleQuery = new Parse.Query("Bundles");
  var triviaQuery = new Parse.Query("BundleTrivia");
  bundleQuery.get(bundleId).then(function(bundle) {
    triviaQuery.equalTo("bundle", bundle)
    triviaQuery.find().then(function(trivia) {
      console.log(trivia);
    })
  });


});