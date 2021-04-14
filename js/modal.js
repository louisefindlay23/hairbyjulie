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