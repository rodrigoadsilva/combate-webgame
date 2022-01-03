cards = [
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

function deckMount(cards){
    for(var i=0 ; i<45 ; i++){
        for(var n=0 ; n<cards[i].qtd ; n++){
            deck.push(cards[i].tipo);
        }        
    }
}

let deck = []