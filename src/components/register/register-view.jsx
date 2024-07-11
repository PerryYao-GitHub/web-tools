import React, {Component} from "react";
import $ from 'jquery';
import Card from "../card";

class RegisterView extends Component{
    state = {
        username: "",
        password: "",
        confirmedPassword: "",
        errorMessage: "",
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.username.length < 3) this.setState({errorMessage: "username must have 3 characters at least"});
        else if (this.state.password.length < 3) this.setState({errorMessage: "password must have 3 characters at least"});
        else if (this.state.password !== this.state.confirmedPassword) this.setState({errorMessage: "please repeat your password correctly"});
        else {
            // console.log("success")
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/register/",
                type: "get",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirm: this.state.confirmedPassword,  // 键的 名字 和 数量 要与后端一致
                },
                dataType: "json",
                success: (resp)=> {
                    // console.log(resp);  {result: '用户名已存在'}
                    if (resp.result === "success") window.location.href = "/";
                    else this.setState({errorMessage: resp.result});
                },
                error: () => {
                    console.log("failed")
                }
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                <Card cardTitle={"Register Page"} cardSubtitle={"Input your personal information here ..."}>

                    <div className={"container"}>
                        <div className={"row justify-content-md-center"}>
                            <div className={"col col-sm-3"}>

                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input onChange={e => {
                                            this.setState({username: e.target.value})
                                        }} type="text" className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input onChange={e => {
                                            this.setState({password: e.target.value})
                                        }} type="password" className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="confirmed-password" className="form-label">Confirm your password</label>
                                        <input onChange={e => {
                                            this.setState({confirmedPassword: e.target.value})
                                        }} type="password" className="form-control"/>
                                    </div>

                                    <div style={{height: "2rem", color: "red"}}>{this.state.errorMessage}</div>

                                    <button onClick={this.handleClick} type="submit" className="btn btn-primary">Login
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>

                </Card>
            </React.Fragment>
        );
    }
}

export default RegisterView;