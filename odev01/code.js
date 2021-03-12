window.onload = function WindowLoad(event) {
    setCards()
}

let cards = ["dog.jpg","dog.jpg","cat.jpg"]
let shownCards = 0

function setCards() {
    shuffleArray(cards)
}

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}

function showCard (id){
 if (shownCards < 2){
     shownCards++;

     const index = parseInt(id.split("_")[1]);
     document.getElementById(id).src = "images/" + cards[index];
     if(cards[index] === "cat.jpg"){
         document.getElementById("winID").style = "";
         document.getElementById("alanID").style = "display: none";
         shownCards = 5;
     }
     else if( shownCards ===2 ){
         document.getElementById("loseID").style = "";
         document.getElementById("alanID").style = "display: none";
     }

 }

}
