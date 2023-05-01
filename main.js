//1
/*function showList() {
  // Отримання посилання на список
  let list = document.getElementById("list");

  // Отримання посилань на елементи списку
  let items = list.getElementsByTagName("li");

  // Отримання текстового вмісту кожного елемента
  let first = items[0].textContent;
  let last = items[items.length - 1].textContent;
  let second = items[1].textContent;
  let fourth = items[3].textContent;
  let third = items[2].textContent;

  // Виведення тексту у модальному вікні
  alert(first + ', ' + last + ', ' + second + ', ' + fourth + ', ' + third);
}
*/
// 2
const header = document.getElementsByTagName("h1")[0];
header.style.fontWeight = "bold";
header.style.backgroundColor = "green";



const firstParagraph = document.getElementsByTagName("p")[0];
firstParagraph.style.fontWeight = "bold";

const secondParagraph = document.getElementsByTagName("p")[1];
secondParagraph.style.color = "red";
const thirdParagraph = document.getElementsByTagName("p")[2];
thirdParagraph.style.textDecoration = "underline";
const fourthParagraph = document.getElementsByTagName("p")[3];
fourthParagraph.style.fontStyle = "italic";

const myList = document.getElementById("myList");
myList.style.display = "flex";
const listItems = myList.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.display = "inline-block";
}
const gutText = document.getElementsByTagName("span")[0];
gutText.style.display = "none";
//3 завдання
/*
// Створення елементів
let body = document.querySelector('body');
let main = document.createElement('main');
main.setAttribute('class', 'mainClass check item');

let div = document.createElement('div');
div.setAttribute('id', 'myDiv');

let paragraph = document.createElement('p');
paragraph.textContent = 'First paragraph';

// Додавання елементів до сторінки
div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);
*/
/*// 4 завда 
// Отримуємо посилання на кнопку "Надіслати" та поле "out"
const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

// Додаємо обробник події "click" до кнопки "Надіслати"
btn.addEventListener('click', function() {
  // Отримуємо значення всіх полів вводу
  const inputs = document.querySelectorAll('.arr');
  let output = '';
  inputs.forEach(input => {
    output += input.dataset.form + ': ' + input.value + '\n';
  });

  // Виводимо результат у поле з класом "out"
  outBlock.textContent = output;
});*/
