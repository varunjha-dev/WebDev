// ✅ Creating and Adding Elements to the DOM

// 📌 Create a new <li> element
const element = document.createElement('li');
element.innerHTML = 'TS';

// 📌 Select the parent element and append the new <li> at the end
const parent = document.getElementById('root');
parent.appendChild(element);

// ✅ Function to Attach Multiple Elements Efficiently

/*
function attach(content) {
    // Create two list items
    const element1 = document.createElement('li');
    element1.innerHTML = content;

    const element2 = document.createElement('li');
    element2.innerHTML = content + " V2.0";

    // Append both elements to the parent
    const parent = document.getElementById('root');
    parent.append(element1, element2); // append() allows multiple elements at once, appendChild() does not
}

attach('TS');
attach('React');
attach('Node');
*/

// ✅ Creating a Text Node and Appending to the DOM
const textNode = document.createTextNode("Hello Coder Army");
parent.append(textNode);

// ✅ Creating and Setting an Attribute
const attr = document.createAttribute("id");
attr.value = "first";

// access to first list
// const curr_list = document. querySelector( 'li');
// curr_list.setAttributeNode(attr);

// 📌 Apply the attribute to the second <li> element inside the parent
parent.children[1].setAttributeNode(attr);

// ✅ Accessing Attributes of an Element
const classAttr = parent.getAttribute("class");
console.log(classAttr);

// 📌 setAttribute() - Creates an attribute if it doesn't exist, otherwise updates it
parent.setAttribute("custom", "20");
parent.setAttribute("class", "Varun");

// 📌 removeAttribute() - Removes an attribute
parent.removeAttribute("custom");

// ✅ Adding Elements to Specific Positions in the DOM

// 📌 Attach an element as the first child
parent.prepend(element);

// 📌 Attach an element as the last child
parent.append(element);

// 📌 Insert element before a specific child
const secondChild = parent.children[1];
parent.insertBefore(element, secondChild);

// 📌 Replace a child element
parent.replaceChild(element, secondChild);

// ✅ Using innerHTML to Add Elements
parent.innerHTML += "<li>hi</li>";
// parent.innerHTML = "HELLO"; // Replace all the hardcoded html elements 

// ✅ Insert Adjacent Element at Specific Positions
const newElement = document.createElement('div');
newElement.innerHTML = "Hello Coder ";

// 📌 Insert at different positions relative to the parent
// parent.insertAdjacentElement("beforeBegin", newElement); // Before the parent
// parent.insertAdjacentElement("afterEnd", newElement);    // After the parent
// parent.insertAdjacentElement("afterBegin", newElement);  // As the first child
parent.insertAdjacentElement("beforeEnd", newElement);     // As the last child


// ✅ Removing an Element from the DOM

// 📌 Select an <li> element and remove it
const listItem = document.querySelector('li');
// listItem.remove();

// 📌 Remove a specific child node
parent.removeChild(listItem);
