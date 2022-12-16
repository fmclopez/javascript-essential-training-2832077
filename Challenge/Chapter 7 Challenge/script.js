const myFarm = ["rabbit", "goat", "pig", "cow", "chicken"];

console.log(myFarm);

const popFarm = ["rabbit", "goat", "pig", "cow", "chicken"];
popFarm.pop();
console.log(popFarm);

const shiftFarm = ["rabbit", "goat", "pig", "cow", "chicken"];
shiftFarm.pop();
shiftFarm.unshift("chicken");
console.log(shiftFarm);

const sortFarm = ["rabbit", "goat", "pig", "cow", "chicken"];
sortFarm.sort();
console.log(sortFarm);

function findItem(animal) {
  if (animal == "pig") {
    return true;
  } else return false;
}

const findFarm = ["rabbit", "goat", "pig", "cow", "chicken"];
console.log(findFarm.find(findItem));

const updatedFarm = ["rabbit", "goat", "pig", "cow", "chicken"];
updatedFarm.splice(1, 1);
console.log(updatedFarm);
