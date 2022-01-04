const cards = [
    {
        name: "Agente",
        str: 1,
        qty: 2
    },
    {
        name: "Soldado",
        str: 2,
        qty: 8
    },
    {
        name: "Cabo",
        str: 3,
        qty: 7
    },
    {
        name: "Sargento",
        str: 4,
        qty: 5
    },
    {
        name: "Subtenente",
        str: 5,
        qty: 5
    },
    {
        name: "Tenente",
        str: 6,
        qty: 5
    },
    {
        name: "Capitão",
        str: 7,
        qty: 3
    },
    {
        name: "Major",
        str: 8,
        qty: 2
    },
    {
        name: "Coronel",
        str: 9,
        qty: 1
    },
    {
        name: "General",
        str: 10,
        qty: 1
    },
    {
        name: "Mina",
        str: Infinity,
        qty: 6
    }
];

function deckMount(deck1, deck2){
    for(var i=0 ; i<11 ; i++){
        let count = cards[i].qty;
        for(let n=0 ; n<count ; n++){
            deck1.push({name: cards[i].name, str: cards[i].str});
            deck2.push({name: cards[i].name, str: cards[i].str});
        }        
    }
}

function shuffle(deck) {
    let currentIndex = deck.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
  
    return deck;
}

function cutDeck(deck){
    deck = [deck.slice(0,15), deck.slice(15,30), deck.slice(30,45)];
    return deck;
}

let deckPlayer = [];
let deckMachine = [];
let deckPlayerWinners = [];
let deckMachineWinners = [];


deckMount(deckPlayer, deckMachine);
shuffle(deckPlayer);
shuffle(deckMachine);
deckPlayer = cutDeck(deckPlayer);
deckMachine = cutDeck(deckMachine);

let playerSeletedDeck = deckPlayer[0];
let machineSeletedDeck =  deckMachine[Math.floor(Math.random() * 3)];

function combat(deck1, deck2){
    while(deck1.length>0 && deck2.length>0){
        
    }
}