function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#mnysticks-id img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "avatar-light.png")
  } else {
    img.setAttribute("src", "Avatar.png")
  }
}
function playSom() {
  var som = document.getElementById("risada-do-zoio")
  som.play()
}
