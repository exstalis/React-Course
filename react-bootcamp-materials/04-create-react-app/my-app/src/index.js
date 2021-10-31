
import React, { Component } from 'react';

import {foods} from './foods';

import {remove, choice} from './helpers';


let food = choice(foods)




// Log the message “I’d like one RANDOMFRUIT, please.”
// Log the message “Here you go: RANDOMFRUIT”
// Log the message “Delicious! May I have another?”
// Remove the fruit from the array of fruits
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

console.log("I'd like one" + food + "please.")
console.log("Here you go: " + food)
console.log("Delicious! May I have another?")
remove(foods,food)
console.log("I'm sorry, we're all out. We have"  + foods.length + "lets")
