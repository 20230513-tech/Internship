const quizData = [
    {
        question: "Who was the king of the Greek gods?",
        options: ["Poseidon", "Zeus", "Apollo", "Hades"],
        answer: "Zeus"
    },

    {
        question:"Who was the goddess of wisdom?",
        options: ["Aphrodite", "Hera", "Athena", "Artemis"],
        answer:"Athena"
    },

    {
        question: "Who ruled the Underworld?",
        options: ["Ares", "Hermes", "Hephaestus", "Hades"],
        answer:"Hades"
    },

    {
        question: "Who was the god of the sea?",
        options: ["Apollo", "Poseidon", "Hermes", "Ares"],
        answer: "Poseidon"
    },

    {
        question: "Who was the goddess of love and beauty?",
        options: ["Athena", "Demeter", "Aphrodite", "Hera"],
        answer: "Aphrodite"
    },

    {
        question: "Which god was known as the messenger of the gods?",
        options: ["Hermes", "Hades", "Zeus", "Dionysus"],
        answer: "Hermes"
    },

    {
        question: "Who was the god of war?",
        options: ["Hephaestus", "Apollo", "Ares", "Poseidon"],
        answer: "Ares"
    },

    {
        question: "Who was the goddess of the hunt?",
        options: ["Artemis", "Hera", "Hestia", "Aphrodite"],
        answer: "Artemis"
    },
    {
        question: "Which god was associated with wine and theatre?",
        options: ["Hermes", "Dionysus", "Zeus", "Hades"],
        answer: "Dionysus"
    },
    {
        question: "Which god was associated with music, prophecy, and healing?",
        options: ["Apollo", "Poseidon", "Hades", "Hephaestus"],
        answer: "Apollo"
    },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
//const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    }
    );
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    }
    else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML= `
    <h2>Quiz Completed!</h2>
    <p>Your score: ${score}/${quizData.length}</p>`;
}

showQuestion();