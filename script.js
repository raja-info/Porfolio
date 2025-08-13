const links = document.querySelectorAll(".nav-links a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.dataset.target;

    // Hide all pages
    pages.forEach(page => page.classList.remove("active"));

    // Show the target page instantly
    document.getElementById(targetId).classList.add("active");
  });
});
