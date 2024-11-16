const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const special = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

//& Dom

const changeThemeButton = document.querySelector("nav button");
const mainContent = document.querySelector("main");
const inputItem = document.querySelectorAll(".input-item");
const mainButton = document.querySelector("main button");
const resultContainerP = document.querySelectorAll(".passwordText");
const numberOfCharInput = document.getElementById("length");
const specialCheckInput = document.getElementById("special-check");
const numberCheckInput = document.getElementById("number-check");
const pswdOne = document.getElementById("passwordOne");
const pswdTwo = document.getElementById("passwordTwo");

//$ Password Generator

function getRandomPassword(length, isNumber, isSpecial) {
  let randomPassword = [];
  if (isNumber && isSpecial) {
    const characters = [...letters, ...numbers, ...special];
    for (let i = 1; i <= length; i++) {
      const randomNumber = Math.floor(Math.random() * (characters.length + 1));
      randomPassword.push(characters[randomNumber]);
    }
  } else if (isNumber) {
    const characters = [...letters, ...numbers];
    for (let i = 1; i <= length; i++) {
      const randomNumber = Math.floor(Math.random() * (characters.length + 1));
      randomPassword.push(characters[randomNumber]);
    }
  } else if (isSpecial) {
    const characters = [...letters, ...special];
    for (let i = 1; i <= length; i++) {
      const randomNumber = Math.floor(Math.random() * (characters.length + 1));
      randomPassword.push(characters[randomNumber]);
    }
  } else {
    const characters = [...letters];
    for (let i = 1; i <= length; i++) {
      const randomNumber = Math.floor(Math.random() * (characters.length + 1));
      randomPassword.push(characters[randomNumber]);
    }
  }
  return randomPassword.join("");
}

mainButton.addEventListener("click", (e) => {
  e.preventDefault();

  const numberOfChar = Number(numberOfCharInput.value);
  const numberCheck = numberCheckInput.checked;
  const specialCheck = specialCheckInput.checked;

  if (numberOfChar < 8 || numberOfChar > 20) {
    numberOfCharInput.style.border = "2px solid red";
  } else {
    const passwordOne = getRandomPassword(
      numberOfChar,
      numberCheck,
      specialCheck
    );

    pswdOne.textContent = passwordOne;

    const passwordTwo = getRandomPassword(
      numberOfChar,
      numberCheck,
      specialCheck
    );

    pswdTwo.textContent = passwordTwo;
    numberOfCharInput.style.border = "";
  }
});

//? Dark Theme

changeThemeButton.addEventListener("click", () => {
  if (changeThemeButton.classList.contains("darkNavButton")) {
    changeThemeButton.classList.remove("darkNavButton");
    mainContent.classList.remove("darkMainContent");
    inputItem.forEach((item) => item.classList.remove("darkInputItem"));
    mainButton.classList.remove("darkMainButton");
    resultContainerP.forEach((item) =>
      item.classList.remove("darkResultContainerP")
    );
  } else {
    changeThemeButton.classList.add("darkNavButton");
    mainContent.classList.add("darkMainContent");
    inputItem.forEach((item) => item.classList.add("darkInputItem"));
    mainButton.classList.add("darkMainButton");
    resultContainerP.forEach((item) =>
      item.classList.add("darkResultContainerP")
    );
  }
});

//& Password Copy

pswdOne.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(pswdOne);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    document.execCommand("copy");
    const text = pswdOne.textContent;
    pswdOne.textContent = "Copied!";
    setTimeout(() => {
      pswdOne.textContent = text;
    }, 1000);
  } catch (err) {
    alert("Kopyalama başarısız!");
  }
});

pswdTwo.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNode(pswdTwo);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    document.execCommand("copy");
    const text = pswdTwo.textContent;
    pswdTwo.textContent = "Copied!";
    setTimeout(() => {
      pswdTwo.textContent = text;
    }, 1000);
  } catch (err) {
    alert("Kopyalama başarısız!");
  }
});
