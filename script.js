function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
    // if (html.classList.contains("ligt")) {
    //  html.classList.remove("light")
    // } else {
    // html.classList.add("light")
    // }


  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains('light')) {
    //se tiver sem o light mode, manter a imagem normal
    img.setAttribute('src','./assets/avatar-light.png')
  } else  {

    //se tiver light mode, adcionar a img ligth
img.setAttribute("src", "./assets/avatar.png")
  }

}
