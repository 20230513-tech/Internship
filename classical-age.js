const randFacts = [
  {
    title:"Ancient Greeks had pregnancy tests as well",
    fact: "Pregnancy tests are not a devising of modern times. Ancient Greeks had a rather unusual method for detecting if a woman was pregnant. They would insert a clove of garlic inside the woman's vagina overnight. If she was not pregnant, her breath would smell of onions next morning. The idea behind this test was that, if there was no child, the woman's tomb would be 'unobstructed' and the smell would travel up to her mouth."
  },

  {
    title: "The ancient Greeks used a 'curse tablet' system to get revenge",
    fact: " This is how it worked. People would write all their dirty, rotten hopes for their enemies on a thin sheet of lead. Think of it as a spell or a bad wish, but with a paper trail. Or...not a paper trail...a lead trail? Then they'd fold it up and bury it in graves or deep wells. Why, you ask? Well, because they believed graves and wells were pathways to the Underworld."
  },

  {
    title:"A famous Greek philosopher reportedly lived in a barrel",
    fact: "I know the housing crisis right now is pretty dire, but imagine living in a barrel. And even worse...doing it by choice. Yeah, the famous Greek philosopher Diogenes of Sinope made that choice. He was known for rejecting wealth and social conventions. And rejecting social conventions is putting it lightly. He didn't just live in a barrel. He also reportedly masturbated in public and walked barefoot through the snow...all because he believed people should live in complete accordance with nature."
  },

  {
    title:"Ancient Greeks used URINE to clean clothes",
    fact: "If you think back to your high school chemistry class, urine contains a chemical called ammonia. And supposedly, ammonia is a pretty good stain remover. As a pet owner, I honestly thought pee caused stains, but I guess it magically gets rid of them, too?"
  },

  {
    title:"Ancient Greeks had professional mourners",
    fact: "Honestly, if someone would pay me to wail in public, I'd be applying for that job tomorrow! But yes, in Ancient Greece, some families would hire women to cry, sing, and dramatically grieve at funerals to honour the dead."
  },

  {
    title: "Ancient Greek doctors had some...peculiar methods",
    fact: "Now you just pop a pill, but back in ancient times, some medical remedies included ingredients like crushed insects, animal fat, herbs, and even more questionable items. he wildest one for me is their use of bloodletting. The Greeks believed illness came from an imbalance of four basic humours: blood, phlegm, black bile, and yellow bile. Bloodletting was meant to restore that balance and bring healing. It involved cutting a vein or using leeches to drain blood from patients until the balance was supposedly restored."
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