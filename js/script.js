// JavaScript Document

$( document ).ready(function() {

    $("#team2").hide();
    
    $("#dot1").click(function(){
        
        $(".team").hide();
        
        $("#team1").show();
        
        $(this).addClass("pink");
        
    });
    
    $("#dot2").click(function(){
        
        $(".team").hide();
        
        $("#team2").show();
        
    });
 
});