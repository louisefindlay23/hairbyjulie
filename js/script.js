// JavaScript Document

$(document).ready(function() {

    $(".team").hide();
    
    $("#team1").show();
    
    $(".client").hide();
    
    $("#client1").show();
    
    
    // Autoplay team slideshow
    
        var slideshow1 = setInterval(function(){ 
        
           $(".team").hide();
        
            $("#team2").fadeIn(1000);

            $(".dotrow i").removeClass("pink");

            $("#dot2").addClass("pink"); 
            
        }, 10000);
        
        
        var slideshow2 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team3").fadeIn(1000);
        
            $(".dotrow i").removeClass("pink");
        
            $("#dot3").addClass("pink"); 
            
        }, 20000);
        
        var slideshow3 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team1").fadeIn(1000);
        
            $(".dotrow i").removeClass("pink");
        
            $("#dot1").addClass("pink"); 
            
        }, 30000);
        
        // Autoplay client slideshow
        
        var slideshow4 = setInterval(function(){ 
        
           $(".client").hide();
        
            $("#client2").fadeIn(1000);

            $(".dotrow i").removeClass("pink");

            $("#dot5").addClass("pink"); 
            
        }, 10000);
        
        
        var slideshow5 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client3").fadeIn(1000);
        
            $(".dotrow i").removeClass("pink");
        
            $("#dot6").addClass("pink"); 
            
        }, 20000);
        
        var slideshow7 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client4").fadeIn(1000);
        
            $(".dotrow i").removeClass("pink");
        
            $("#dot7").addClass("pink"); 
            
        }, 30000);
        
        var slideshow6 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client1").fadeIn(1000);
        
            $(".dotrow i").removeClass("pink");
        
            $("#dot4").addClass("pink"); 
            
        }, 40000);
        
    
    // Dot click team slideshow 
    
    $("#dot1").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        $(".team").hide();
        
        $("#team1").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot2").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        $(".team").hide();
        
        $("#team2").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot3").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        $(".team").hide();
        
        $("#team3").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    // Dot click client slideshow 
    
    $("#dot4").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client1").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot5").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client2").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot6").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client3").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    $("#dot7").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client4").fadeIn(300);
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
 
 
});