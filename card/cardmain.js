// 1. Create a new <div> element and give it an id
let cardDiv = document.createElement("div");
cardDiv.setAttribute('id', 'card')

// 2. Create a new <h2> element and assign it text
let title = document.createElement("h2");
title.textContent = "Gandalf";

// 3. Create a new <a> element, assign the href attribute, and write the text
let link = document.createElement("a");
link.setAttribute('href', '#')
link.textContent = "Go to profile";

// 4. Adding the <h2> and <a> elements to the <div> element
cardDiv.appendChild(title);
cardDiv.appendChild(link);

// 5. Add a <div> element to document.body or any other desired element
document.body.appendChild(cardDiv);
