import React, {Component} from "react";
import {Navigate, Route, Routes} from "react-router-dom"
import $ from 'jquery';

import Navbar from "./navbar";
import HomeView from "./home/home-view";
import CalculatorView from "./calculator/calculator-view";
import PianoView from "./piano/piano-view";
import RegisterView from "./register/register-view";
import LoginView from "./login/login-view";
import NotFoundView from "./not-found/not-found-view";

class App extends Component {
    state = {
        isLogin: false,
        username: "",
    };

    componentDidMount() {
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/calculator/get_status/",
            type: "get",
            success: (resp) => {
                // console.log(resp);
                if (resp.result === "login") {
                    this.setState({
                        isLogin: true,
                        username: resp.username
                    })
                } else this.setState({
                    isLogin: false,
                    username: "",
                });
            }
        })
    }


    render() {
        // console.log(this.state.isLogin)
        return (
            <React.Fragment>
                <Navbar isLogin={this.state.isLogin} username={this.state.username}/>
                <div className={"container"}>
                    <Routes>
                        <Route path={"/"}
                               element={<HomeView/>}
                        />
                        <Route path={"/calculator/"}
                               element={this.state.isLogin ? <CalculatorView/> : <Navigate replace to={"/login/"}/>}
                        />
                        <Route path={"/piano/"}
                               element={this.state.isLogin ? <PianoView/> : <Navigate replace to={"/login/"}/>}
                        />
                        <Route path={"/register/"}
                               element={this.state.isLogin ? <Navigate replace to={"/"}/> : <RegisterView/>}
                        />
                        <Route path={"/login/"}
                               element={this.state.isLogin ? <Navigate replace to={"/"}/> : <LoginView/>}
                        />
                        <Route path={"*"}
                               element={<NotFoundView/>}
                        />
                    </Routes>
                </div>
            </React.Fragment>
        )
    }
}

export default App;