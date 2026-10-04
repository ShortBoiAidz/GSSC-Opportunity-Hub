function notAvailable() {
  alert("Coming soon!");
}

function openSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".fa-bars");

  sidebar.style.display = "flex";
  menuButton.style.display = "none";
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".fa-bars");

  sidebar.style.display = "none";
  menuButton.style.display = "block";
}

console.log("helloWorld(\"print\")")