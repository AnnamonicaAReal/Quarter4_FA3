function getNumber() {
  let num;
  do {
    num = prompt("Please enter a number:");
  } while (isNaN(num) || num === "");

  num = parseInt(num);
  const outputDiv = document.getElementById("shapeOutput");
  let result = `Number inputted: ${num}\n\n`;

  if (num % 2 === 1) {
    for (let i = num; i >= 1; i--) {
      result += (i + " ").repeat(num).trim() + "\n";
    }
  } else {
    for (let i = num; i >= 1; i--) {
      result += (i + " ").repeat(i).trim() + "\n";
    }
  }

  outputDiv.textContent = result;
}

let contacts = [];

function updateContactList() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";
  contacts.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

function addContact() {
  const input = document.getElementById("contactInput");
  const name = input.value.trim();
  if (name === "") return;

  if (contacts.length >= 7) {
    contacts.shift(); 
  }
  contacts.push(name);
  input.value = "";
  updateContactList();
}

function removeContact() {
  if (contacts.length > 0) {
    contacts.pop();
    updateContactList();
  }
}
