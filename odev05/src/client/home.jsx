import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div>
                <h2>Kedi Bulmaca</h2>
                <p className="welcome-text">
                    Kart oyununa hoş geldiniz!
                </p>
                <p className="welcome-text">
                    Bu oyunda kazanmak için karşınıza gelen 3 adet kartın içerisinden kedi resmi olanı bulmaya çalışmalısınız!
                </p>
                <p className="welcome-text">
                    Kedi resmini bulmanız için 2 hakkınız bulunur!
                </p>
                <div className="action">
                    <Link className="play" to={"/game"}>Başla</Link>
                </div>
            </div>
        );
    }
}
