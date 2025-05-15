import { binarySearch } from './bin_search.js';
import { logTestCase, logTestCaseWithException } from '../../../../../utils/common_util.js';

// binarySearch
function testBinarySearch() {
  console.log("🔍 Тестирование binarySearch:");

  // Тест для элемента, присутствующего в массиве
  logTestCase("Массив [1,2,3,4,5], число 3, индекс 2", binarySearch([1, 2, 3, 4, 5], 3), 2);

  // Тест для элемента, отсутствующего в массиве
  logTestCase("Массив [1,2,3,4,5], число 6, не найдено", binarySearch([1, 2, 3, 4, 5], 6), -1);

  // Тест для пустого массива
  logTestCaseWithException("Пустой массив, число 1, не найдено", () => binarySearch([], 1), "Массив пуст");

  // Тест для элемента в начале массива
  logTestCase("Массив [1,2,3,4,5], число 1, индекс 0", binarySearch([1, 2, 3, 4, 5], 1), 0);

  // Тест для элемента в конце массива
  logTestCase("Массив [1,2,3,4,5], число 5, индекс 4", binarySearch([1, 2, 3, 4, 5], 5), 4);

  console.log();
}

// Запуск тестов
testBinarySearch();
