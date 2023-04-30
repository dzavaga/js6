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
/*
// Заголовок
let header = document.querySelector('h1');
header.style.fontSize = '72px';
header.style.textAlign = 'center';

// Контейнер з абзацами
let div = document.querySelector('#myDiv');
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';

// Абзаци
let paragraphs = document.querySelectorAll('#myDiv p');
paragraphs.forEach(function(paragraph) {
  paragraph.style.width = '50%';
  paragraph.style.textAlign = 'justify';
});

// Список
let list = document.querySelector('#myList');
list.style.display = 'flex';
list.style.flexDirection = 'row';

// Елементи списку
let items = document.querySelectorAll('#myList li');
items.forEach(function(item) {
  item.style.flex = '1';
  item.style.textAlign = 'center';
});

// Елемент span
let span = document.querySelector('span');
span.style.display = 'none';
*/
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
