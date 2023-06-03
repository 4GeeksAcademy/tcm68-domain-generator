const pronouns = [ "Sailor", "Naruto", "Dragon", "Sakura", "OnePiece", ];
  
const adjectives = [ "Eternal","Mystic","Legendary","Magical","Shining",];
  
const nouns = [ "Sword", "Spirit", "Hero", "Star", "Champion", ];
  
const stones = [ "Ruby", "Emerald", "Sapphire", "Amethyst", "Topaz", ];

const endings = [ ".com", ".net", ".org", ".io", ".co", ];
  
 
  function generateDomain() {
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomStone = stones[Math.floor(Math.random() * stones.length)];
    const randomEnd = endings[Math.floor(Math.random() * endings.length)];
  
    const domainName = `${randomPronoun}${randomAdjective}${randomNoun}${randomStone}${randomEnd}`;
    return domainName;
  }

  function generateMultipleDomains(count) {
    for (let i = 0; i < count; i++) {
      const domain = generateDomain();
      console.log(domain);
    }
  }

  generateMultipleDomains(30);