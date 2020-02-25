// Con disculpas por la tardanza, Flor, te mando mis observaciones. 
// En primer lugar, me encantga tanto el diseño como el codigo realizado. Todo esta prolijo y bien hecho. 

// Los problemas con el modal surgen porque estamos trabajando con el modal dentro de un for que recorre las tarjetas. 
// Por cada tarjeta tenemos un boton que abre el modal, asi que eso esta perfecto: cuando decimos "button[i].onclick", 
// cada button[i] corresponde a una tarjeta 
// Pero al momento de cerrar el modal tenemos problemas porque tenemos un solo modal. Entonces cuando decimos 
// "closeModal[i].onclick", si hacemos clic por ej en la segunda tarjeta, la i del for es igual a 1. 
// button[i] corresponde al boton de la segunda tarjeta, pero closeModal[i] no existe. Solo tenemos un solo closeModal. 
// La solucion seria hacer que closeModal se refiera siempre a ese unico elemento. Por ejemplo, asi:
// closeModal[0].onclick = () => {
// El otro problema es que a tu modal se le agrega la clase "nomostrar", pero nunca se le quita esa clase para hacerlo
// visible. Por eso no lo podemos ver una segunda vez. 
// Inmediatamente despues del onclick, podriamos agregar esta linea: 
//     modalContainer.classList.remove("nomostrar")

// El codigo de la funcion del modal quedaria asi:

  // button[i].onclick = () => {
  //   modalContainer.classList.remove("nomostrar")
  //   modalContainer.innerHTML = `
  //   <h3 class="h3-modal">${gatos[i].name}</h3>
  //   <img src="${gatos[i].img}" alt="gatitos varios"></img>
  //   <p class="longDescr">${gatos[i].longDesc}</p>
  //   <div class="close"><i class="fas fa-window-close"></i></div>
  //     `;
  //   const closeModal = document.getElementsByClassName("close")

  //   closeModal[0].onclick = () => {
  //      modalContainer.classList.add("nomostrar")
  //   }
  // }

// Con eso ya deberia funcionar
// Excelente trabajo!

const gatos = [
  {
    name: "Rodolfo",
    shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/400"
  },

  {
    name: "Muzzarella",
    shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/500"
  },

  {
    name: "Artilugia",
    shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/600"
  },

  {
    name: "Wosito",
    shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "http://www.placekitten.com/700"
  },

  // {
  // name: "Calamardo",
  // shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
  // longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
  // img: "http://www.placekitten.com/800"
  // },

]


let tarjetas = "";

for (let i = 0; i < gatos.length; i++) {
  tarjetas += `
<div class= "cards">
  <div class= "imagen-cards">
  <img src="${gatos[i].img}" class="img-gatitos" alt="${gatos[i].name}"> </img>
  </div>
  <div class= "texto-cards">
  <h2 class="h2Cards">${gatos[i].name}</h2>
  <p>${gatos[i].shortDesc}</p>
  <button>Ver más</button>
  </div>
</div>
   `
}

const modal = document.getElementById("cuadricula")

cuadricula.innerHTML = tarjetas;

const cards = document.getElementsByClassName("cards")
const h2Cards = document.getElementsByClassName("h2Cards")
const textoCards = document.getElementsByClassName("texto-cards")
const button = document.getElementsByTagName("button")
const modalContainer = document.getElementById("modalContainer")
const imagenCuadricula = document.getElementsByClassName("img-gatitos")

for (let i = 0; i < cards.length; i++) {
  cards[i].onmouseenter = () => {
    h2Cards[i].classList.add("h2-hover");
    textoCards[i].classList.add("hover");
    button[i].classList.add("button-hover");
    imagenCuadricula[i].classList.add("img-hover");
  }
  cards[i].onmouseleave = () => {
    h2Cards[i].classList.remove("h2-hover");
    textoCards[i].classList.remove("hover");
    button[i].classList.remove("button-hover");
    imagenCuadricula[i].classList.remove("img-hover");
  }

  button[i].onclick = () => {
    modalContainer.innerHTML = `
    <h3 class="h3-modal">${gatos[i].name}</h3>
    <img src="${gatos[i].img}" alt="gatitos varios"></img>
    <p class="longDescr">${gatos[i].longDesc}</p>
    <div class="close"><i class="fas fa-window-close"></i></div>
      `;
    const closeModal = document.getElementsByClassName("close")

    closeModal[i].onclick = () => {
       modalContainer.classList.add("nomostrar")
    }
  }

}






