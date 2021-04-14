document.addEventListener('DOMContentLoaded', (event) => {
  // Show initial slides
  document.querySelectorAll(".team, .client").forEach((e) => {
    e.style.display = "none";
  });
  document.getElementById("team1").style.display = "block";
  document.getElementById("client1").style.display = "block";
});