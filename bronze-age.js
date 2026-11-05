const randFacts = [
  {
    title:"Palace Grocery Lists Only",
    fact: " If you opened a Bronze Age Greek (Mycenaean) 'textbook' or diary, you wouldn’t find poetry or love letters—Linear B clay tablets are almost entirely dry administrative spreadsheets tracking sheep, Coriander, chariot wheels, and how many vats of wine the local foreman got."
  },

  {
    title: "Industrial Perfume Tycoons",
    fact: " Palaces like the one at Pylos operated massive, state-sponsored perfume factories. Scented olive oil was a major luxury export and the ultimate status symbol—meaning ancient warriors probably smelled strongly of sage, rose, or coriander before heading into battle."
  },

  {
    title:"Ancient Family Trees Were a Circle",
    fact: "Genetic studies show that first-cousin marriage was a systematic, widespread practice across the Aegean region 4,000 years ago. It wasn’t about romance; it was a ruthless real-estate strategy to keep olive groves and vineyards from getting split up among too many heirs."
  },

  {
    title:"Saffron for Cramps",
    fact: " At the Minoan settlement of Akrotiri (preserved by a volcanic eruption around 1600 BC), wall frescoes show young girls picking saffron. Archaeological and botanical evidence points to saffron being used medicinally to ease menstrual pain during puberty initiation rituals."
  },

  {
    title:"Massive Time Gap Perspective",
    fact: " The catastrophic 'Bronze Age Collapse' (around 1200 BC), when all the great palaces burned down and writing vanished for centuries, is actually just as far away from the Fall of the Roman Empire as the Fall of the Roman Empire is from us today."
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