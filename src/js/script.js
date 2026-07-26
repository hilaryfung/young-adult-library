const spoilers = document.querySelectorAll(".spoiler");

function removeSpoiler() {
  this.classList.remove("spoiler")
}

spoilers.forEach(el => {
  el.addEventListener("click", removeSpoiler)
})