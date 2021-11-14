function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  const tamsu = document.getElementById("tamsu");
  const hai = document.getElementById("hai");

  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 52) {
    scrollTop.classList.add("show-scroll");
    tamsu.classList.add("d-none");
    hai.classList.add("d-none");
  } else {
    scrollTop.classList.remove("show-scroll");
    tamsu.classList.remove("d-none");
    hai.classList.remove("d-none");
  }
}
window.addEventListener("scroll", scrollTop);
