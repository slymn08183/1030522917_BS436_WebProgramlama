import React, {Component} from 'react';

export function errorAccrued(message){
    throw Error(message || "An error accrued!!")
}
export function showCard (id, _this) {
    if(_this === undefined || _this.state === undefined){
        errorAccrued("Instance of Game component is undefined")
    }

    if(!id.includes("_")){
        _this.setState({
            bottomText: _this.state.bottomTextIndex = 3,
            visibility: ""
        })
        errorAccrued("Unrecognized id type!")
    }

    if (_this.state.shownCards < 2){
        _this.state.shownCards++;

        const index = parseInt(id.split("_")[1]);

        _this.setState({
            [id]:"/images/" + _this.state.cards[index]
        })
        //document.getElementById(id).src = "/images/" + cards[index];

        if(_this.state.cards[index] === "cat.jpg"){
            _this.setState({
                bottomText: _this.state.bottomTextIndex = 1,
                visibility: ""
            })
            _this.state.shownCards = 5;
        }
        else if( _this.state.shownCards === 2 ){
            _this.setState({
                bottomText: _this.state.bottomTextIndex = 2,
                visibility: ""
            })
        }
    }
}

export function setCards (_this){
    shuffleArray(_this.state.cards)
}

export function shuffleArray (array){
    if(!Array.isArray(array)){
        errorAccrued()
    }
    array.sort(() => Math.random() - 0.5);
}

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img_0:"/images/card.jpg",
            img_1:"/images/card.jpg",
            img_2:"/images/card.jpg",
            visibility:"none",
            bottomTextIndex: 0,
            bottomTexts : [
                "Kedi kartını bulmak için kartın üzerine tıklamalısın.",
                "Kazandın!!! ",
                "Kaybettin!!!:( ",
                "Beklenmedik bir hata oluştu! "
            ],
            shownCards : 0,
            cards : ["dog.jpg","dog.jpg","cat.jpg"]
        }
        setCards(this)
    }

    render() {
        return (
            <div>
                <h2>Kedi Bulmaca</h2>

                <img id="img_0" className="card" src={this.state.img_0} onClick={() => showCard("img_0", this)}/>
                <img id="img_1" className="card" src={this.state.img_1} onClick={() => showCard("img_1", this)}/>
                <img id="img_2" className="card" src={this.state.img_2} onClick={() => showCard("img_2", this)}/>

                <div className="message">
                    <p id="bottom-text">{this.state.bottomTexts[this.state.bottomTextIndex]} </p>
                    <span style={{display: this.state.visibility}}>Yeniden oynamak için <a href="index.html">BURAYA</a> tıklayınız.</span>
                </div>
            </div>
        );
    }
}
