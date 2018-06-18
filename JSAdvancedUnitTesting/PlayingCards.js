function makeCard(face,suit){
    let  validFaces=['2','3','4','5','6','7','8','9','10','J','Q','A','K'];
    let  validSuits=['H','S','D','C'];
    if(!validFaces.includes(face)){
        throw new Error("Invalid face");
    }
    if(!validSuits.includes(suit)){
        throw new Error("Invalid suit");
    }
    let card={
        face:face,
        suit:suit,
        toString:()=>{
            let cards={
                "S":"\u2660",
                "H":"\u2665",
                "D":"\u2666 ",
                "C":"\u2663"
            }
            return `${card.face}${cards[card.suit]}`
        }
    }
    return card;
}