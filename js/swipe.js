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

// Team swipe gestures
document.getElementById("team1").addEventListener("swiped-left", (e) => {
document.querySelectorAll(".team").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("team2"));
document.querySelectorAll("#employee > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot2").classList.add("pink");
});

document.getElementById("team2").addEventListener("swiped-right", (e) => {
document.querySelectorAll(".team").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("team1"));
document.querySelectorAll("#employee > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot1").classList.add("pink");
});

document.getElementById("team2").addEventListener("swiped-left", (e) => {
document.querySelectorAll(".team").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("team3"));
document.querySelectorAll("#employee > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot3").classList.add("pink");
});

document.getElementById("team3").addEventListener("swiped-right", (e) => {
document.querySelectorAll(".team").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("team2"));
document.querySelectorAll("#employee > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot2").classList.add("pink");
});

document.getElementById("team3").addEventListener("swiped-left", (e) => {
document.querySelectorAll(".team").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("team4"));
document.querySelectorAll("#employee > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot8").classList.add("pink");
});

document.getElementById("team4").addEventListener("swiped-right", (e) => {
document.querySelectorAll(".team").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("team3"));
document.querySelectorAll("#employee > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot3").classList.add("pink");
});

document.getElementById("team4").addEventListener("swiped-left", (e) => {
document.querySelectorAll(".team").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("team5"));
document.querySelectorAll("#employee > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot9").classList.add("pink");
});

document.getElementById("team5").addEventListener("swiped-left", (e) => {
document.querySelectorAll(".team").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("team4"));
document.querySelectorAll("#employee > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot8").classList.add("pink");
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
document.getElementById("dot5").classList.add("pink");
});

document.getElementById("client2").addEventListener("swiped-right", (e) => {
document.querySelectorAll(".client").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("client1"));
document.querySelectorAll("#customer > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot4").classList.add("pink");
});

document.getElementById("client2").addEventListener("swiped-left", (e) => {
document.querySelectorAll(".client").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("client3"));
document.querySelectorAll("#customer > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot6").classList.add("pink");
});

document.getElementById("client3").addEventListener("swiped-right", (e) => {
document.querySelectorAll(".client").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("client2"));
document.querySelectorAll("#customer > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot5").classList.add("pink");
});

document.getElementById("client3").addEventListener("swiped-left", (e) => {
document.querySelectorAll(".client").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("client4"));
document.querySelectorAll("#customer > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot7").classList.add("pink");
});

document.getElementById("client4").addEventListener("swiped-right", (e) => {
document.querySelectorAll(".client").forEach((e) => {
    e.style.display = "none";
});
fadeIn(document.getElementById("client3"));
document.querySelectorAll("#customer > i").forEach((e) => {
    e.classList.remove("pink");
});
document.getElementById("dot6").classList.add("pink");
});