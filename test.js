// // Setup
// var collection = {
//   2548: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     album: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     album: "ABBA Gold",
//   },
// };

// // Only change code below this line

// function updateRecords(id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     collection[id][prop] = value;
//   } else if (
//     prop === "tracks" &&
//     collection.hasOwnProperty(prop) === false &&
//     value !== ""
//   ) {
//     collection[id][prop] = [];
//     collection[id][prop].push(value);
//   } else if (prop === "tracks" && value !== "") {
//     collection[id].push(value);
//   } else if (value === "") {
//     delete collection[id][prop];
//   }
//   return collection;
// }

// updateRecords(5439, "artist", "ABBA");
// updateRecords(5439, "tracks", "Take a Chance on Me");
// updateRecords(2548, "artist", "");
// updateRecords(1245, "tracks", "Addicted to Love");
// updateRecords(2468, "tracks", "Free");
// updateRecords(2548, "tracks", "");
// updateRecords(1245, "album", "Riptide");
// console.log(collection);

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, prop) => {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].name === contacts[i].prop) {
      if (contacts[i].hasOwnProperty(prop) === true) {
        return contacts[i][prop];
      }
    }
    //  else if (name !== contacts[i].prop) {
    //     return "No such contact"
    // }
  }
  // return "No such property";
};

// let arr = [];

// arr.push(contacts[0].lastName);

// console.log(arr);
// console.log(contacts[0].firstName);

console.log(contacts[1].hasOwnProperty(number));

console.log("1 => " + lookUpProfile("Kristian", "lastName")); // should return "Vos"
console.log("2 => " + lookUpProfile("Sherlock", "likes")); // should return ["Intriguing Cases", "Violin"]
console.log("3 => " + lookUpProfile("Harry", "likes")); // should return an array
console.log("4 => " + lookUpProfile("Bob", "number")); // should return "No such contact"
console.log("5 => " + lookUpProfile("Bob", "potato")); // should return "No such contact"
console.log("6 => " + lookUpProfile("Akira", "address")); // should return "No such property"
