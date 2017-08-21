console.log('Loaded!');

//move the image madi

var element = document.getElementById('image');

function moveRight()
{   marginleft = margin-left + 10;
    element.style.marginleft = marginleft + 'px';
    
}
element.onClick = function() {    
          var interval = setInterval(moveRight, 100);
      };
    
    
    
    