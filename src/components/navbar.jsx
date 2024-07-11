import React, {Component} from "react";
import {Link} from "react-router-dom";
import $ from 'jquery'

class Navbar extends Component {
    state = {
        calculatorHTML: ""
    }

    showComponentHTML = (componentHTML) => {
        if (this.props.isLogin) return componentHTML;
        else return "";
    }

    showUserStatus = () => {
        if (this.props.isLogin) return (
            <React.Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/">{this.props.username}</Link>
                </li>

                <li className="nav-item">
                    <Link onClick={this.handleClickLogout} className="nav-link" to="/logout/">Logout</Link>
                </li>
            </React.Fragment>
        )
        else
            return (
                <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login/">Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/register/">Register</Link>
                    </li>
                </React.Fragment>
            )
    }

    handleClickLogout = () => {
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/calculator/logout/",
            type: "get",
            success: (resp) => {
                if (resp.result === "success") window.location.href = "/";
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">My Web Tools</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {this.showComponentHTML(
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/calculator/">Calculator</Link>
                                    </li>
                                )}

                                {this.showComponentHTML(
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/piano/">Piano</Link>
                                    </li>
                                )}

                            </ul>

                            <ul className={"navbar-nav"}>
                                {this.showUserStatus()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;