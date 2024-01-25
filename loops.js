for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
      console.log('FIZZ');
    } else if (i % 5 === 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }

  let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";

let node2List = document.getElementsByClassName("node2");
let node2 = node2List.length > 0 ? node2List[0] : null;
if (node2) {
    node2.textContent = "I used the getElementsByClassName('node2') method to access this";
}

let h3List = document.getElementsByTagName("h3");
for (let i = 0; i < h3List.length; i++) {
    h3List[i].textContent = "I used the getElementsByTagName('h3') method to access all of these";
}
Exercise 2 (Creating/Appending/Inserting Elements/Objects):
javascript
Copy code
let parent = document.getElementById("parent");

let paragraph = document.createElement("p");
paragraph.textContent = "This node was created using the createElement() method";
parent.appendChild(paragraph);

let anchor = document.createElement("a");
anchor.textContent = "I am a <a> tag";
parent.insertBefore(anchor, paragraph);

anchor.href = "your_link_here"; // Replace "your_link_here" with the actual link
Exercise 3 (Removing/Replacing Elements/Objects):
javascript
Copy code
let childNode = document.getElementById("childNode");
let newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node";

// Replace "Child Node" with a new <p> element that reads "New Child Node"
childNode.parentNode.replaceChild(newChildNode, childNode);

// Remove the "New Child Node"
newChildNode.remove();
Exercise 4 (Elements from an Array):
javascript
Copy code
let list = ["apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)"];
let ul = document.createElement("ul");

for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    li.textContent = list[i];
    ul.appendChild(li);
}
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Did not find value");
}
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Did not find value");
}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor === 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor === 0) {
        output += "BUZZ";
    }

    if (output === "") {
        console.log(i);
    } else {
        console.log(output);
    }
}
