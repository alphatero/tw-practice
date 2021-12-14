const btn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", ()=> {
  sidebar.classList.toggle("-translate-x-full");
});
closeBtn.addEventListener("click", ()=> {
  sidebar.classList.toggle("-translate-x-full");
});