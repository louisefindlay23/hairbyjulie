// Document ready

$(document).ready(function() {
	
	// Show initial slides

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
            
        }, 35000);
        
        
        var slideshow2 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team3").fadeIn(1000);
        
            $("#employee > i").removeClass("pink");
        
            $("#dot3").addClass("pink"); 
            
        }, 55000);
        
        var slideshow3 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team1").fadeIn(1000);
        
            $("#employee > i").removeClass("pink");
        
            $("#dot1").addClass("pink"); 
            
        }, 85000);
        
        // Autoplay client slideshow
        
        var slideshow4 = setInterval(function(){ 
        
           $(".client").hide();
        
            $("#client2").fadeIn(1000);

            $("#customer > i").removeClass("pink");

            $("#dot5").addClass("pink"); 
            
        }, 25000);
        
        
        var slideshow5 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client3").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot6").addClass("pink"); 
            
        }, 50000);
        
        var slideshow7 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client4").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot7").addClass("pink"); 
            
        }, 75000);
        
        var slideshow6 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client1").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot4").addClass("pink"); 
            
        }, 100000);
        
    
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
var pointer1 = document.getElementById('pointer1');
var modalImg1 = document.getElementById("modalimg1");
var captionText1 = document.getElementById("caption1");
	
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

pointer1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = img1.src;
  captionText1.innerHTML = img1.alt;
	this.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

var span1 = document.getElementById("close1");

span1.onclick = function() { 
  modal1.style.display = "none";
	pointer1.style.display = "block";
	pointer2.style.display = "block";
	pointer3.style.display = "block";
	pointer4.style.display = "block";
	pointer5.style.display = "block";
	pointer6.style.display = "block";
}
 
var modal2 = document.getElementById('modal2');

var img2 = document.getElementById('product2');
var pointer2 = document.getElementById('pointer2');
var modalImg2 = document.getElementById("modalimg2");
var captionText2 = document.getElementById("caption2");
	
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

pointer2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = img2.src;
  captionText2.innerHTML = img2.alt;
	this.style.display = "none";
	pointer1.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}
 
var span2 = document.getElementById("close2");

span2.onclick = function() { 
  modal2.style.display = "none";
	pointer1.style.display = "block";
	pointer2.style.display = "block";
	pointer3.style.display = "block";
	pointer4.style.display = "block";
	pointer5.style.display = "block";
	pointer6.style.display = "block";
} 

var modal3 = document.getElementById('modal3');

var img3 = document.getElementById('product3');
var pointer3 = document.getElementById('pointer3');
var modalImg3 = document.getElementById("modalimg3");
var captionText3 = document.getElementById("caption3");
	
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

pointer3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = img3.src;
  captionText3.innerHTML = img3.alt;
	this.style.display = "none";
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

var span3 = document.getElementById("close3");

span3.onclick = function() { 
	modal3.style.display = "none";
	pointer1.style.display = "block";
	pointer2.style.display = "block";
	pointer3.style.display = "block";
	pointer4.style.display = "block";
	pointer5.style.display = "block";
	pointer6.style.display = "block";
}

// Second row of modal images

var modal4 = document.getElementById('modal4');

var img4 = document.getElementById('product4');
var pointer4 = document.getElementById('pointer4');
var modalImg4 = document.getElementById("modalimg4");
var captionText4 = document.getElementById("caption4");
	
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

pointer4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = img4.src;
  captionText4.innerHTML = img4.alt;
	this.style.display = "none";
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

var span4 = document.getElementById("close4");

span4.onclick = function() { 
	modal4.style.display = "none";
	pointer1.style.display = "block";
	pointer2.style.display = "block";
	pointer3.style.display = "block";
	pointer4.style.display = "block";
	pointer5.style.display = "block";
	pointer6.style.display = "block";
}

var modal5 = document.getElementById('modal5');

var img5 = document.getElementById('product5');
var pointer5 = document.getElementById('pointer5');
var modalImg5 = document.getElementById("modalimg5");
var captionText5 = document.getElementById("caption5");
	
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

pointer5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = img5.src;
  captionText5.innerHTML = img5.alt;
	this.style.display = "none";
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer6.style.display = "none";
}

var span5 = document.getElementById("close5");

span5.onclick = function() { 
	modal5.style.display = "none";
	pointer1.style.display = "block";
	pointer2.style.display = "block";
	pointer3.style.display = "block";
	pointer4.style.display = "block";
	pointer5.style.display = "block";
	pointer6.style.display = "block";
}

var modal6 = document.getElementById('modal6');

