import { bubbleSort } from "./sortDB.js";
import { selectionSort } from "./sortDB.js";
import { insertionSort } from "./sortDB.js";
import { quicksort } from "./sortDB.js";
import { mergeSort } from "./sortDB.js";

const sortBtn = document.querySelector(".modal__button--sort");
const retryBtn = document.querySelector(".modal__button--retry");
const main = document.querySelector(".main");
const input = document.getElementById("input");
const sortedContent = document.querySelector(".sorted__content");
const algorithmContent = document.querySelector(".algorithm__content");
const info = document.querySelector(".info");

retryBtn.addEventListener("click", () => {
  window.location.reload();
});

sortBtn.addEventListener("click", () => {
  if (input.value) {
    const cleanValue = (input.value = input.value // оновлюєм інпут
      .replace(/[^0-9\s]/g, "") // чистим все крім цифр і пробілів
      .replace(/\s+/g, " ") // видалено пробіли всередині масиву
      .trim()); // видаляєм зайві пробіли спочатку і вкінці введених даних
    const arr = cleanValue.split(/ +/).map(Number); // конвертуєм в масив з числами

    main.style.justifyContent = "flex-start";
    sortBtn.style.display = "none";
    retryBtn.style.display = "block";

    onSort(bubbleSort, arr);
    onSort(selectionSort, arr);
    onSort(insertionSort, arr);
    onSort(quicksort, arr);
    onSort(mergeSort, arr);
  }
});

let once = true;

function onSort(func, arr) {
  let result = [];
  const startTime = performance.now();

  try {
    result = func(arr);
  } catch (error) {
    console.error("Помилка при сортуванні:", error.message);
  }

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  // Показуєм Info
  info.style.opacity = 1;

  // Виводим відсортований масив
  if (once === true) {
    result.forEach((element, index) => {
      const listItem = document.createElement("p");
      listItem.textContent = `${index + 1})  ${element}`;
      sortedContent.appendChild(listItem);
    });
    once = false;
  }

  // Виводим таймінг алгоритмів сортування
  const listItem = document.createElement("p");
  listItem.textContent = `${func.name}: ${elapsedTime.toFixed(2)} ms`;
  algorithmContent.appendChild(listItem);
  console.log(`${func.name}: ${elapsedTime} ms`);
}
