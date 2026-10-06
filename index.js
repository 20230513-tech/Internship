
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



// const namesArray = ['kostas', 'ermioni'];
//     person1: 'kostas',
//     person2: 'ermioni'
// };

// console.log(firstName);

// function add (a, b) {
// console.log(a - b);
// }

// add(3, firstName);