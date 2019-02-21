// JavaScript Document

$(document).ready(function() {


    $(".team").hide();
    
    $("#team1").show();
     
    
    $("#dot1").click(function(){
        
        $(".team").hide();
        
        $("#team1").show();
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot2").click(function(){
        
        $(".team").hide();
        
        $("#team2").show();
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot3").click(function(){
        
        $(".team").hide();
        
        $("#team3").show();
        
        $(".dotrow i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
 
 
});