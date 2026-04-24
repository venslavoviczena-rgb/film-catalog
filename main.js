// 1. ИНИЦИАЛИЗАЦИЯ ДАННЫХ
// Пытаемся загрузить данные, если их нет используем пустой массив
const rawData = localStorage.getItem("film_list");
// console.log(rawData);

let items = rawData ? JSON.parse(rawData) : [];

// Ссылки на элементы DOM
const container = document.querySelector("#list-container");
const clearBtn = document.querySelector("#clear-btn");

console.log(container)
// Функция отрисовки интерфейса
function render() {
  container.innerHTML = "";
  // Очищаем список перед перерисовкой
  items.forEach((film) => {
    const li = document.createElement("li");
    console.log(li)
    //li.className = "item";
    console.log(film.film_url);
    const url = new URL(`${film.film_url}`);
    console.log(url.pathname);
    const src_path = `https://www.youtube.com/embed${url.pathname}`;

    // Добавляем текст в элемент списка
    li.innerHTML = `<div class="thumb-wrap">
    <span> Название: ${film.title}</span>                   
    <iframe
      src= ${src_path}  
      allowfullscreen
    ></iframe>
    </div>
    
    `;
    container.appendChild(li);
  });
}
// https:
//youtu.be/To7NUGcuczI
// Добавление нового товара
// https:

// 3. ЗАПУСК ПРИ СТАРТЕ
// Вызываем рендер сразу, чтобы показать сохраненные данные
render();

// Полная очистка
clearBtn.addEventListener("click", () => {
  if (confirm("Очистить весь список?")) {
    items = [];
    localStorage.removeItem("film_list"); // Или localStorage.clear()
    render();
  }
});