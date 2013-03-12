jQuery.noConflict();
    jQuery(document).ready(function($){
       // You can use the locally-scoped $ in here as an alias to jQuery
       $("div#help").hide();
       
       var campfire = new buzz.sound("/relax/snd/campfire", {
	   formats: [ "ogg", "mp3", "aac", "wav" ],
	   preload: true,
	   loop: true
       });

       campfire.loop().play().fadeIn();
       
       $("body").click(function(event){
         $("div#help").fadeToggle("slow", "linear");
       });
       
       $("#snd_toggle").click(function(event){
         campfire.togglePlay()
	 return false;
       });

     });


