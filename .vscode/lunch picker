const lunches = [];

function addLunchToEnd(lunches, string) {
  lunches.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, string) {
  lunches.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(arr) {
  if(arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return arr;
}

function removeFirstLunch(arr) {
  if(arr.length === 0) {
    console.log(`No lunches to remove.`)
  } else {
    const remove = arr.shift();
    console.log(`${remove} removed from the start of the lunch menu.`);
  }
  return arr;
}

function getRandomLunch(arr) {
  if(arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex  = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
  return arr;
}

function showLunchMenu(arr) {
  if(arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`)
  }
  return arr;
}

