
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




const periods = [
  {
    title: "Battle of Marathon",
    date: "490 BCE",
    description: "In 490 BCE, the Athenians defeated a Persian army at the Battle of Marathon. This victory became an important moment in Greek history.",
    link: "marathon.html",
  },
  {
    title: "Battle of Thermopylae",
    date: "480 BCE",
    description: "Greek soldiers led by King Leonidas of Sparta resisted the massive Persian army before being defeated after a betrayal revealed a hidden mountain path.",
    link: "thermopylae.html"
  },
  {
    title: "Battle of Salamis",
    date:"480 BCE",
    description: "The Greek fleet defeated the much larger Persian navy in a narrow sea passage, becoming a turning point in the Greco-Persian Wars.",
    link:"salamis.html"
  },

  {
    title: "Battle of Plataea",
    date:"479 BCE",
    description: "Greek forces defeated the Persian army, helping bring the Persian invasion of mainland Greece to an end.",
    link: "plataea.html"
  },

  {
    title: "Plague of Athens",
    date:"430 - 429 BCE",
    description: "A devastating epidemic struck Athens during the Peloponnesian War, killing many people, including the influential leader Pericles.",
    link: "plague-of-athens.html"
  },
   {
    title: "Sicilian Expedition",
    date:"415 - 413 BCE",
    description: "Athens launched a disastrous military campaign against Sicily, suffering enormous losses that weakened its position in the Peloponnesian War.",
    link:"sicilian-expedition.html"
  },
   {
    title: "Peloponnesian War",
    date:"431 - 404 BCE",
    description: "A prolonged conflict between Athens and Sparta and their allies that ended with Athens' defeat and the decline of its power.",
    link: "peloponnesian.html"
  },
   {
    title: "Corinthian War",
    date:"395 - 386 BCE",
    description: "Several Greek city-states fought against Sparta, eventually reaching a peace settlement that restored Persian influence over Greek affairs in Asia Minor.",
    link: "corinthian.html"
  },
  {
    title: "Battle of Leuctra",
    date:"371 BCE",
    description: "Thebes defeated Sparta using innovative military tactics, ending Sparta's reputation as the dominant military power in Greece.",
    link:"leuctra.html"
  },
  {
    title: "Battle of Chaeronea",
    date:"338 BCE",
    description: "Philip II of Macedon defeated Athens and Thebes, establishing Macedonian dominance over much of Greece and paving the way for Alexander the Great's campaigns.",
    link:"chaeronea.html"
  },
  
];

function showPeriod(index) {
  const period = periods[index];

  // Stop if the selected event does not exist
  if (!period) {
    console.error("Timeline event not found:", index);
    return;
  }

  // Update the title, date, and description
  document.getElementById("period-title").textContent =
    period.title;

  document.getElementById("period-date").textContent =
    period.date;

  document.getElementById("period-description").textContent =
    period.description;

  document.getElementById("more-text").href =
    period.link;
  // Remove the active class from all timeline buttons
  document.querySelectorAll(".timeline-point").forEach(function(button) {
    button.classList.remove("active");
  });

  // Highlight the selected button
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