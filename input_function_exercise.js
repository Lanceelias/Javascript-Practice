function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  // milk costs $1.5 per bottles
  // calculate how many bottles can be purchased for the cash provided.
  // var cash = prompt("How much money for milk? ")
  var costPerBottle = 1.5;
  var remainder = (money%costPerBottle);
  var subtract = (cash - remainder);
  var nrBottles = (subtract/costPerBottle);
  console.log("buy " + money + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5); //$1.5 5/1.5
