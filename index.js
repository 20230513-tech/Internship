
// let firstName = 'Kostas';
// const lastName = 'Christou';


// Select html elemets
// const title = document.getElementById('page-title');
// const title = document.querySelector('#page-title');
// const title = document.querySelector('h1');
//const  body =document.querySelector('body');
//const title = document.querySelector('.main-title');
//const greetBtn = document.querySelector('.greet-btn');
// const nameInput =  document.querySelector('.name-input');


//Define an event-listener for the greetBtn
//greetBtn.addEventListener('click', () => {
   // let username = nameInput.value;

    //if (username === '' || username === null) {
    // title.textContent = `Please insert your name`;
   // } else {
    // title.textContent = `Hello ${username}!`;
    // body.style.backgroundColor = 'limegreen';
    //}
//});

//const namesArray = ['Kostas', 'Ermioni', 'Tatiana'];

// function createName (name) {
//     const singleName = document.createElement('p');
//     singleName.textContent = name;
//     body.append(singleName);
// }

//for (let name of namesArray) {
  //  const singleName = document.createElement('p');
  //singleName.textContent = name;
    //body.append(singleName);
//}


//alert("It is working")
const randFacts = [
  {
    title:"Olympics",
    fact: "The first recorded Olympic Games took place in 776 BC in Olympia. They were held in honor of Zeus."
  },

  {
    title: "Socrates wrote nothing",
    fact: "Socrates did not leave behind any writings of his own. Much of what we know about his ideas comes from writers such as Plato."
  },

  {
    title:"Ancient Greek Alarm Clock",
    fact: "The ancient engineer Ctesibius developed water clocks, and ancient Greek engineers experimented with devices that could produce sounds at predetermined times."
  }
]


const titleElement = document.getElementById("title");
const factElement = document.getElementById("fact");

if (titleElement && factElement && randFacts.length > 0) 
{
  const randomIndex = Math.floor(Math.random() * randFacts.length);
  const selectedFact = randFacts[randomIndex];

  titleElement.textContent = selectedFact.title;
  factElement.textContent = selectedFact.fact;
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