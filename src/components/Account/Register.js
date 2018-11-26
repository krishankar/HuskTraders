import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Step1 from './Step1';
import Step2 from './Step2';
import OTP from './OTP';
import RegisterConfirmation from './RegisterConfirmation';
// import RiceMillRegister from './RiceMillRegister';

class Register extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.type);
        this.state = {
            id: '',
            name:'',
            email:'',
            phone: '',         
            RiceMillSubmitted: false,
            otpVerified: false,
            step1Submitted: false,
            step2Submitted: false,          
            userType: this.props.match.params.type,
        }
        this.onOtpVerified = this.onOtpVerified.bind(this);
        this.onStep1Submitted = this.onStep1Submitted.bind(this);
        this.onStep2Submitted = this.onStep2Submitted.bind(this);       
        // this.onRiceMillSubmitted = this.onRiceMillSubmitted.bind(this);
        
    }

    onOtpVerified(phone) {
        this.setState({
            otpVerified: true,
            phone: phone
        })
    }
    
    // onRiceMillSubmitted() {
    //     this.setState({
    //         RiceMillSubmitted: true
    //     })
    // }
    onStep1Submitted(id,name,email) {
        this.setState({
            step1Submitted: true,
            id: id,
            name:name,
            email:email,
            userType: this.state.userType
        })
    }

    onStep2Submitted() {
        this.setState({
            step2Submitted: true
        })
    }

    render() {

        if (this.state.otpVerified == false) {
            return (<OTP onOtpVerified={this.onOtpVerified} />)
        }

        // else if ((this.state.userType == "RiceMills")&&(this.state.RiceMillSubmitted == false)) {
        //     return (<RiceMillRegister onRiceMillSubmitted={this.onRiceMillSubmitted} userType={this.state.userType} />)
        // }

        else if ((this.state.step1Submitted == false)&&((this.state.userType=="RiceMill")||(this.state.userType=="Agent")||(this.state.userType=="Factory"))){
            return (<Step1 onStep1Submitted={this.onStep1Submitted} userType={this.state.userType} phone ={this.state.phone} />)
        }

        else if ((this.state.step2Submitted == false) && ((this.state.userType === "RiceMill") || (this.state.userType=="Agent" )||( this.state.userType === "Factory"))) {
            return (<Step2 onStep2Submitted={this.onStep2Submitted} id={this.state.id} userType={this.state.userType} />)
        }

        else if((this.state.userType == false) && (this.state.userType ==="RiceMill")||(this.state.userType==="Agent")||(this.state.userType==="Factory")){
            return (<RegisterConfirmation />)            
        }
        
        else {
            return(
                <div>
                    <h1>Registration is not completed</h1>
                </div>
            )
        }
    }
}

export default withRouter(Register);
