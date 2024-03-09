function toggleMenu() {
    const menuHamburguer = document.getElementById("menuHamburguer");
    const imagem = document.getElementById('imagemMenuFechado')
    
      if (menuHamburguer.style.display === "none") {
       menuHamburguer.style.display = "block";

       imagem.src = ('/assets/Menu Aberto.png');
       document.querySelector(".imagen-menu").classList.add("menu-ativo");
       
    } else {
       menuHamburguer.style.display = "none";

       imagem.src = ('/assets/Menu.svg')
       document.querySelector(".imagen-menu").classList.remove("menu-ativo");
    }
 }