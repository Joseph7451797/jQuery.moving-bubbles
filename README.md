# jQuery Moving Bubble
By Stephan van Rooij  
Let certain elements move across your browser screen.  
* * *
## Usage
1. Include jQuery (tested with v1.7.2) on you page
2. Include the jQuery.moving-bubble.js on your page
3. Move all elements with class fish: $(document).ready(function() {  $('.fish').movingBubble();  });  
  
* * *
## Functions  
  
Default usage:  
$('#something').movingBubble();  
  
Toggle moving onClick:  
$('#something').movingBubble().click(function(){  $(this).movingBubble('toggle');  });  
  
Stop moving:  
$('#something').movingBubble('stop'); or $('#something').stop();  
  
* * *
If you don't like this plugin, you can always not use it. Or fork it and create a better version :D  
This plugin is build because I can!