import { registerImage } from "./lazy.js";
const $container = document.querySelector("#images");
const $button = document.querySelector("button");

const creteImage = (url) => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  figure.className = "p-4";
  img.className = "mx-auto img";
  img.width = "320";
  img.dataset.src = url;
  img.alt = "wolf image random";

  figure.append(img);
  return figure;
};

const idImage = () => {
  const number = Math.floor(Math.random() * 121) + 1;
  return number;
};

const addImage = (e) => {
  e.preventDefault();
  const number = idImage();
  const url = `https://randomfox.ca/images/${number}.jpg`;
  const newImage = creteImage(url);
  $container.insertAdjacentElement("beforeend", newImage);
  registerImage(newImage);
};

$button.addEventListener("click", addImage);
