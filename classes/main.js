class DogButton extends HTMLButtonElement {
  constructor() {
    super();
    this.isSpeaking = false;
    this.textContent = "Dog";
    this.addEventListener("click", () => this.displayInfo());
  }

  makeSound() {
    return "Woof! Woof!";
  }

  speak() {
    this.isSpeaking = true;
    return `Says ${this.makeSound()}`;
  }

  stopSpeaking() {
    this.isSpeaking = false;
    return "Stopped speaking";
  }

  displayInfo() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${this.speak()}</p>`;

    setTimeout(() => {
      outputDiv.innerHTML += `<p>${this.stopSpeaking()}</p>`;
    }, 2000);
  }
}

customElements.define("dog-button", DogButton, { extends: "button" });

class CatButton extends HTMLButtonElement {
  constructor() {
    super();
    this.isSpeaking = false;
    this.textContent = "Cat";
    this.addEventListener("click", () => this.displayInfo());
  }

  makeSound() {
    return "Meow! Meow!";
  }

  speak() {
    this.isSpeaking = true;
    return `Says ${this.makeSound()}`;
  }

  stopSpeaking() {
    this.isSpeaking = false;
    return "Stopped speaking";
  }

  displayInfo() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${this.speak()}</p>`;

    setTimeout(() => {
      outputDiv.innerHTML += `<p>${this.stopSpeaking()}</p>`;
    }, 2000);
  }
}

customElements.define("cat-button", CatButton, { extends: "button" });

class BirdButton extends HTMLButtonElement {
  constructor() {
    super();
    this.isSpeaking = false;
    this.textContent = "Bird";
    this.addEventListener("click", () => this.displayInfo());
  }

  makeSound() {
    return "Tweet! Tweet!";
  }

  speak() {
    this.isSpeaking = true;
    return `Says ${this.makeSound()}`;
  }

  stopSpeaking() {
    this.isSpeaking = false;
    return "Stopped speaking";
  }

  displayInfo() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${this.speak()}</p>`;

    setTimeout(() => {
      outputDiv.innerHTML += `<p>${this.stopSpeaking()}</p>`;
    }, 2000);
  }
}

customElements.define("bird-button", BirdButton, { extends: "button" });

// Create instances of the custom buttons
const dogButton = document.createElement("button", { is: "dog-button" });
const catButton = document.createElement("button", { is: "cat-button" });
const birdButton = document.createElement("button", { is: "bird-button" });

// Append buttons to the container
const container = document.querySelector(".animal-buttons-container");
container.appendChild(dogButton);
container.appendChild(catButton);
container.appendChild(birdButton);
