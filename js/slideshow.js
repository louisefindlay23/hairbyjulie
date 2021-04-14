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