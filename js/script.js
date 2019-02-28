// Document ready

$(document).ready(function() {
	
	// Show inital slides

    $(".team").hide();
    
    $("#team1").show();
    
    $(".client").hide();
    
    $("#client1").show();
    
    
    // Autoplay team slideshow
    
        var slideshow1 = setInterval(function(){ 
        
           $(".team").hide();
        
            $("#team2").fadeIn(1000);

            $("#employee > i").removeClass("pink");

            $("#dot2").addClass("pink"); 
            
        }, 10000);
        
        
        var slideshow2 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team3").fadeIn(1000);
        
            $("#employee > i").removeClass("pink");
        
            $("#dot3").addClass("pink"); 
            
        }, 20000);
        
        var slideshow3 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team1").fadeIn(1000);
        
            $("#employee > i").removeClass("pink");
        
            $("#dot1").addClass("pink"); 
            
        }, 30000);
        
        // Autoplay client slideshow
        
        var slideshow4 = setInterval(function(){ 
        
           $(".client").hide();
        
            $("#client2").fadeIn(1000);

            $("#customer > i").removeClass("pink");

            $("#dot5").addClass("pink"); 
            
        }, 10000);
        
        
        var slideshow5 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client3").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot6").addClass("pink"); 
            
        }, 20000);
        
        var slideshow7 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client4").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot7").addClass("pink"); 
            
        }, 30000);
        
        var slideshow6 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client1").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot4").addClass("pink"); 
            
        }, 40000);
        
    
    // Dot click team slideshow 
    
    $("#dot1").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        $(".team").hide();
        
        $("#team1").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot2").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        $(".team").hide();
        
        $("#team2").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot3").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        $(".team").hide();
        
        $("#team3").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
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
        
        $("#customer > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot5").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client2").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot6").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client3").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    $("#dot7").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client4").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
	
	// Dropdown menu
	
$("#searchform input").click(function(){
	
	$(".fa-times-circle").show();
	
	$("#dropdownmenu").show();
});
	
    
$(".fa-times-circle").click(function(){
	
	$(".fa-times-circle").hide();
	
	$("#dropdownmenu").hide();
});
	
	// Modal images

var modal1 = document.getElementById('modal1');

var img1 = document.getElementById('product1');
var modalImg1 = document.getElementById("modalimg1");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}

var span1 = document.getElementById("close1");

span1.onclick = function() { 
  modal1.style.display = "none";
}
 
var modal2 = document.getElementById('modal2');

var img2 = document.getElementById('product2');
var modalImg2 = document.getElementById("modalimg2");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
 
var span2 = document.getElementById("close2");

span2.onclick = function() { 
  modal2.style.display = "none";
} 

var modal3 = document.getElementById('modal3');

var img3 = document.getElementById('product3');
var modalImg3 = document.getElementById("modalimg3");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

var span3 = document.getElementById("close3");

span3.onclick = function() { 
  modal3.style.display = "none";
}

// Hide non-result images
 
	$("#milk").click(function(){
		
	$("#productone, #productthree").show();
	
	$("#producttwo").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#schwarz").click(function(){
		
	$("#productone").show();
	
	$("#producttwo, #productthree").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#serie").click(function(){
		
	$("#productone").show();
	
	$("#producttwo, #productthree").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#veloce").click(function(){
		
	$("#productone").show();
	
	$("#producttwo, #productthree").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#gold").click(function(){
		
	$("#productone").show();
	
	$("#producttwo, #productthree").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#oreal").click(function(){
		
	$("#producttwo").show();
	
	$("#productone, #productthree").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#color").click(function(){
		
	$("#productthree").show();
	
	$("#productone, #producttwo").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#den").click(function(){
		
	$("#productthree").show();
	
	$("#productone, #producttwo").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
// Show all product images
	
	$("button").click(function(){
	
	$("#productone, #producttwo, #productthree").show();
		
	$("button").hide();
		
});

// Home icon nav

    $("#homeicon").click(function(){
    
    $(".dotrow, form, #products, #pricelist, iframe").hide();
    
    $("#history").show();
    
    clearInterval(slideshow1);
        
    clearInterval(slideshow2);
        
    clearInterval(slideshow3);
    
    clearInterval(slideshow4);
        
    clearInterval(slideshow5);
        
    clearInterval(slideshow6);
    
    $(".team, .client").hide();

});

// Team icon nav

    $("#teamicon").click(function(){
    
    $("form, #products, #pricelist, iframe, #history").hide();
    
    $("#client1, .dotrow, #team1").show();

});


});