import React, {Component} from "react";
import $ from "jquery";
import Card from "../card";

class LoginView extends Component{
    state = {
        errorMessage: "",
        username: "",
        password: "",
    }

    handleClick = (e) => {
        e.preventDefault();
        // console.log(this.state);
        if (this.state.username.length < 1) this.setState({errorMessage: "username is too short"})
        else if (this.state.password.length < 1) this.setState({errorMessage: "password is too short"})
        else {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/login/",
                type: "get",  // 涉及跨域问题, 先用 get
                data: {
                    username: this.state.username,  // 键的 名字 和 数量 要与后端一致
                    password: this.state.password,
                },
                dataType: "json",
                success: (resp) => {  // 这里指的是请求成功
                    // console.log(resp);  {result: 'success'}
                    if (resp.result === "success") window.location.href = "/";  // resp.xxx xxx要与后端一致
                    else this.setState({errorMessage: resp.result});
                }
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Card cardTitle={"Login Page"}>
                    <div className={"container"}>
                        <div className={"row justify-content-md-center"}>
                            <div className={"col col-sm-3"}>

                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input onChange={e => { this.setState({username: e.target.value}) }} type="text" className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input onChange={e => { this.setState({password: e.target.value}) }} type="password" className="form-control" />
                                    </div>

                                    <div style={{height: "2rem", color: "red"}}>{this.state.errorMessage}</div>

                                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">Login</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        );
    }
}

export default LoginView;