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