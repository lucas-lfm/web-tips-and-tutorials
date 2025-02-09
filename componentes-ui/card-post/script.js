let icons = document.querySelectorAll(".post-header i");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("bi-bookmark");
    icon.classList.toggle("bi-bookmark-fill");
  });
});
