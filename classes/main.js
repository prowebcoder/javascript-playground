// Parent class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    return this.sound;
  }

  displayInfo() {
    return `<p>${this.name} says ${this.makeSound()}</p>`;
  }
}

// Child class
class Dog extends Animal {
  constructor(name) {
    // Call the constructor of the parent class
    super(name, "Woof");
  }

  // Override the makeSound method
  makeSound() {
    return `${super.makeSound()} Woof!`;
  }
}

// Child class
class Cat extends Animal {
  constructor(name) {
    // Call the constructor of the parent class
    super(name, "Meow");
  }

  // Override the makeSound method
  makeSound() {
    return `${super.makeSound()} Meow!`;
  }
}

// Create instances of the classes
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// Display information on the webpage
document.getElementById("output").innerHTML =
  dog.displayInfo() + cat.displayInfo();
