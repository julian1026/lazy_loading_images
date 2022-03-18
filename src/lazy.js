let contadorUno = 0;
let contadorDos = 0;
const isIntersecting = (entry) => {
  return entry.isIntersecting; // true (dentro de la pantalla)
};

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.querySelector("img");
  //   debugger;
  const url = image.dataset.src;
  image.src = url;
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
  if (entries.filter(isIntersecting).length == 1) {
    contadorDos++;
    message();
  } else {
    message();
  }
});

const message = () => {
  console.log("-------------------------------");
  console.log("total images : ", contadorUno);
  console.log("imagenes cargadas : ", contadorDos);
};

export const registerImage = (imagen) => {
  //intersection observer=> observer image
  contadorUno++;
  observer.observe(imagen);
};
