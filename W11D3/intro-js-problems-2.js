// Phase I

function titleize(names, callback) {
  let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

// titleize(["Mary", "Brian", "Leo"], (names) => {
//   names.forEach(name => console.log(name));
// });


// Phase II

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`);
};

Elephant.prototype.grow = function() {
  this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  let rand_trick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
  console.log(`${this.name} is ${rand_trick}. Incredible, no?`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

let herd = [ellie, charlie, kate, micah];

herd.forEach(elephant => Elephant.paradeHelper(elephant));
herd.forEach(elephant => elephant.play());

// kate.trumpet();
// console.log('-------')
// console.log(kate.height)
// kate.grow();
// console.log(kate.height)
// console.log('-------')
// kate.play();




// function buildList(list) {
//   var result = [];
//   for (let i = 0; i < list.length; i++) {
//     var item = 'item' + i;
//     result.push(function () { console.log(item + ' ' + list[i]) });
//   }
//   return result;
// }

// function testList() {
//   var fnlist = buildList([1, 2, 3]);
//   // Using j only to help prevent confusion -- could use i.
//   for (var j = 0; j < fnlist.length; j++) {
//     fnlist[j]();
//   }
// }

// testList() //logs "item2 undefined" 3 times