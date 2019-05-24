import React, { Component } from 'react'
import { connect } from 'react-redux'
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2'

//import { addShipping } from './actions/cartActions'
class Recipe extends Component{


    state = {
        date: new Date(),
      }
    
    // componentWillUnmount() {
    //      if(this.refs.shipping.checked)
    //           this.props.substractShipping()
    // }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }
    // to handle checkout
    handleCheckout = (id)=>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
            ];
        const weekDays = [ "Sunday","Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday"
        ]
        let date = this.state.date;
        
       
        if(this.props.addedItems.length != 0){
            Swal.fire({
                
                title: 'Oder Conformation',
                text:"Your oder is scheduled for: "+ 
                weekDays[date.getDay()]
                +" "+date.getDate().toString() 
                + ", " + monthNames[date.getMonth()-1]
                +", "+ date.getFullYear().toString()
                +  " at " + date.getHours().toString()+":"+date.getMinutes()
                +", Total: "+ this.props.total +"$",
                type: "success",
                confirmButtonText: 'Cool'
              })
            this.props.orderDelete();
        }
        
    }
    onChange = date => this.setState({ date })

    render(){
  
        return(
            <div className="container">
            <div className="center">
                <p>Please select your desired shipping time below:</p>
                    <DateTimePicker
                            clearIcon= {null}
                            onChange={this.onChange}
                            value={this.state.date}
                            minDate= {new Date()}
                            />
                    </div>
                <div className="collection">
                    <li className="collection-item">
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div>
                        <button className="waves-effect waves-light btn"   onClick={()=>{this.handleCheckout()}}>Place your order</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        orderDelete: (id)=> {dispatch({type: 'DELTE_ORDERS'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
