import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { FacebookButton, FacebookCount } from "react-social";

export class Nav extends Component {
  
    render() {
        return (

            <nav className="Navbar">
                <div className="h1-logo">
                    <h1>
                        <Link to="/">Yummilious!</Link>
                    </h1>
                </div>
                <div className="right-side-nav">
                    <ul>
                        <li>
                            {this.props.user ? (
                                <NavLink activeClassName="selected" to="/">
                                    Welcome Back - {this.props.user.email}
                                </NavLink>
                            ) : (
                                <NavLink activeClassName="selected" to="/sign-up">
                                    Sign up
                                </NavLink>
                            )}
                        </li>
                        <li>
                        <FacebookButton url={"https://yummilicious.cooking "} appId={"510487530062213"}>
                        <img id="shareImage" src={"/images/facebook.png"} alt={"share"}/></FacebookButton>
      </li>
                        <li>
                            {this.props.user ? (
                                <NavLink
                                    activeStyle={{ borderBottom: "1px solid white" }}
                                    to="/login"
                                    onClick={this.props.handleUserLogout}
                                >
                                    Logout
                                </NavLink>
                            ) : (
                                <NavLink
                                    activeStyle={{ borderBottom: "1px solid white" }}
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Nav;
