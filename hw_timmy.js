class Hamster
{
  constructor(name = "Hamtaro")
  {
    this.name = String(name);
    this.owner = "";
    this.price = 15;
  }

  getPrice() { return Number(this.price); }
  
  wheelRun() { console.log("squeak squeak"); }
  eatFood() { console.log("nibble nibble"); }
}

class Person
{
  constructor(name)
  {
    this.name = String(name);
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  
  getName() { return String(this.name); }
  getAge() { return Number(this.age); }
  getWeight() { return Number(this.weight); }
  
  greet() { console.log(`Hello, I'm ${String(this.name)}.`); }
  exercise() { this.weight--; }
  eat()
  {
    this.weight++;
    this.mood++;
  }
  
  ageUp() 
  {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  
  buyHamster(hamster)
  {
    if(!(hamster instanceof Hamster))
      return console.log("This is not a hamster...");
    
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

/* Instantiate Timmy */
const protagonist = new Person("Timmy");
console.log(`We meet a boy named ${protagonist.getName()}. Just born and crying.`);

/* Age by 5*/
for(let i = 0; i < 5; i++)
  protagonist.ageUp();
console.log(
  `\nAs he is still a baby, there's not much it does so, ` +
  `we've skipped ${protagonist.getAge()} years to an event.`
);

/* Eat 5 */
for(let i = 0; i < 5; i++)
  protagonist.eat();
console.log(
  `\nUnfortunately, the ${protagonist.getAge()} year old ${protagonist.getName()} feels like he's ` +
  `"seen it all" and is bummed out. To cope with this feeling, he eats ` +
  `5 times, causing him to become ${protagonist.getWeight()} weight units.`
);

/* Exercise 5 */
for(let i = 0; i < 5; i++)
  protagonist.exercise();
console.log(
  `\n${protagonist.getName()}'s first day of kindergarten is coming up, ` +
  `and he wants to look good, so he exercises 5 times over the ` + 
  `next span of time and looses 5 weight units and `+ 
  `become ${protagonist.getWeight()} weight units.`
);

/* Age by 9 */
for(let i = 0; i < 9; i++)
  protagonist.ageUp();
console.log(
  `\n9 years pass, ${protagonist.getName()} is ${protagonist.getAge()} ` +
  `now and he wants to buy a hamster.`
);

/* Create Gus */
const hampter = new Hamster("Gus");

/* Set Gus' owner */
hampter.owner = protagonist;
console.log(
  `\nWe see a hamster named ${hampter.name} ` +
  `and apparently, before ${protagonist.getName()} even made the purchase, ` + 
  `it decided ${protagonist.getName()} was its owner.`
);

/* Buy Gus */
protagonist.buyHamster(hampter);
console.log(
  `\n${protagonist.getName()} buys ${hampter.name}, ` +
  `making his mood skyrocket to ${protagonist.mood}. ` +
  `Since he gets money every birthday, he has ${protagonist.bankAccount} money left ` +
  `in his bank account.`
);

/* Age by 15 */
for(let i = 0; i < 15; i++)
  protagonist.ageUp();

/* Eat 2 */
for(let i = 0; i < 2; i++)
  protagonist.eat();

/* Exercise 2 */
for(let i = 0; i < 2; i++)
  protagonist.exercise();
  
console.log(
  `\n15 years pass, ${protagonist.getName()} is ${protagonist.getAge()}, now ` +
  `a mild mannered adult with a mood of ${protagonist.mood} units. ` +
  `He's healthy and learned a regimen to stay in shape, with a weight of ${protagonist.getWeight()}.`
);
