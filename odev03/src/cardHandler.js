
let cards = ["dog.jpg","dog.jpg","cat.jpg"]
let shownCards = 0
export const bottomTexts = [
    "Kedi kartını bulmak için kartın üzerine tıklamalısın.",
    "Kazandın!!! ",
    "Kaybettin!!!:( ",
    "Beklenmedik bir hata oluştu! "
]

export function showCard(id, _this){
    if (shownCards < 2){
        shownCards++;
        if(!id.includes("_")){
            _this.setState({
                bottomText: bottomTexts[3],
                visibility: ""
            })
            throw "Unrecognized id type!";
        }
        const index = parseInt(id.split("_")[1]);

        _this.setState({
            [id]:"/images/" + cards[index]
        })
        //document.getElementById(id).src = "/images/" + cards[index];

        if(cards[index] === "cat.jpg"){
            _this.setState({
                bottomText: bottomTexts[1],
                visibility: ""
            })
            shownCards = 5;
        }
        else if( shownCards === 2 ){
            _this.setState({
                bottomText: bottomTexts[2],
                visibility: ""
            })
        }
    }
}

export function setCards(){
    shuffleArray(cards)
}

export function shuffleArray (array) {
    if(!Array.isArray(array)){
        throw "Not an array!"
    }
    array.sort(() => Math.random() - 0.5);
}

