// select DOM elements
const draggableList = document.getElementById('draggable-list')
const check = document.getElementById('check')

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Bernard Arnault',
  'Warren Buffett',
  'Mark Zuckerberg',
  'Amancio Ortega',
  'Larry Ellison',
  'Larry Page',
  'Carlos Slim Helu',
  'Sergey Brin'
]

const listItems = [];

let dragStartIndex;

// insert list into DOM

creatList();

function creatList() {
  [...richestPeople].forEach((item, index) => {
    const listItem = document.createElement('li')
    listItem.setAttribute('data-index', index);
    listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggble" draggble="true">
        <p class="person-name">${item}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
      `;
    listItems.push(listItem);
    draggableList.appendChild(listItem)
  });
}