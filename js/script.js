// JavaScript Document

$(document).ready(function() {

    $(".team").hide();
    
    $("#team1").show();
    
    
    // Autoplay slideshow
    
        setInterval(function(){ 
        
           $(".team").hide();
        
            $("#team2").fadeIn(1000);

            $(".dotrow i").removeClass("pink");

            $("#dot2").addClass("pink"); 
            
        }, 10000);
        
        
        setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team3").fadeIn(1000);
        
            $(".dotrow i").removeClass("pink");
        
            $("#dot3").addClass("pink"); 
            
        }, 20000);
        
        setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team1").fadeIn(1000);
        
            $(".dotrow i").removeClass("pink");
        
            $("#dot1").addClass("pink"); 
            
        }, 30000);
        
    
    // Dot click slideshow 
    
    $("#dot1").click(function(){
        
        $(".team").hide();
        
        $("#team1").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot2").click(function(){
        
        $(".team").hide();
        
        $("#team2").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot3").click(function(){
        
        $(".team").hide();
        
        $("#team3").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
 
 
});