console.log('Loaded!');

//move the image madi

var img = document.getElementById("image");
var marginLeft = 0;
function moveRight()
    {    
     marginLeft = marginLeft + 5;
     img.style.marginLeft = marginLeft+'px';
    }
img.onclick = function() {  
         img.style.marginLeft='100px';
         //var interval = setInterval(moveRight, 50);
      };
var counter = 0;
var button = document.getElementById("counter");
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};
    
    