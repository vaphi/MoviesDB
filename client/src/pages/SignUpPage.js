import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Auth from "../utils/auth";

class SignUpPage extends Component {

    state = {
        email: "",
        password: "",
        password1: "",
        redirect: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleConfirmPassword = (event) => {
        if (event.target.value !== this.state.password) {
            alert('error');
            this.setState({password1: event.target.value})
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.password !== this.state.password1){
            alert("the passwords does not match")
            return false
        }
        
        if(this.state.email && this.state.password) {
            API.newUser({
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                if (res.status===200) {
                    this.setState({
                        redirect: true
                    })
                }
            })
            .catch(err => console.log(err));
        }
    }

    handleLogin = () => {
        if (this.state.redirect) {
            const data = {
                email: this.state.email,
                password: this.state.password
            }
    
            fetch('/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => {
                    //server returning "JWT ...", so we need to split off the token and then create it 
                    // and then run it through login function in Auth
                    const token = response.token.split(' ')[1];
                    Auth.login(token);
                })
                .catch(error => console.error('Error:', error))
        }
    }

    render() {
        if (this.props.token) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="signupDiv">
                <div className="signupSec">
                <h1 id="pagetitle">Sign Up</h1>
                <br/>
                <br/>
                {this.handleLogin()}
                <form onSubmit={this.handleSubmit}>
                    <input id="inputBox" required type="text" name="email" placeholder="Email" onChange={this.handleInputChange} />
                    <br/>
                    <br/>
                    <input id="inputBox" required type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
                    <br/>
                    <br/>
                    <input id="inputBox" required type="password" name="password1" placeholder="Confirm Password" onChange={this.handleInputChange} />
                    <br/>
                    <br/>
                    <br/>
                    <button class="btn btn-warning"> Sign Up </button>
                </form>
                </div>
            </div>
        )
    }
}

export default SignUpPage;