var img6 = document.getElementById('product6');
var pointer6 = document.getElementById('pointer6');
var modalImg6 = document.getElementById("modalimg6");
var captionText6 = document.getElementById("caption6");
	
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer4.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

pointer6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = img6.src;
  captionText6.innerHTML = img6.alt;
	this.style.display = "none";
	pointer1.style.display = "none";
	pointer2.style.display = "none";
	pointer3.style.display = "none";
	pointer5.style.display = "none";
	pointer6.style.display = "none";
}

var span6 = document.getElementById("close6");

span6.onclick = function() { 
	modal6.style.display = "none";
	pointer1.style.display = "block";
	pointer2.style.display = "block";
	pointer3.style.display = "block";
	pointer4.style.display = "block";
	pointer5.style.display = "block";
	pointer6.style.display = "block";
}

// Hide non-result images
 
	$("#milk").click(function(){
		
	$("#productone, #productthree").show();
	
	$("#producttwo, #productfour, #productfive, #productsix").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#schwarz").click(function(){
		
	$("#productone, #productfour, #productfive, #productsix").show();
	
	$("#producttwo, #productthree").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
	$("#oreal").click(function(){
		
	$("#productone, #producttwo, #productsix").show();
	
	$("#productthree, #productfour, #productfive").hide();
		
	$("#dropdownmenu").hide();
		
	$(".fa-times-circle").hide();
	
	$("button").show();
		
});
	
// Show all product images
	
	$("button").click(function(){
	
	$("#productone, #producttwo, #productthree, #productfour, #productfive, #productsix").show();
		
	$("button").hide();
		
});

// Hide carousels on home mobile version

    if($("nav").is(":visible")){
 
        clearInterval(slideshow1);

        clearInterval(slideshow2);

        clearInterval(slideshow3);

        clearInterval(slideshow4);

        clearInterval(slideshow5);

        clearInterval(slideshow6);
        
        clearInterval(slideshow7);

        $(".team, .client").hide();
}

// Home icon nav

    $("#homeicon").click(function(){
    
    $(".dotrow, form, #products, #pricelist, iframe").hide();
    
    $("#banner, #history").show();
    
    $("#homeicon").addClass("pink");
    
    $("#teamicon, #productsicon, #formicon").removeClass("pink");

});

// Team icon nav

    $("#teamicon").click(function(){
    
    $("#banner, form, #products, #pricelist, iframe, #history").hide();
    
    $("#client1, .dotrow, #team1").show();
    
    $("#homeicon, #productsicon, #formicon").removeClass("pink");
    
    $("#teamicon").addClass("pink");

});

// Products icon nav

    $("#productsicon").click(function(){
    
    $("#banner, .team, .client, form, .dotrow, iframe, #history").hide();
    
    $(".team, .client").hide();
    
    $("#searchform, #products, #pricelist, .columns").show();
    
    $("#homeicon, #teamicon, #formicon").removeClass("pink");
    
    $("#productsicon").addClass("pink");

});


// Contact icon nav

    $("#formicon").click(function(){
    
    $(".dotrow, #banner, #history, #products, #pricelist").hide();
    
    $("form, iframe").show();
    
    $("#formicon").addClass("pink");
    
    $("#teamicon, #productsicon, #homeicon").removeClass("pink");

});

// Team swipe gestures

// Swipe (Left) Client 1 to 2

$("#team1").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team2").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot2").addClass("pink");
  }
});

// Swipe (Right) Client 2 to 1

$("#team2").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team1").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot1").addClass("pink");
  }
  
});

// Swipe (Left) Client 2 to Client 3

$("#team2").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team3").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot3").addClass("pink");
  }
  
});

// Swipe (Right) Client 3 to Client 2

$("#team3").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team2").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot2").addClass("pink");
  }
  
});

// Client swipe gestures

// Swipe (Left) Client 1 to Client 2

$("#client1").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client2").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot5").addClass("pink");
  }
  
});

// Swipe (Right) Client 2 to Client 1

$("#client2").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client1").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot4").addClass("pink");
  }
  
});

// Swipe (Left) Client 2 to Client 3

$("#client2").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client3").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot6").addClass("pink");
  }
  
});

// Swipe (Right) Client 3 to Client 2

$("#client3").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client2").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot5").addClass("pink");
  }
  
});
  
// Swipe (Left) Client 3 to Client 4

$("#client3").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client4").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot7").addClass("pink");
  }
  
});

// Swipe (Right) Client 4 to Client 3

$("#client4").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client3").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot6").addClass("pink");
  }
  
});


});