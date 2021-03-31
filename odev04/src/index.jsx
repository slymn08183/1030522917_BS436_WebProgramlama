import React from "react"
import ReactDom from "react-dom"
import {Game} from "./game";

class App extends React.Component{

    render() {
        return(
            <div>
                <Game/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("root"))
