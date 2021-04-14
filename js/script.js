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
  document.getElementById("product6").addEventListener("click", (e) => { 
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
  document.querySelector("button").addEventListener("click", (e) => {
    document.querySelectorAll("#productone, #producttwo, #productthree, #productfour, #productfive, #productsix").forEach((e) => {
      e.style.display = "block";
    });
    this.hide();
  });

  // Hide carousels on home mobile version
  if (window.getComputedStyle(document.querySelector("nav")).display !== "none") {
    clearInterval(slideshow1);
    clearInterval(slideshow2);
    clearInterval(slideshow3);
    clearInterval(slideshow4);
    clearInterval(slideshow5);
    clearInterval(slideshow6);
    clearInterval(slideshow7);
    clearInterval(slideshow8);
    clearInterval(slideshow9);
    document.querySelectorAll(".team, .dotrow, .client, #products, #pricelist").forEach((e) => {
      e.style.display = "none";
    });
  }

  // Home icon nav
  document.getElementById("homeicon").addEventListener("click", (e) => {
    document.querySelectorAll(".team, .dotrow, form, #products, #pricelist, .client, iframe").forEach((e) => {
      e.style.display = "none";
    });
    document.querySelectorAll("#banner, #history").forEach((e) => {
      e.style.display = "block";
    });
    document.getElementById("homeicon").classList.add("pink");
    document.querySelectorAll("#teamicon, #productsicon").forEach((e) => {
      e.classList.remove("pink");
    });
  });

  // Team icon nav
  document.getElementById("teamicon").addEventListener("click", (e) => {
    document.querySelectorAll("#banner, form, #products, #pricelist, iframe, #history").forEach((e) => {
      e.style.display = "none";
    });
    document.querySelectorAll("#client1, .dotrow, #team1").forEach((e) => {
      e.style.display = "block";
    });
    document.getElementById("teamicon").classList.add("pink");
    document.querySelectorAll("#homeicon, #productsicon").forEach((e) => {
      e.classList.remove("pink");
    });
  });

  // Products icon nav
  document.getElementById("teamicon").addEventListener("click", (e) => {
    document.querySelectorAll("#banner, .team, .client, form, .dotrow, iframe, #history, #productfour, #productfive, #productsix").forEach((e) => {
      e.style.display = "none";
    });
    document.querySelectorAll("#searchform, #products, #pricelist, .columns, button").forEach((e) => {
      e.style.display = "block";
    });
    document.getElementById("productsicon").classList.add("pink");
    document.querySelectorAll("#homeicon, #teamicon").forEach((e) => {
      e.classList.remove("pink");
    });
  });

  // Team swipe gestures
  document.getElementById("team1").addEventListener("swiped-left", (e) => {
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team2"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot2").addClass("pink");
  });

  document.getElementById("team2").addEventListener("swiped-right", (e) => {
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team1"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot1").addClass("pink");
  });

  document.getElementById("team2").addEventListener("swiped-left", (e) => {
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team3"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot3").addClass("pink");
  });

  document.getElementById("team3").addEventListener("swiped-right", (e) => {
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team2"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot2").addClass("pink");
  });

  document.getElementById("team3").addEventListener("swiped-left", (e) => {
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team4"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot8").addClass("pink");
  });

  document.getElementById("team4").addEventListener("swiped-right", (e) => {
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team3"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot3").addClass("pink");
  });

  document.getElementById("team4").addEventListener("swiped-left", (e) => {
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team5"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot9").addClass("pink");
  });

  document.getElementById("team5").addEventListener("swiped-left", (e) => {
    document.querySelectorAll(".team").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("team4"));
    document.querySelectorAll("#employee > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot8").addClass("pink");
  });

  // Client swipe gestures
  document.getElementById("client1").addEventListener("swiped-left", (e) => {
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client2"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot5").addClass("pink");
  });

  document.getElementById("client2").addEventListener("swiped-right", (e) => {
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client1"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot4").addClass("pink");
  });

  document.getElementById("client2").addEventListener("swiped-left", (e) => {
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client3"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot6").addClass("pink");
  });

  document.getElementById("client3").addEventListener("swiped-right", (e) => {
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client2"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot5").addClass("pink");
  });

  document.getElementById("client3").addEventListener("swiped-left", (e) => {
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client4"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot7").addClass("pink");
  });

  document.getElementById("client4").addEventListener("swiped-right", (e) => {
    document.querySelectorAll(".client").forEach((e) => {
      e.style.display = "none";
    });
    fadeIn(document.getElementById("client3"));
    document.querySelectorAll("#customer > i").forEach((e) => {
      e.classList.remove("pink");
    });
    document.getElementById("dot6").addClass("pink");
  });

});