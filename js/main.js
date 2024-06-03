// Task 1

const firstPrompt = prompt("Введіть щось");
const secondPrompt = prompt("Введіть щось");

if (firstPrompt === null && secondPrompt === null) {
  alert("Не всі поля заповнені");
} else if (firstPrompt !== "" && secondPrompt !== "") {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

// Task 2

const firstNumber = Number(prompt("Введіть перше число"));
const secondNumber = Number(prompt("Введіть друге число"));

if (firstNumber + secondNumber > 10) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}

// Task 3

let userString = prompt("Введіть якесь речення");
userString = userString.toLowerCase();

if (userString.includes("javascript") === true) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}

// Task 4

const userNumber = Number(prompt("Введіть число"));

if (userNumber > 10 && userNumber < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}

// Task 5

const userName = prompt("Введіть ім'я");
const userEmail = prompt("Введіть пошту");
const userPassword = prompt("Введіть пароль");

if (
  userName.length >= 3 &&
  userEmail.includes("@") === true &&
  userPassword.length >= 6
) {
  alert("Дані введено правильно");
} else {
  alert("У введенні даних допущена помилка");
}
