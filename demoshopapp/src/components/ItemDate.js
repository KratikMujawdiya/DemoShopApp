/*
import './ItemDate.css';
function ItemDate{
  return(
    <div>
       </div>20<div>
       </div>June<div>
       </div>1998</div>
    </div>
  )
}      
export default ItemDate;
*/

/*--------------------->After that my code 

import './ItemDate.css';

function ItemDate(props){
   const day=20;
   const month=June;
   const year=1998;

//<span>day</span>-Isme agr me day ke sath curly braces nhi lagaunga to day hi print hoga agar mujhe day ki value chahiye to use curly braces=/<span>{day}</span>
//Agar multiple line hai to hum return ke bad rounded bracket ka use karte hai

   return(<div className="mfg-date">
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
   </div>)
}
export default ItemDate;

*/

//---------------->After that my code is:-

import './ItemDate.css';
//class is a reserved keyword in js tha's why i will use className 
function ItemDate(props){
   const day=props.day;
   const month=props.month;
   const year=props.year;
//these is hard code:-,Agar API use karte to hard code nhi hota
//Yha par curly braces me likhkar hard code htake dynamic 
//<span>day</span>-Isme agr me day ke sath curly braces nhi lagaunga to day hi print hoga agar mujhe day ki value chahiye to use curly braces=/<span>{day}</span>
   return(<div className="mfg-date">
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
   </div>)
}
export default ItemDate;