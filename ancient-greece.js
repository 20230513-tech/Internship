const images =  
[
    "assets/images/lifeculture.jpeg",
    "assets/images/ancientgreekslide.jpg",
    "assets/images/classicgreekslide.jpg",
    "assets/images/deathofsocrates.jpg",
    "assets/images/phryne.jpg"
];

let index = 0;
let timer;

function showNextSlide() {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];

}

function startSlides() {
    if (!timer) {
        timer = setInterval(showNextSlide, 3000);
    }
}

function stopSlides() {
    clearInterval(timer);
    timer = undefined;
}

const randFacts = [
  {
    title:"The First Olympic Winner Was a Baker",
    fact: "The first recorded Olympic Games in 776 BCE featured only a single event—a 200-meter foot race (Stadion)—which was won by a cook or baker named Coroebus of Elis"
  },

  {
    title: "Bathroom Pebbles",
    fact: ": Ancient Greeks did not use toilet paper; instead, they cleaned themselves after using the bathroom with small stones (pesoy) or pieces of broken pottery (arraka)."
  },

  {
    title:"The First Analog Computer",
    fact: "Built around 100 BCE and discovered in a shipwreck, the Antikythera Mechanism used a complex system of bronze gears to track astronomical positions and predict eclipses."
  },

  {
    title:"Ancient Greeks used to add water to their wine",
    fact: "Wine was at the core of Ancient Greek culture. There was even a god of wine in the Pantheon, god Dionysus. However, it was considered hubris for mortals to get drunk; a habit suited only to barbarians. It was believed that only god Dionysus could drink wine without water and not get drunk. If the mortal men did not water their wine, there was a danger of them becoming violent and lose their mind"
  },

  {
    title:"Ancient Greeks could have been partially colorblind",
    fact: "Homer, in his famous works Iliad and Odyssey, describes the Mediterranean Sea as 'wine-dark' sea. Have you ever looked at the sea and thought that it was the color of claret? Homer, actually, names only a few color terms and uses the same colors to describe objects that look quite different."
  },

  {
    title: "Ancient Greeks were very superstitious",
    fact: "Ancient Greeks were very wise, but they were also very superstitious. Superstitions played a big part in their everyday life. Some days of each month were considered ominous, so they would avoid important tasks such as sowing or marriage."
  },


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



let questions = [
    {
        question: "Where would you prefer to live?",
        options: {
            a: "Athens",
            b: "Sparta",
            c: "Corinth"  
        }
    },

     {
        question: "What would you like to do for a living?",
        options: {
            a: "Become an artisan",
            b: "Become a merchant",
            c: "Become a philosopher or teacher",
            d: "become a farmer"
        }
     },

     {
        question: "How would you spend your free time?",
        options: {
            a: "Attending theatrical performances and enjoying music",
            b: "Training for athletic competitions",
            c: "Reading, learning, and discussing philosophical ideas",
            d: "Exploring new places and discovering different cultures "
        }
     },

     {
        question: "What is your greatest strength?",
        options: {
            a: "Creativity - You enjoy making things and expressing yourself",
            b: "Intelligence - You love solving problems and learning new things",
            c: "Courage - You face challenges and dont give up easily",
            d: "Communication - You are good at persuading people and making connections"
        }
     },

     {
        question: "What would you most like to buy at the agora?",
        options: {
            a: "Beautiful pottery or jewelry",
            b: "Scrolls, books, or writing materials",
            c: "Food, olives, bread, and wine",
            d: "Exotic goods brought by merchants from distant lands"
        }
     },

     {
        question: "Which activity sounds most exciting?",
        options: {
            a: "Designing a magnificent temple",
            b: "Participating in the Olympic Games",
            c: "Debating an important question with philosophers",
            d: "Sailing across the Mediterranean Sea"
        }
     },

     {
        question: "What kind of home would you prefer?",
        options: {
            a: "A home in a busy city, close to markets and public life",
            b: "A quiet home surrounded by farmland and nature",
            c: "A home near a harbor where ships arrive from distant lands",
            d: "A simple home where you can focus on training and discipline"
        }
     }
];

let results = [
    {
        title: "The Creative Artisan",
        description: "You would spend your days creating pottery, jewelry, or decorative objects. You appreciate beauty and take pride in your skills. You might sell your work in the agora and become a known craftsperson."
    },

    {
        title: "The Adventurous Merchant",
        description: "You would thrive in a world of ships, marketplaces, and distant ports. You enjoy discovering new places, negotiating prices, and meeting people from different cultures."
    },

    {
        title: "The Curious Philosopher",
        description: "You would spend time questioning the world around you, discussing ideas, and learning from others. Athens might be an especially appealing setting for your intellectual interests."
    },

    {
        title: "The Resourceful Farmer",
        description: "You would help grow crops, care for olive trees, and provide food for your household. Your work would depend on the seasons, the weather, and your knowledge of the land."
    }
];

const questionElement = document.getElementById("questions");
const optionsElement = document.getElementById("options");
const resultsElement = document.getElementById("results");
let currentQuestion = 0;
function showQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion].question;
    let optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    let answers = questions[currentQuestion].options;

    for (let letter in answers) {
        let button = document.createElement("button");

        button.textContent = answers[letter];

        optionsElement.appendChild(button);
    }

    


     
}

function showResults() {
     let answer = "";

    
}


showQuestion();



