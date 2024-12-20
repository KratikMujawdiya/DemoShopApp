/*
   import './Item.css'; 
   function Item(){
     return(
      <p className="nirma">Nirma</p>//iske css file bnane ke liye className=nirma diya
     )
   }
   export default Item;  
*/
/*---------------------->After that code was

import './Item.css'
function Item(props) {
  const ItemName="Nirma";
  return(<div><p className="nirma">{ItemName}</p></div>
  );
}

//Yha par hum HTML ka code return kar rhe hote hai par ye JSX hota hai na ki HTML
*/ 

//-------------------------->After that my code is:-

import './Item.css'
function Item(props) {
  const ItemName=props.name;
  return(
  <div>
  <p className="nirma">{ItemName}</p>
  {props.children}
  </div>);
  //Yha par hum HTML ka code return kar rhe hote hai
}

//App.js me <Item name={response[0].itemName}>Hello jee me hu aapka first item</Item> me Hello jee me hu aapka first item ye props.children se print hoga 

//<Item name="Nirma">Kratik</Item>=isme If i want to print "Kratik" then i will use props.children 

export default Item;//I have to make sure export component when create component