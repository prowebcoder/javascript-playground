// Parent class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.isSpeaking = false;
  }

  makeSound() {
    return this.sound;
  }

  speak() {
    this.isSpeaking = true;
    return `${this.name} says ${this.makeSound()}`;
  }

  stopSpeaking() {
    this.isSpeaking = false;
    return `${this.name} stopped speaking`;
  }

  displayInfo() {
    return `<p>${this.name} is a ${this.constructor.name.toLowerCase()}.</p>`;
  }
}

// Child class
class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");
  }

  makeSound() {
    return `${super.makeSound()} Woof!`;
  }
}

// Child class
class Cat extends Animal {
  constructor(name) {
    super(name, "Meow");
  }

  makeSound() {
    return `${super.makeSound()} Meow!`;
  }
}

// Additional child class
class Bird extends Animal {
  constructor(name) {
    super(name, "Tweet");
  }

  makeSound() {
    return `${super.makeSound()} Tweet!`;
  }

  fly() {
    return `${this.name} is flying`;
  }

  displayInfo() {
    return super.displayInfo() + `<p>${this.name} is a bird.</p>`;
  }
}

// Create instances of the classes
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Bird("Polly");

// Display information on the webpage
function displayAnimalInfo() {
  document.getElementById("output").innerHTML =
    dog.displayInfo() + cat.displayInfo() + bird.displayInfo();
}
// Make animals speak when the button is clicked
function makeAnimalsSpeak() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  outputDiv.innerHTML += `<p>${dog.speak()}</p>`;
  outputDiv.innerHTML += `<p>${cat.speak()}</p>`;
  outputDiv.innerHTML += `<p>${bird.speak()}</p>`;

  setTimeout(() => {
    outputDiv.innerHTML += `<p>${dog.stopSpeaking()}</p>`;
    outputDiv.innerHTML += `<p>${cat.stopSpeaking()}</p>`;
    outputDiv.innerHTML += `<p>${bird.stopSpeaking()}</p>`;
  }, 3000);
}

// Display initial information
displayAnimalInfo();
