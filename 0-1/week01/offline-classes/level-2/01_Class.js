class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

const dog = new Animal("Dog", 4);
console.log(dog.describe());  // Output: Dog has 4 legs

const cat = new Animal("Cat", 4);
console.log(cat.describe());  // Output: Dog has 4 legs

