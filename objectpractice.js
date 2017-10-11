var Puppy = function(name, breed, foodsEaten){
  this.name = name;
  this.breed = breed;
  this.foodsEaten = foodsEaten || [];

  this.eatSomething = function(food) {
    this.foodsEaten.push(food);
  }
};

/* introduce : function(){
  console.log("hello, I am " + puppy.name + " and I am a " + puppy.breed + " and today I ate " + puppy.eatSomething() )
}; */
