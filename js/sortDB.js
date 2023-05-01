// Quick sort
export function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // Вибираємо перший елемент як опорний
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)]; // Застосовуємо алгоритм рекурсивно
}

// Merge Sort
export function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); // Застосовуємо алгоритм рекурсивно
}
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j)); // Додаємо залишки масивів
}

// BubbleSort
export function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Міняємо місцями два сусідні елементи
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Selection Sort
export function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

// Counting Sort
// export function countingSort(arr) {
//   const len = arr.length;
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < len; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   const count = new Array(max - min + 1).fill(0);

//   for (let i = 0; i < len; i++) {
//     count[arr[i] - min]++;
//   }

//   for (let i = 1; i < count.length; i++) {
//     count[i] += count[i - 1];
//   }

//   const sortedArr = new Array(len);
//   for (let i = len - 1; i >= 0; i--) {
//     sortedArr[--count[arr[i] - min]] = arr[i];
//   }

//   return sortedArr;
// }

// Shell Sort
export function shellSort(arr) {
  const n = arr.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
