// Loader
window.addEventListener("load", function(){
    var loader = document.getElementById("loader");
    window.setTimeout(function(){
    document.body.removeChild(loader)
    },500);
    
  });