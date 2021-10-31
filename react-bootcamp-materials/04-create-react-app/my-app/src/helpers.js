
import React, { Component } from 'react';

import {foods} from './foods';


// returns a randomly selected item from array of items
function choice(items){

  let randomFoodIndex = Math.floor(Math.random()*items.length)
  return (items[randomFoodIndex])
}

// console.log("item Index: " + item)
// console.log("item: " + items[item])
// removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function remove(items, item) {
  let removedItem
  for (let i= 0; i < items.length; i++) {
    if (item == items[i]) {
      removedItem = items.splice(i,1)

    }
  }
  console.log("removed item: " + removedItem)
}

export {choice, remove};
