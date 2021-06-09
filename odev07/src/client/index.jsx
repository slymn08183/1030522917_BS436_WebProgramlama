import React from "react"
import ReactDom from "react-dom"
import {Game} from "./game";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import {Home} from "./home";

const notFound = () => {
    return (
        <div>
            <h2>Hay aksi!</h2>
            <h3>Sayfa Bulunamadı: 404</h3>
            <p className="welcome-text" >Aradığınız sayfa şuralarda bi yerlerde olacaktı ama bulamadım. </p>
            <p className="welcome-text" >Lütfen daha sonra tekrar deneyiniz.</p>
        </div>
    )
}
class App extends React.Component{

    render() {
        return(
         <HashRouter>
             <Switch>
                 <Route exact path="/game" component={Game}/>
                 <Route exact path="/" component={Home}/>
                 <Route component={notFound}/>
             </Switch>
         </HashRouter>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("root"))
