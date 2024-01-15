function tooglemodule(){
  const html = document.documentElement
  html.classList.toggle(`light`)

  const img = document.querySelector('#perfil img')
  const alt = document.querySelector('#perfil img')

  if(html.classList.contains('light')){
    img.setAttribute("src", "img/laura.jpg.jpg")
    alt.setAttribute("alt", "avatar de laura")
  }else{
    img.setAttribute("src", "img/lauray.jpg")
    alt.setAttribute("alt", "laura de blase preto")
  }
}