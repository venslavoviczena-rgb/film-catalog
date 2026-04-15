// Ссылки на элементы DOM
const form = document.querySelector("#film-form");
console.log(form);
const input = document.querySelector("#item-input");
const url = document.querySelector("#url");
const clearBtn = document.querySelector("#clear-btn");

// Функция сохранения данных в localStorage
function save() {
  // Превращаем массив объектов в JSON-строку
  localStorage.setItem("film_list", JSON.stringify(items));
}

// Пытаемся загрузить данные, если их нет используем пустой массив
const rawData = localStorage.getItem("film_list");
// console.log(rawData);
let items = rawData ? JSON.parse(rawData) : [];
console.log(items);

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Отмена перезагрузки страницы
  const newItem = {
    title: input.value,
    film_url: url.value,
  };
  items.push(newItem);
  // Добавляем в массив
  save();
  // Сохраняем в localStorage

  // Обновляем экран
  input.value = "";
  url.value = "";
  // Очищаем поле ввода
});

// Полная очистка
clearBtn.addEventListener("click", () => {
  if (confirm("Очистить весь список?")) {
    items = [];
    localStorage.removeItem("film_list"); // Или localStorage.clear()
    render();
  }
});
// 3. ЗАПУСК ПРИ СТАРТЕ
// Вызываем рендер сразу, чтобы показать сохраненные данные
