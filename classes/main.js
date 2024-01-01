class AnimalButton extends HTMLButtonElement {
  constructor() {
    super();
    this.isSpeaking = false;
  }

  makeSound() {
    return "Default sound";
  }

  speak() {
    this.isSpeaking = true;
    return `Says ${this.makeSound()}`;
  }

  stopSpeaking() {
    this.isSpeaking = false;
    return "Stopped speaking";
  }
}

// Define custom elements
customElements.define("animal-button", AnimalButton, { extends: "button" });

class DogButton extends AnimalButton {
  constructor() {
    super();
  }

  makeSound() {
    return "Woof! Woof!";
  }
}

class CatButton extends AnimalButton {
  constructor() {
    super();
  }

  makeSound() {
    return "Meow! Meow!";
  }
}

class BirdButton extends AnimalButton {
  constructor() {
    super();
  }

  makeSound() {
    return "Tweet! Tweet!";
  }

  fly() {
    return "is flying";
  }
}

// Create instances of the custom buttons
const dogButton = new DogButton();
const catButton = new CatButton();
const birdButton = new BirdButton();

// Display information on button click
function displayAnimalInfo(animalButton) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  outputDiv.innerHTML += `<p>${animalButton.speak()}</p>`;

  setTimeout(() => {
    outputDiv.innerHTML += `<p>${animalButton.stopSpeaking()}</p>`;
  }, 2000);
}

// Add event listeners to the buttons
dogButton.addEventListener("click", () => displayAnimalInfo(dogButton));
catButton.addEventListener("click", () => displayAnimalInfo(catButton));
birdButton.addEventListener("click", () => displayAnimalInfo(birdButton));

// Append buttons to the container
const container = document.querySelector(".animal-buttons-container");
container.appendChild(dogButton);
container.appendChild(catButton);
container.appendChild(birdButton);
