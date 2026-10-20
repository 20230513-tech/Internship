
// let firstName = 'Kostas';
// const lastName = 'Christou';


// Select html elemets
// const title = document.getElementById('page-title');
// const title = document.querySelector('#page-title');
// const title = document.querySelector('h1');
const body =document.querySelector('body');
const title = document.querySelector('.main-title');
const greetBtn = document.querySelector('.greet-btn');
const nameInput =  document.querySelector('.name-input');


//Define an event-listener for the greetBtn
greetBtn.addEventListener('click', () => {
    let username = nameInput.value;

    if (username === '' || username === null) {
        title.textContent = `Please insert your name`;
    } else {
     title.textContent = `Hello ${username}!`;
     body.style.backgroundColor = 'limegreen';
    }
});

const namesArray = ['Kostas', 'Ermioni', 'Tatiana'];

// function createName (name) {
//     const singleName = document.createElement('p');
//     singleName.textContent = name;
//     body.append(singleName);
// }

for (let name of namesArray) {
    const singleName = document.createElement('p');
    singleName.textContent = name;
    body.append(singleName);
}


const periods = [
  {
    title: "Archaic Period",
    date: "c. 800-500 BCE",
    description:
      "Greek city-states developed, trade expanded, " +
      "and the first Olympic Games were held in 776 BCE."
  },
  {
    title: "Classical Period",
    date: "c. 500-323 BCE",
    description:
      "Greek civilization flourished in philosophy, " +
      "art, theatre, architecture, and politics. " +
      "Athens developed democracy, and philosophers " +
      "such as Socrates and Plato shaped Greek thought."
  },
  {
    title: "Hellenistic Period",
    date: "323-146 BCE",
    description:
      "After the death of Alexander the Great in 323 BCE, " +
      "Greek culture spread across Egypt and much of Asia. " +
      "Science, art, and international trade flourished."
  },
  {
    title: "Roman Greece",
    date: "146 BCE onward",
    description:
      "Rome gained control over mainland Greece in 146 BCE. " +
      "Greek language, art, philosophy, and education " +
      "continued to influence the Roman world."
  }
];

function showPeriod(index) {
  document.getElementById("period-title").textContent =
    periods[index].title;

  document.getElementById("period-date").textContent =
    periods[index].date;

  document.getElementById("period-description").textContent =
    periods[index].description;

  const points = document.querySelectorAll(".timeline-point");

  points.forEach(function(point, i) {
    point.classList.toggle("active", i === index);
  });
}





// const namesArray = ['kostas', 'ermioni'];
//     person1: 'kostas',
//     person2: 'ermioni'
// };

// console.log(firstName);

// function add (a, b) {
// console.log(a - b);
// }

// add(3, firstName);