// qstar.js

const q = (selector, parent = document) => parent.querySelector(selector);
const qq = (selector, parent = document) => parent.querySelectorAll(selector);
const log = (text) => console.log(text);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}

const show = (element) => {
  element.style.display = '';
};

const hide = (element) => {
  element.style.display = 'none';
};

const toggle = (element) => {
  if (element.style.display == 'none') {
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }
}

