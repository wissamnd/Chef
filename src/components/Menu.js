import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 class Menu extends Component{
    handleClick = (id,title)=>{
        this.props.addToCart(id);
        toast(
            <h6 style={{color: "#ff7357"}}>{title} is added to cart</h6>,
            {containerId: 'A'}
        );
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id,item.title)}}><i className="material-icons">add</i></span>
                        </div>
                        <div className="card-content">
                            <span className="card-title brown-text">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>{item.time}min|{item.labels}</b></p>
                            <br/>
                            <p><i>Price: {item.price}$</i></p>
                        </div>
                 </div>

            )
        })

        return(
            <div>
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
                 <div className="container">
                <h3 className="center">Menu for 22 Apr to 26 Apr</h3>
                <p className="text-center text-dark" style={{fontSize:'30px'}}><i>Cook new recipes every week!</i></p>
                <div className="box">
                    {itemList}
                </div>
                 </div>
            </div>
           
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu)