import React from 'react';
import loginImg from "../../login.svg";

export class Login extends React.Component {

    constructor(props){
        super(props); 
    }

    render() {
        return (
        <div className="base-container">
            <div className="header">login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <lable htmlFor="username">Username</lable>
                        <input type="text" name="username" placeholder="username" /> 
                    </div>
                    <div className="form-group">
                    <lable htmlFor="password">Password</lable>
                    <input type="text" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
        <button type="submit" className="btn">Login</button>
        </div>
        </div>
        );
    }

}
