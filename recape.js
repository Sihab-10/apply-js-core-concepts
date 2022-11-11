// variable
var myName = "Khan";
// math operation: +,-,*,/,%
// shortHand: +=,-=,*=,%=
// ++,--

// 2. Array
var friends = ["abul", "Kabul", "babul", "cabul", "ebul"];
var thirdFriend = friends[2];
console.log(thirdFriend);
friends[3] = "dambool";
console.log(friends);

// 3. Conditionals
if (friends.length < 2) {
  console.log("congratulations!!");
} else {
}

// loop

// while loop
var number = 0;
while (number <= 6) {
  console.log(number);
  number++;
}

// for loop

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// function

function isMoonUp(time) {
  if (time > 7) {
    return true;
  } else {
    return false;
  }
}
var todaysNight = isMoonUp(5);
console.log(todaysNight);

// object

var jantus = {
  height: 60,
  romaticism: "heavvy",
  baperTaka: "borolox",
};

console.log(jantus);
