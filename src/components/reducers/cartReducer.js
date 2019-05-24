import Item1 from '../../images/item1.JPG'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpeg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpeg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING, DELTE_ORDERS,SIGN_IN,LOG_OUT } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Apricot Ginger Chicken', desc: "with Roasted Green Beans and Jasmine Rice", price:14,img:Item1,serving:2,time: "25",labels : " Egg-free • Eat First"},
        {id:2,title:'Teriyaki Chicken Tenders', desc: "With Jasmine Rice and Green Beans", price:18,img: Item2,serving:2,time: "35",labels : "Eat First"},
        {id:3,title:'Tropical Pineapple Chicken', desc: "with Bell pepper over Ginger Rice",price:20,img: Item3,serving:2,time: "20",labels : " Egg-free • Eat First"},
        {id:4,title:'Mozzarella-Crusted Chicken', desc: "with Blistered Tomatoes and Potato Wedges", price:17,img:Item4,serving:2,time: "30",labels : "Egg-free • Nut-free"},
        {id:5,title:'Apricot Glazed Chicken', desc: "with Lemony Roasted Carrots and Couscous", price:16,img: Item5,serving:2,time: "45",labels : "Child friendly • Eat First"},
        {id:6,title:'One-Pot Cheese Tortelloni', desc: "With Kale and Grape Tomatoes",price:16,img: Item6,serving:2,time: "30",labels : "Nut-free"}
    ],
    currentUser: localStorage.getItem("user"),
    
    currentEmail : localStorage.getItem("email"),
    
    addedItems: [],
    total: 0

}


const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === SIGN_IN){
        return{
            ...state,
            currentUser: action.name,
            currentEmail: action.email

        }
    }
    if(action.type == LOG_OUT){
        return{
            ...state,
            currentUser: "null",
            currentEmail: "null",

        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === DELTE_ORDERS){
        
        let new_items = []
        
        //calculating the total
        let newTotal = 0
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 8
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }

    return state
}

export default cartReducer