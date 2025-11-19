const button = document.getElementById("generateButton");
const spellArea = document.getElementById("spellArea");

button.addEventListener("click", function () {
  const listItems = document.querySelectorAll("#ingredientsList li");
  const numberOfItems = listItems.length;
  const randomNumber = Math.floor(Math.random() * numberOfItems);
  const chosenIngredient = listItems[randomNumber].textContent;

  spellArea.textContent = "Your spell ingredient: " + chosenIngredient;

  const redValue = Math.floor(Math.random() * 256);
  const greenValue = Math.floor(Math.random() * 256);
  const blueValue = Math.floor(Math.random() * 256);
  const randomColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";

  spellArea.style.backgroundColor = randomColor;
});

button.addEventListener("click", function () {
  let counter = 3;
  spellArea.textContent = counter;

  const countdown = setInterval(function () {
    counter = counter - 1;
    spellArea.textContent = counter;

    if (counter === 0) {
      clearInterval(countdown);

      const listItems = document.querySelectorAll("#ingredientsList li");
      const numberOfItems = listItems.length;
      const randomNumber = Math.floor(Math.random() * numberOfItems);
      const chosenIngredient = listItems[randomNumber].textContent;

      spellArea.textContent = "Your spell ingredient: " + chosenIngredient;
    }
  }, 1000);
});

resetButton.addEventListener("click", function () {
  spellArea.textContent = "";
  document.body.style.backgroundColor = "";
  spellArea.style.backgroundColor = "";
});