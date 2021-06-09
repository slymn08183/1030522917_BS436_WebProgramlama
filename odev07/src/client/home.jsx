import React, {Component} from 'react';
import { useHistory } from "react-router-dom"

export class Home extends Component {
    constructor(props) {

        super(props);
        this.routeChange = this.routeChange.bind(this)
        this.state = {
            loginText : "",
            usrValue: "",
            pswValue: "",
            users: [
                {usrValue: "admin", pswValue: "admin"}
            ]
        }

    }

    login = (_this) => {
        let flag = false
        _this.state.users.forEach(function (arrayItem) {
            if (arrayItem.usrValue === _this.state.usrValue && arrayItem.pswValue === _this.state.pswValue){
                _this.setState({
                    loginText: "Yönlendiriliyor.."
                })
                flag = true
                _this.routeChange()
            }
        })
        if (!flag){
            _this.setState({
                loginText: "Böyle bir kullanıcı yok! Lütfen kayıt olun"
            })
        }

    }
    register = (_this) => {
        const tmp = {
            usrValue: _this.state.usrValue,
            pswValue: _this.state.pswValue
        }
        _this.setState({
            users : _this.state.users.concat(tmp),
            loginText: "Kullanıcı kayıt edildi!"
        })
        console.log(_this.state.users)
    }

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


                <p className="welcome-text">
                    Ancak öncelikle giriş yapmalısınız.
                </p>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname"  value={this.state.usrValue} onChange={evt => this.updateUsrValue(evt)} required/>
                </div>
                <div>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value={this.state.pswValue} onChange={evt => this.updatePswValue(evt)} required/>

                </div>
                <div>
                    <button type="submit" onClick={() => this.login(this)}>Login</button>

                    <button type="submit" onClick={() => this.register(this)}>Register</button>
                </div>
                <div>
                    {this.state.loginText}
                </div>
            </div>
        );

    }
    routeChange = () =>{
        let path = `game`;
        this.props.history.push(path);
    }
    updatePswValue(evt) {
        this.setState({
            pswValue: evt.target.value
        });
    }
    updateUsrValue(evt) {
        this.setState({
            usrValue: evt.target.value
        });
    }
}
