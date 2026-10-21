
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


alert("It is working")




const periods = [
  {
    title: "Battle of Marathon",
    description: "In 490 BCE, the Athenians defeated a Persian army at the Battle of Marathon. This victory became an important moment in Greek history."
  },
  {
    title: "Second event",
    description: "Write the description of your second historical event here."
  },
  {
    title: "Third event",
    description: "Write the description of your third historical event here."
  },

  {
    title: "Fourth event",
    description: "Write the description of your third historical event here."
  },

  {
    title: "Fifth event",
    description: "Write the description of your third historical event here."
  },
   {
    title: "Sixth event",
    description: "Write the description of your third historical event here."
  },
   {
    title: "Seventh event",
    description: "Write the description of your third historical event here."
  },
   {
    title: "Eighth event",
    description: "Write the description of your third historical event here."
  },
];

function showPeriod(index) {
  document.getElementById("period-title").textContent =
    periods[index].title;

  document.getElementById("period-description").textContent =
    periods[index].description;

  document.querySelectorAll(".timeline-point").forEach(function(button) {
    button.classList.remove("active");
  });

  document.querySelectorAll(".timeline-point")[index]
    .classList.add("active");
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