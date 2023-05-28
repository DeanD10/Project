import React, { Component } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Image1 from '../images/log.jpg';



class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fields: { username: '', password: '' },
            username_error:"",
            password_error:"",
            error:""
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            fields: {
                ...this.state.fields,
                [name]: value
            }
        });

    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log("submitted: ", this.state)
        const headers = {
            'Content-Type': 'application/json',
            // 'X-CSRFTOKEN': 'xB2oxeOABNSR10ruS2ehzuNEjVZxGnccOJaMdoICFkewzpIpsfjtOsTR9Upe3BpI'
        }


        axios.post(
            "http://127.0.0.1:8000/api/token/",
            {
                "username": this.state.fields.username,
                "password": this.state.fields.password
            },
            {
                headers: headers
            }).then((response) => {
                console.log("success response -> ", response.data)
                // const {data} = response.data
                localStorage.setItem("token", response.data.access);
                this.setState({error:""})
                this.props.history.push('/home')
            }).catch((error) => {
                this.setState({error:"Please enter valid cred"})
                console.log("error response -> ", error)
            })

    }

    render() {
        const loginPageStyle = {
            position: 'relative',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
        };

        const contentContainerStyle = {
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the background color and opacity
            padding: '20px',
        };

        const headingStyle = {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
        };

        const inputStyle = {
            width: '300px',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
        };
        const { username, password } = this.state.fields;
        return (
            <div>
                <Navbar />

                <div style={loginPageStyle}>
                    <img src={Image1} alt="" style={{ width: '100%', height: 'auto' }} />
                    <div style={contentContainerStyle}>
                        <h1 style={headingStyle}>Login</h1>
                        <form onSubmit={(e) => this.onSubmit(e)}>
                            <div>
                                <input type="text" placeholder="Username" name="username" value={username || ""} onChange={(e) => this.handleInput(e)} style={inputStyle} />
                            </div>
                            {this.state.username_error && <div>{this.state.username_error}</div>}
                            <div>
                                <input type="password" placeholder="Password" name="password" value={password || ""} onChange={(e) => this.handleInput(e)} style={inputStyle} />
                            </div>
                            {this.state.password_error && <div>{this.state.password_error}</div>}
                            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>Login</button>
                            <br />
                            Not yet Registered? Register Now: <Button variant="outlined" size="small" color="inherit" component={Link} to='/register'>Register</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;