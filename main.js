//Property
const containerElement = document.getElementById("container");
console.dir(containerElement, "this is an object of type HTML element");

//console.log() displays element in the console
//console.dir() displays object of type HTML element.

//When inspected we can see a property "id" and attribute "id"
//getElementById("container") is a method.
//We already know that we can add custom attributes to the element, but we can not add custom properties. Because properties are browser defined!

//Attribute
// Opt 1
// const createdAttribute = document.createAttribute("test");
// createdAttribute.value = "added successfully";
// containerElement.setAttributeNode(createdAttribute); // add attribute to the specified element.

// Opt 2
containerElement.setAttribute("test", "successfully added");
