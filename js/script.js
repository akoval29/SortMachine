const sortBtn = document.querySelector(".modal__button--sort");
const retryBtn = document.querySelector(".modal__button--retry");
const main = document.querySelector(".main");
const input = document.getElementById("input");
const sortedContent = document.querySelector(".sorted__content");
const algorithmContent = document.querySelector(".algorithm__content");
const info = document.querySelector(".info");

import { quicksort } from "./sortDB.js";
import { mergeSort } from "./sortDB.js";
import { shellSort } from "./sortDB.js";
import { bubbleSort } from "./sortDB.js";
// import { countingSort } from "./sortDB.js";
import { selectionSort } from "./sortDB.js";

sortBtn.addEventListener("click", () => {
  const cleanValue = (input.value = input.value.replace(/[^0-9\s]/g, "")); // чистим все крім цифр і пробелів і оновлюєм інпут
  const newArr = cleanValue.split(/ +/); // формуєм масив з рядками
  const arr = newArr.map((num) => parseInt(num, 10)); // конвертуєм в масив з числами
  main.style.justifyContent = "flex-start";
  sortBtn.style.display = "none";
  retryBtn.style.display = "block";
  info.style.display = "flex";

  onSort(quicksort, arr);
  onSort(mergeSort, arr);
  onSort(bubbleSort, arr);
  onSort(selectionSort, arr);
  // onSort(countingSort, arr);
  onSort(shellSort, arr);
});

retryBtn.addEventListener("click", () => {
  window.location.reload();
});

let onse = true;

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

  // Виводим відсортований масив
  if (onse === true) {
    result.forEach((element, index) => {
      const listItem = document.createElement("p");
      listItem.textContent = `${index + 1}) ${element}`;
      sortedContent.appendChild(listItem);
    });
    onse = false;
  }

  // Виводим таймінг алгоритмів сортування
  const listItem = document.createElement("p");
  listItem.textContent = `${func.name}: ${elapsedTime.toFixed(2)} ms`;
  algorithmContent.appendChild(listItem);
}
