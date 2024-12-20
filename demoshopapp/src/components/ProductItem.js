import React, { useState } from 'react';//useState ek react hook hai
//React hook kuch utility function hai jiske dwara tum different kind of chije kar sakte ho
//useState ek utility function hai jisko use karke me state ko handle karne vala hu
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  const [title, setTitle] =  useState(props.title);
  //usestate() ke bracket me jis value se initialize karna hai us value ko likhna hai 
  //Jab const [title, setTitle] =  useState(props.title); run hoga to title sabse pehle props.title se initialize hoga  

  
  // React me event handling props ke dwara hoti hai aur event ko handling karne ke liye props sare "On" se start hote hai

  function clickHandler() {
    //title = "Popcorn"; isse title ki value change hogi, UI change nhi hoga Agar UI change karna hai to state ka concept use karna padega
    setTitle("Popcorn");
    console.log("button clicked");
  }

  //The state is a built-in React object that is used to contain data or information about the component. 
  //A component's state can change over time; whenever it changes, the component re-renders.

  return (
        <Card className='product-item'>
          <ProductDate date={props.date} />
          <div className='product-item__description'>
            <h2>{title}</h2>
          </div>
          <button onClick={clickHandler}>Add to Cart</button>
        </Card>
  );
}
//Without state we try to change UI by changing the value of variable then UI does not change, If you want change UI then you will have to use "State"
//clickHandler ke bad bracket lagaya to reload karne par bhi apne aap function call chali jayegi isliye clickHandler ke bad bracket ka use nhi karte hai
//React dom ko single time render karti hai
//React declarative approach par based hai jha par target set btate ho ki karna kya hai uske bad react khud hi sambhal leta hai
//State change per component instant bases hoti hai 

export default ProductItem;
