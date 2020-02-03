// select DOM elements
const draggableList = document.getElementById('draggable-list')
const check = document.getElementById('check')
const reset = document.getElementById('reset')

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
  [...richestPeople]
    .sort(() => Math.random() - 0.5)
    .forEach((item, index) => {
      const listItem = document.createElement('li')
      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${item}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
      `;
      listItems.push(listItem);
      draggableList.appendChild(listItem)
    });
  addEventListener()
}
// functions control drag events

function dragstart() {
  // add a plus sign makes it a number
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragover(e) {
  // prevent default event
  e.preventDefault();
}

function dragdrop() {
  const dragEndIndex = +this.getAttribute('data-index')
  swapItems(dragStartIndex, dragEndIndex)
  this.classList.remove('over');
}

function dragenter() {
  this.classList.add('over');
}

function dragleave() {
  this.classList.remove('over');
}

function addEventListener() {
  const draggables = document.querySelectorAll('.draggable')
  const dragListItems = document.querySelectorAll('.draggable-list li')

  draggables.forEach(item => item.addEventListener('dragstart', dragstart))

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragover);
    item.addEventListener('drop', dragdrop);
    item.addEventListener('dragenter', dragenter);
    item.addEventListener('dragleave', dragleave);
  })
}

// swap the items
function swapItems(start, end) {
  const itemOne = listItems[start].querySelector('.draggable');
  const itemTwo = listItems[end].querySelector('.draggable');
  // use appendChild to swap the DOM 
  listItems[start].appendChild(itemTwo)
  listItems[end].appendChild(itemOne)
}

// check if the answers are correct

check.addEventListener('click', checkAnswer)

function checkAnswer() {
  listItems.forEach((item, index) => {
    if (listItems[index].querySelector('.draggable p').innerText === richestPeople[index]) {
      item.classList.add('right')
    } else {
      item.classList.add('wrong')
    }
    item.querySelector('.draggable').setAttribute('draggable', false)
  })
}

// reset game

reset.addEventListener('click', resetGame)

function resetGame() {
  location.reload();
}