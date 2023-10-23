/*
  Hamster
  attributes:
    owner - string, initially set as an empty string
    name - string, set the name from parameter in constructor method
    price - integer, set as 15
  methods:
    wheelRun() - log "squeak squeak"
    eatFood() - log "nibble nibble"
    getPrice() - return the price
*/ 

/*
  Person
  attributes:
    name - set name from parameter in constructor method
    age - initially 0
    height - initially 0
    weight - initially 0
    mood - integer starting at 0 initially
    hamsters - empty array initially
    bankAccount - initially set to 0
  methods:
    getName() - returns name
    getAge() - returns age
    getWeight() - returns weight
    greet() - logs a message with person's name
    eat() - increment weight, increment mood
    exercise() - decrement weight
    ageUp() 
      - increment age, 
      - increment height,
      - increment weight,
      - decrement mood,
      - increment bank account by 10 (birthday money)
    buyHamster(hamster) 
      - push the hamster object onto the hamster array, 
      - increment mood by 10,
      - decrement bankAccount by the value of the hamster (hint: use getPrice())
*/

