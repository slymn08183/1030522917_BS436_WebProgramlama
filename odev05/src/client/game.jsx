import React, {Component} from 'react';
import {Link} from "react-router-dom";

export function errorAccrued(message){
    throw Error(message || "An error accrued!!")
}
export function showCard (id, _this) {
    if(_this === undefined || _this.state === undefined){
        errorAccrued("Instance of Game component is undefined")
    }

    if(!id.includes("_")){
        _this.setState({
            winState: 3,
        })
        errorAccrued("Unrecognized id type!")
    }

    if (_this.state.shownCards < 2){
        _this.state.shownCards++;

        const index = parseInt(id.split("_")[1]);

        _this.setState({
            [id]:"/images/" + _this.state.cards[index]
        })

        if(_this.state.cards[index] === "cat.jpg"){
            _this.setState({
                winState: 1,
            })
            _this.state.shownCards = 5;
        }
        else if( _this.state.shownCards === 2 ){
            _this.setState({
                winState: 2,
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
            winState: 0,
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
        switch (this.state.winState){
            case 0:
                return gamePage(this)
            case 1:
                return winPage(this)
            case 2:
                return losePage(this)
        }
    }
}

const gamePage = (_this) => {
    return (
        <div>

            <img id="img_0" className="card" src={_this.state.img_0} onClick={() => showCard("img_0", _this)}/>
            <img id="img_1" className="card" src={_this.state.img_1} onClick={() => showCard("img_1", _this)}/>
            <img id="img_2" className="card" src={_this.state.img_2} onClick={() => showCard("img_2", _this)}/>

            <div className="message">
                <p id="bottom-text">{_this.state.bottomTexts[0]} </p>
            </div>
        </div>
    );
}
const winPage = (_this) => {
    return (
        <div>

            <img id="img_0" className="card" src="./images/cat.jpg"/>

            <div className="message">
                <p id="bottom-text">{_this.state.bottomTexts[1]} </p>
                <span >Yeniden oynamak için butona tıklayınız.</span>
            </div>
            <p></p>
            <p></p>
            <div className="action">
                <Link className="play" onClick={() => window.location.reload()}>Başla</Link>
            </div>
        </div>
    )
}
const losePage = (_this) => {
    return (
        <div>

            <img id="img_0" className="card" src="/images/dog.jpg" />

            <div className="message">
                <p id="bottom-text">{_this.state.bottomTexts[2]} </p>
                <span >Yeniden oynamak için butona tıklayınız.</span>
            </div>
            <p></p>
            <p></p>
            <div className="action">
                <Link className="play" onClick={() => window.location.reload()}>Başla</Link>
            </div>
        </div>
    )
}