function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const profileImg = html.querySelector("#profile img")

  if (html.classList.contains("light")) {
    profileImg.setAttribute("src", "./assets/avatar-light.png")
    profileImg.setAttribute(
      "alt",
      "Foto de Gabriel Rodrigues, sorrindo, usando oculos escuros e uma camiseta preta, com um fundo degrade que inicia em verde e termina em azul"
    )
  } else {
    profileImg.setAttribute("src", "./assets/avatar.png")
    profileImg.setAttribute(
      "alt",
      "Foto de Gabriel Rodrigues, sorrindo, usando uma camiseta preta, com um fundo degrade que inicia em verde e termina em azul"
    )
  }
}
