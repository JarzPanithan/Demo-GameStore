import React, {Component} from 'react';
import './Main.css';
import {Button} from 'react-bootstrap';
import {MDBAnimation, MDBAlert, MDBCol, MDBContainer, MDBIcon, MDBProgress, MDBRow} from 'mdbreact';
import Toolbar from '../Components/Toolbar';
import Tabs from '../Components/Tabs';
import Footer from '../Components/Footer';

class App extends Component {
    render(){
        return(
            <div className="App">
                <Toolbar/>
                <Tabs/>
                <SignUpForm/>
                <Footer/>
            </div>

        );
    }
}

class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e)=>{
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("The form was submitted with the following data.");
        console.log(this.state);
    }

    render(){
        return(
            <MDBCol md="6">
                <MDBAnimation type="bounce">
                    <h1 className="title"><b>Sign In</b></h1>
                </MDBAnimation>
                <MDBProgress className="my-2" material value={100} color="danger"/>
                <br/>
            <form onSubmit={this.handleSubmit}>
                <MDBIcon icon="envelope" style={{color: "grey"}}/> <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Email</label>
                    <input 
                        type="email" 
                        id="defaultFormRegisterEmailEx" 
                        placeholder="Enter your Email" 
                        className="form-control" 
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                <br/>
                <MDBIcon icon="lock" style={{color: "grey"}}/>  <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Password</label>
                <input 
                    type="password" 
                    id="defaultFormRegisterPasswordEx" 
                    placeholder="Enter your Password" 
                    className="form-control" 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <br/>
                <p><a href="#">Forgot the password?</a></p>
                    <div className="text-center mt-4">
                        <Button variant="success" size="lg">Sign In</Button>
                    </div>
                </form>
            </MDBCol>
        );
    }
}

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            confirm_email: "",
            password: "",
            hasAgreed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e)=>{
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("The form was submitted with the following data.");
        console.log(this.state);
    }

    render(){
        return(
            <div className="App">
                <br/><br/>
                <MDBContainer>
                    <MDBRow>
                        <SignInForm/>
                        <MDBCol md="6">
                            <MDBAnimation type="bounce">
                                <h1 className="title"><b>Sign Up</b></h1>
                            </MDBAnimation>
                            <MDBProgress className="my-2" material value={100} color="danger"/>
                            <br/>
                            <form onSubmit={this.handleSubmit}>
                                <MDBIcon icon="user-circle" style={{color: "grey"}}/> <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Name</label>
                                <input
                                    type="text"
                                    id="defaultFormRegisterNameEx"
                                    placeholder="Enter your Name"
                                    className="form-control" 
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <br/>
                                <MDBIcon icon="envelope" style={{color: "grey"}}/> <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Email</label>
                                <input 
                                    type="email" 
                                    id="defaultFormRegisterEmailEx" 
                                    placeholder="Enter your Email" 
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <br/>
                                <MDBIcon far icon="envelope" style={{color: "grey"}}/> <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">Confirm Email</label>
                                <input
                                    type="email"
                                    id="defaultFormRegisterConfirmEx"
                                    placeholder="Enter Confirm Email"
                                    className="form-control"
                                    name="confirm_email"
                                    value={this.state.confirm_email}
                                    onChange={this.handleChange}
                                />
                                <br/>
                                <MDBIcon icon="lock" style={{color: "grey"}}/> <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Password</label>
                                <input
                                    type="password"
                                    id="defaultFormRegisterPasswordEx"
                                    placeholder="Enter your Password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <br/><br/>
                                <label className="title">
                                    <input type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/> I agree all statements<a href="#"> terms of service</a>
                                </label>
                                <div className="text-center mt-4">
                                    <Button variant="success" size="lg">Sign Up</Button>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                    <br/><br/>
                    <MDBAlert color="warning">
                        You can unsubscribe via the newsletter at any time By creating an account you agree to our Terms of Service and Privacy Policy.
                    </MDBAlert>
                </MDBContainer>
            </div>
        );
    }
}



export default App;
