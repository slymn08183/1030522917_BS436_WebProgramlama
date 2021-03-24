import React from "react"
import ReactDom from "react-dom"
import {showCard,setCards,bottomTexts} from "./cardHandler"

class App extends React.Component{

    constructor(props) {
        super(props);
        setCards()
        this.state = {
            bottomText: bottomTexts[0],
            img_0:"/images/card.jpg",
            img_1:"/images/card.jpg",
            img_2:"/images/card.jpg",
            visibility:"none",
        }
    }

    render() {
        return(
            <div>
                <h2>Kedi Bulmaca</h2>

                <img id="img_0" className="card showCard" src={this.state.img_0} onClick={() => showCard("img_0",this)}/>
                <img id="img_1" className="card showCard" src={this.state.img_1} onClick={() => showCard("img_1",this)}/>
                <img id="img_2" className="card showCard" src={this.state.img_2} onClick={() => showCard("img_2",this)}/>

                <div className="message">
                    <p id="bottom-text">{this.state.bottomText} </p>
                    <span style={{display: this.state.visibility}}>Yeniden oynamak için <a href="index.html">BURAYA</a> tıklayınız.</span>
                </div>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("root"))
