/*
if ('serviceWorker' in navigator) {

  window.addEventListener('load', function() {

    navigator.serviceWorker.register('/scripts/sw.js').then(function(registration) {

      // Registration was successful
      console.log('Service Worker Registered Successfully with scope : ', registration.scope);

    }, function(err) {

      // registration failed :(
      console.log('Service Worker Registration Failed with error : ', err);
      
    });

  });

}
*/

"serviceWorker" in navigator && (console.log("Will service worker register?"), navigator.serviceWorker.register("scripts/sw.js").then(function(e) {
  console.log('Service Worker Registered Successfully with scope : ', registration.scope)
}).catch(function(e) {
  console.log('Service Worker Registration Failed with error : ', e)
}));