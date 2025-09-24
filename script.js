//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	
	get typeOfAnimal(){
		return this.species;
	}
	makesound(){
		return `The ${this.species} makes a sound`;
	}
}

class Dog extends Animal {
	super(species);
	purr(){
		return "purr"
	}
}

class Cat extends Animal {
	super(species);
	bark(){
		return "woof"
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
