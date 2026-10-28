const quizContainer = document.getElementById("entquiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


const myQuestions = [
    {
        question: "Which instrument was a wind instrument played using reeds?",
        answers: {
            a: "Lyre",
            b: "Kithara (guitar)",
            c: "Aulos",
            d: "Strigil"
        },
        correctAnswer: "c"

    },

    {
        question: "What were the kithara and lyre?",
        answers: {
            a: "String instruments",
            b: "Percussion instruments",
            c: "Wind instruments",
            d: "Athletic equipment"
        },
        correctAnswer: "a"
    },

    {
        question: "Why was music part of Greek education?",
        answers: {
            a: "It was believed to help shape character and emotions",
            b: "It replaced physical training",
            c: "It was used only in theatre",
            d: "It taught peopleto build instruments"
        },

        correctAnswer: "a"
    },

    {
        question: "Which god were many Greek theatre festivals held in honor of?",
        answers: {
            a: "Zeus",
            b: "Apollo",
            c: "Athena",
            d: "Dionysus"
        },
        correctAnswer: "d"
    },
    {
        question: "What was the theatron?",
        answers:{
            a: "The area where the chorus performed",
            b: "The place where the audience sat",
            c: "A structure used for costume changes",
            d: "A type of mask"
        },
        correctAnswer: "b"
    },

    {
        question: "Which playwright was known for using comedy and satire to criticize Athenian society?",
        answers: {
            a: "Aeschylus",
            b: "Aristophanes",
            c: "Sophocles",
            d: "Euripides"
        },
        correctAnswer: "b"
    },

    {
        question: "Where were the Olympic Games held in honor of Zeus?",
        answers: {
            a: "Olympia",
            b: "Athens",
            c: "Delphi",
            d: "Nemea"
        },
        correctAnswer: "a"
    },

    {
        question: "Which event combined five disciplines, including running, wrestling, and discus throwing?",
        answers: {
            a: "Pankration",
            b: "Pentathlon",
            c: "chariot race",
            d: "Panathenaia"
        },

        correctAnswer: "b"
    },

    {
        question: "What prize did Olympic victors traditionally receive?",
        answers: {
            a: "A gold medal",
            b: "A silver cup",
            c: "A wreath made from wild olive leaves",
            d: "An amphora of wine"
        },
        correctAnswer: "c"
    }
]

function buildQuiz()
{
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers) {
                answers.push(`<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`);
            }

            output.push(`<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults()
{
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
  const answerContainer = answerContainers[questionNumber];

  // Clear old colors if the user submits again.
  answerContainer.querySelectorAll("label").forEach((label) => {
    label.style.color = "";
  });

  const selector = `input[name="question${questionNumber}"]:checked`;
  const selectedInput = answerContainer.querySelector(selector);

  if (!selectedInput) return;

  const selectedLabel = selectedInput.closest("label");

  if (selectedInput.value === currentQuestion.correctAnswer) {
    numCorrect++;
    selectedLabel.style.color = "green";
  } else {
    selectedLabel.style.color = "red";
  }
});

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();
submitButton.addEventListener("click", showResults);