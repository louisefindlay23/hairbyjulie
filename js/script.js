document.addEventListener('DOMContentLoaded', (event) => {
  // Show initial slides
  document.querySelectorAll(".team, .client").forEach((e) => {
    e.style.display = "none";
  });
  document.getElementById("team1").style.display = "block";
  document.getElementById("client1").style.display = "block";

  // Fade In function
  function fadeIn(el) {
    el.style.opacity = 0;
    el.style.display = "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
    
  // Autoplay team slideshow
  const slideshow1 = setInterval(function(){ 
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team2"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot2").classList.add("pink");
  }, 35000);
  
  const slideshow2 = setInterval(function(){ 
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team3"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot3").classList.add("pink");
  }, 55000);
        
  const slideshow3 = setInterval(function(){ 
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team1"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot1").classList.add("pink");
  }, 85000);
        
  const slideshow8 = setInterval(function(){ 
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team4"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot8").classList.add("pink");
  }, 115000);
        
  const slideshow9 = setInterval(function(){ 
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team5"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot9").classList.add("pink");
  }, 145000);
        
  // Autoplay client slideshow
  const slideshow4 = setInterval(function(){ 
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client2"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot5").classList.add("pink");
  }, 25000);

  const slideshow5 = setInterval(function(){ 
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client3"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot6").classList.add("pink");
  }, 50000);

  const slideshow6 = setInterval(function(){ 
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client1"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot4").classList.add("pink");
  }, 100000);

  const slideshow7 = setInterval(function(){ 
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client4"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot7").classList.add("pink");
  }, 75000);

    // Dot click team slideshow 
    document.getElementById("dot1").addEventListener("click", (e) => { 
      clearInterval(slideshow1);
      clearInterval(slideshow2);
      clearInterval(slideshow3);
      clearInterval(slideshow8);
      clearInterval(slideshow9);
      document.querySelectorAll(".team").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("team1"));
      document.querySelectorAll("#employee > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });
    
    document.getElementById("dot2").addEventListener("click", (e) => { 
      clearInterval(slideshow1);
      clearInterval(slideshow2);
      clearInterval(slideshow3);
      clearInterval(slideshow8);
      clearInterval(slideshow9);
      document.querySelectorAll(".team").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("team2"));
      document.querySelectorAll("#employee > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });

    document.getElementById("dot3").addEventListener("click", (e) => { 
      clearInterval(slideshow1);
      clearInterval(slideshow2);
      clearInterval(slideshow3);
      clearInterval(slideshow8);
      clearInterval(slideshow9);
      document.querySelectorAll(".team").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("team3"));
      document.querySelectorAll("#employee > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });

    document.getElementById("dot8").addEventListener("click", (e) => { 
      clearInterval(slideshow1);
      clearInterval(slideshow2);
      clearInterval(slideshow3);
      clearInterval(slideshow8);
      clearInterval(slideshow9);
      document.querySelectorAll(".team").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("team4"));
      document.querySelectorAll("#employee > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });

    document.getElementById("dot9").addEventListener("click", (e) => { 
      clearInterval(slideshow1);
      clearInterval(slideshow2);
      clearInterval(slideshow3);
      clearInterval(slideshow8);
      clearInterval(slideshow9);
      document.querySelectorAll(".team").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("team5"));
      document.querySelectorAll("#employee > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });
    
    // Dot click client slideshow 
    document.getElementById("dot4").addEventListener("click", (e) => { 
      clearInterval(slideshow4);
      clearInterval(slideshow5);
      clearInterval(slideshow6);
      clearInterval(slideshow7);
      document.querySelectorAll(".client").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("client1"));
      document.querySelectorAll("#customer > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });
    
    document.getElementById("dot5").addEventListener("click", (e) => { 
      clearInterval(slideshow4);
      clearInterval(slideshow5);
      clearInterval(slideshow6);
      clearInterval(slideshow7);
      document.querySelectorAll(".client").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("client2"));
      document.querySelectorAll("#customer > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });
    
    document.getElementById("dot6").addEventListener("click", (e) => { 
      clearInterval(slideshow4);
      clearInterval(slideshow5);
      clearInterval(slideshow6);
      clearInterval(slideshow7);
      document.querySelectorAll(".client").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("client3"));
      document.querySelectorAll("#customer > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });

    document.getElementById("dot7").addEventListener("click", (e) => { 
      clearInterval(slideshow4);
      clearInterval(slideshow5);
      clearInterval(slideshow6);
      clearInterval(slideshow7);
      document.querySelectorAll(".client").forEach((e) => {
        e.style.display = "none";
      });
      fadeIn(document.getElementById("client4"));
      document.querySelectorAll("#customer > i").forEach((e) => {
        e.classList.remove("pink");
      });
      e.target.classList.add("pink");    
    });
	
	// Modal images
  const modal1 = document.getElementById('modal1');
  document.getElementById('product1').addEventListener("click", (e) => { 
    modal1.style.display = "block";
    document.getElementById("modalimg1").src = e.target.src;
    document.getElementById("caption1").innerHTML = e.target.alt;
    document.querySelector("body").classList.add("modal-open");
  });
  document.getElementById("close1").addEventListener("click", (e) => { 
    modal1.style.display = "none";
    document.querySelector("body").classList.remove("modal-open");
  });

  const modal2 = document.getElementById('modal2');
  document.getElementById('product2').addEventListener("click", (e) => { 
    modal2.style.display = "block";
    document.getElementById("modalimg2").src = e.target.src;
    document.getElementById("caption2").innerHTML = e.target.alt;
    document.querySelector("body").classList.add("modal-open");
  });
  document.getElementById("close2").addEventListener("click", (e) => { 
    modal1.style.display = "none";
    document.querySelector("body").classList.remove("modal-open");
  });

  const modal3 = document.getElementById('modal3');
  document.getElementById('product3').addEventListener("click", (e) => { 
    modal1.style.display = "block";
    document.getElementById("modalimg3").src = e.target.src;
    document.getElementById("caption3").innerHTML = e.target.alt;
    document.querySelector("body").classList.add("modal-open");
  });
  document.getElementById("close3").addEventListener("click", (e) => { 
    modal1.style.display = "none";
    document.querySelector("body").classList.remove("modal-open");
  });

  const modal4 = document.getElementById('modal4');
  document.getElementById('product4').addEventListener("click", (e) => { 
    modal1.style.display = "block";
    document.getElementById("modalimg4").src = e.target.src;
    document.getElementById("caption4").innerHTML = e.target.alt;
    document.querySelector("body").classList.add("modal-open");
  });
  document.getElementById("close4").addEventListener("click", (e) => { 
    modal1.style.display = "none";
    document.querySelector("body").classList.remove("modal-open");
  });

  const modal5 = document.getElementById('modal5');
  document.getElementById('product5').addEventListener("click", (e) => { 
    modal5.style.display = "block";
    document.getElementById("modalimg5").src = e.target.src;
    document.getElementById("caption5").innerHTML = e.target.alt;
    document.querySelector("body").classList.add("modal-open");
  });
  document.getElementById("close5").addEventListener("click", (e) => { 
    modal1.style.display = "none";
    document.querySelector("body").classList.remove("modal-open");
  });

  const modal6 = document.getElementById('modal6');
  document.getElementById('product6').addEventListener("click", (e) => { 
    modal1.style.display = "block";
    document.getElementById("modalimg6").src = e.target.src;
    document.getElementById("caption6").innerHTML = e.target.alt;
    document.querySelector("body").classList.add("modal-open");
  });
  document.getElementById("close6").addEventListener("click", (e) => { 
    modal1.style.display = "none";
    document.querySelector("body").classList.remove("modal-open");
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
        
        clearInterval(slideshow8);
        
        clearInterval(slideshow9);

        $(".team, .dotrow, .client, #products, #pricelist").hide();
}

// Home icon nav

    $("#homeicon").click(function(){
    
    $(".team, .dotrow, form, #products, #pricelist, .client, iframe").hide();
    
    $("#banner, #history").show();
    
    $("#homeicon").addClass("pink");
    
    $("#teamicon, #productsicon").removeClass("pink");

});

// Team icon nav

    $("#teamicon").click(function(){
    
    $("#banner, form, #products, #pricelist, iframe, #history").hide();
    
    $("#client1, .dotrow, #team1").show();
    
    $("#homeicon, #productsicon").removeClass("pink");
    
    $("#teamicon").addClass("pink");

});

// Products icon nav

    $("#productsicon").click(function(){
    
    $("#banner, .team, .client, form, .dotrow, iframe, #history, #productfour, #productfive, #productsix").hide();
    
    $("#searchform, #products, #pricelist, .columns, button").show();
    
    $("#homeicon, #teamicon").removeClass("pink");
    
    $("#productsicon").addClass("pink");

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

// Swipe (Left) Client 3 to Client 4 (8)

$("#team3").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team4").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot8").addClass("pink");
  }
  
});

// Swipe (Right) Client 4 (8) to Client 3

$("#team4").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team3").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot3").addClass("pink");
  }
  
});

// Swipe (Left) Client 4 (8) to Client 5 (9)

$("#team4").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team5").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot9").addClass("pink");
  }
  
});

// Swipe (Right) Client 5 (9) to Client 4 (8)

$("#team5").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team4").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot8").addClass("pink");
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