// *********************************** LESS 22 ********************************************

// # 1 Prototype inheritance

const university = {

    universityName: "Polytechnic",
    dean: " Sam Gold",
};
  
const faculty = {

    facultyName: "learn js",
    groups: [[]],
    enlistStudent: function (... studentName) {

        studentName.forEach(studentName => {

            let lasttGroup = this.groups[this.groups.length - 1];
    
            if (lasttGroup.length >= 12) {

                this.groups.push([]);
                lasttGroup = this.groups[this.groups.length - 1]; 
            }
    
            lasttGroup.push(studentName);
        });

    },
    __proto__: university,
};

console.log(faculty.universityName);
// Polytechnic


faculty.enlistStudent("Oleg", "Anna", "Vika", "Olga", "Misha", "Ira", "Ura", "Alex", "Serg", "Valera", "Jon", "Sam", "Jane", "Vera");
console.log(faculty.groups);


// ********************************************************************************************************************************

// # 2 Prototype constructor

function Animal(name) {
   this.name = name;
};

Animal.prototype.getInfo = function () {
    return ` Animal name is ${this.name}`;
}

function Mammal(name, live) {
    Animal.call(this, name);
    this.live = live;
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.run = function () {
    return `${this.name} - run `;
}

function Bird(name, live) {
    Animal.call(this, name);
    this.live = live;
};

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function () {
  return `${this.name} can fly.`;
};

function Dog(name, live, breed) {
    Mammal.call(this, name, live);
    this.breed = breed;
};

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.whoIsGoodDog = function () {
    return ' woof woof';
}

function Penguin(name, live, species) {
    Bird.call(this, name, live);
    this.species = species;
};

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.console = Penguin;

Penguin.prototype.fly = function () {
    return `${this.name} can't fly`;
}

Penguin.prototype.swim = function () {
    return `${this.name} - swim`;
}

const penguin = new Penguin("penguin", "ocean", "swim");
const dog = new Dog("dogName", "city");

console.log(penguin);
console.log(penguin.swim());

console.log(dog);
console.log(dog.whoIsGoodDog());


