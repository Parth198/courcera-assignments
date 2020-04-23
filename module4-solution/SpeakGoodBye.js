
(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function(name){
    console.log(byeSpeaker + " " + name);
  }
  
  window.byeSpeaker = byeSpeaker;
})(window);
