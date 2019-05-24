
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import React, { Component } from 'react';
import LoggedIn from './LoggedIn'
import { connect } from 'react-redux'
import { signIN} from './actions/cartActions'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {password: ''};
    this.state = {email: ''};
    this.state = {toLogin: false};
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

 

  //the logic after the fields are entered
   handleSubmit =  async () =>{
    let Email = this.state.email;
    let Password= this.state.password;
    await fetch('http://admin.konchef.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        })
      }).then(function(response) {
        return response.json();
      }.bind(this)).then(function(data) {
        if(data.success){
          console.log(data.user.name + " " + data.user.email);
          this.props.signIN(data.user.name,data.user.email);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("user", data.user.name);
        }
      }.bind(this)); 
  }
  // handles any change in password
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  // handels any change in the email 
  handleEmailChange(event) {
    this.setState({email: event.target.value});
    
  }
  render(){
    
    if(this.props.user != null && this.props.user !="null"){
      return(
        <LoggedIn  Name= "Mark" email={this.props.currentEmail}/>
      )
    }
    return (
      <MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 peach-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="orange-text mb-3 pt-3 font-weight-bold">
                    Log in
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput 
                onChange={this.handleEmailChange}
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                />
                <MDBInput
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                  label="Your password"
                  group
                  type="password"
                  validate = "true"
                  containerClass="mb-0"
                />
                
                <MDBRow >
                    <div className="text-center">
                      <button className="waves-effect waves-light btn orange "
                        onClick={()=>{this.handleSubmit()}}
                        >
                        Log in
                      </button>
                   
                    </div>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBRow>
    );
  };
  }
 
  const mapStateToProps = (state)=>{
    return{
        user: state.currentUser,
        currentEmail: state.currentEmail
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        signIN: (name,email)=>{dispatch(signIN(name,email))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)