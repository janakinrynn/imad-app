console.log('Loaded!');

//move the image madi

var element = document.getElementById('image');
var marginLeft =0;
function moveRight()
{   marginLfet = margniLeft + 5;
    element.style.marginLeft = marginLeft + 'px';
    
}
element.onClick = function() {    
          var interval = setInterval(moveRight, 50);
      };
    
    
    
    