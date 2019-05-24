
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CartD from './CartDialog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Navbar extends Component {

  state = {
    open: false,
  };
  handleClickOpen = () => {
    if(this.props.items.length >0){
      this.setState({ open: true });
    }else{
      console.log(localStorage.getItem("user"))
      toast(
        <h6>Cart is empty</h6>,
        {containerId: 'A'}
    );
    }
    
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };

  // in case checkout is pressed close the dialog box
  handleCheckout = () => {
    this.setState({ open: false });
  };

    render() {
      
        let itemList = this.props.items;
        let loginState = "Login"
        if(this.props.user != null && this.props.user !="null"){
            loginState = "My Account"
        }
        
        console.log(itemList);
        return(
            <div className="NavBar ">
             <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                containerId={'A'}  />
            <nav className="navbar navbar-expand-lg navbar-light px-5 gb-white">
            <Link className="navbar-brand" to="/" style={{fontSize : "40px"}}>{this.props.CompanyName}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/menu" style={{fontSize : "20px"}} className= "nav-link">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" style={{fontSize : "20px"}}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="login" className= "nav-link" style={{fontSize : "20px"}}>{loginState}</Link>
            </li>
            <li className="nav-item">
            <button onClick={this.handleClickOpen} className="CartB">
            <div id ='test'>
            <span id="numberOfItemsAdded">{itemList.length}</span>
            <i className="fas fa-box-open shoppingChart" style={{fontSize : "20px"}}></i>
            </div>
            </button>
            </li>
            
          </ul>
            </div>
            </nav>
           
            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Cart"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            </DialogContentText>
            <CartD/>

          </DialogContent>
          <DialogActions>
            <button onClick={this.handleClose} className="btn btn-secondary ActionButton">
              Continue
            </button>
            <Link to= "/cart" onClick={this.handleCheckout} className="btn btn-secondary ActionButton">
              Checkout
            </Link>
          </DialogActions>
        </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        user: state.currentUser
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Navbar)

