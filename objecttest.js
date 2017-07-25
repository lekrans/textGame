
/**
 * Animal constructor
 * @constructor
 * @param {*} voice The animals voice
 */
function Animal (voice) {
    this.voice = voice || "grunt";
}

Animal.prototype.speak = function () {
    console.log(this.voice);
};

/**
 * Create a Cat object
 * @constructor
 * @param {*} name The cats name
 * @param {*} color The cats color
 */
function Cat (name, color) {
    Reflect.apply(Animal, this, ["Meow"]);
    this.name = name;
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
let fluffy = new Cat("Fluffy", "White");

console.log(fluffy.__proto__);  // Cat { constructor: [Function: Cat] }
console.log(fluffy.__proto__.__proto__);  // Animal { speak: [Function] }
console.log(fluffy); // Cat { voice: 'Meow', name: 'Fluffy', color: 'White' }