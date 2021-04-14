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
console.info("True");
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
document.getElementById("productsicon").addEventListener("click", (e) => {
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

// Show all product images
document.querySelector("button").addEventListener("click", (e) => {
    document.querySelectorAll("#productone, #producttwo, #productthree, #productfour, #productfive, #productsix").forEach((e) => {
      e.style.display = "block";
    });
    this.hide();
});