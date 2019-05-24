import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logOUT} from './actions/cartActions'



class LoggedIn extends Component {
    //to remove the item completely
    handleLogout = ()=>{
        this.props.logOUT();
        localStorage.setItem("email", "null");
        localStorage.setItem("user", "null");
        }
    render() {
        return (
            
            <div className="text-center pt-5">
                <h2>Account</h2>
                <h3>You are logged in as {this.props.user} </h3>
                <p>Your current email adress is: {this.props.email}</p>
                <button  onClick={()=>{this.handleLogout()} } className="waves-effect waves-light btn orange ">LOG OUT</button>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.currentUser,
        currentEmail: state.currentEmail
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        logOUT: ()=>{dispatch(logOUT())},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoggedIn)