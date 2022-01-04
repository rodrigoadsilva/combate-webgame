const cards = [
    {
        tipo: "Agente",
        forca: 1,
        qtd: 2
    },
    {
        tipo: "Soldado",
        forca: 2,
        qtd: 8
    },
    {
        tipo: "Cabo",
        forca: 3,
        qtd: 7
    },
    {
        tipo: "Sargento",
        forca: 4,
        qtd: 5
    },
    {
        tipo: "Subtenente",
        forca: 5,
        qtd: 5
    },
    {
        tipo: "Tenente",
        forca: 6,
        qtd: 5
    },
    {
        tipo: "Capitão",
        forca: 7,
        qtd: 3
    },
    {
        tipo: "Major",
        forca: 8,
        qtd: 2
    },
    {
        tipo: "Coronel",
        forca: 9,
        qtd: 1
    },
    {
        tipo: "General",
        forca: 10,
        qtd: 1
    },
    {
        tipo: "Mina",
        forca: Infinity,
        qtd: 6
    }
]

function deckMount(){
    for(var i=0 ; i<11 ; i++){
        let count = cards[i].qtd;
        for(let n=0 ; n<count ; n++){
            deck1.push(cards[i].tipo);
            deck2.push(cards[i].tipo);
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
    
}

let deck1 = [];
let deck2 = [];

deckMount();