/*
   in startint App.js----------------------------->

  import <./App.css>
  import Item from './components/Item';

  function App(){
     return (
        <div className="App">
          <Item></Item>
          <p>Hello jee</p>
        </div>
     )
  }
  export default App;


  After that my code in App.js----------------------->
 
  import <./App.css>
  import Item from './components/Item';
  import ItemDate from '/.components/ItemDate';
  function App(){
     return (
        <div className="App">
          <Item></Item>
          <ItemDate></ItemDate>
          <p>Hello jee</p>
        </div>
     )
  }
  export default App;

After that my code in App.js----------------------->

import <./App.css>
import Item from './components/Item';
import ItemDate from '/.components/ItemDate';

function App() {
  const itemTwoName="SurfExcel";
  return (
    <div>
       <Item name="Nirma"></Item>//Here name is property
       <ItemDate day="20" month="June" Year="1998"></ItemDate>

       <Item name={itemTwoName}></Item>//I can also use {itemTwoName} in the place "SurfExcel" 
       <ItemDate day="22" month="July" Year="1999"></ItemDate>

       <Item name="Tide"></Item>
       <ItemDate day="24" month="August" Year="2000"></ItemDate>

       <div className="App">
        Hello jee
        </div>
    </div>
  );
}

After that my code in App.js----------------------->

import <./App.css>
import Item from './components/Item';
import ItemDate from '/.components/ItemDate';

function App() {
 const response=[
   {
     itemName:"Nirma",
     itemDate:"20",
     itemMonth:"June",
     itemYear:"1998"
   },
   {
     itemName:"SurfExcel",
     itemDate:"22",
     itemMonth:"July",
     itemYear:"1999"
   },
   {
     itemName:"Tide",
     itemDate:"24",
     itemMonth:"August",
     itemYear:"2000"
   }
 ];

  return (
    <div>
       <Item name={response[0].itemName}>Hello jee me hu aapka first item</Item>//Hello jee me hu aapka first item Item tag me props.children se print hoga
       <ItemDate day={response[0].itemDate} month={response[0].itemMonth} Year={response[0].itemYear}></ItemDate>

       <Item name={response[1].itemName}></Item>
       <ItemDate day={response[1].itemDate} month={response[1].itemMonth} Year={response[1].itemYear}></ItemDate>

       <Item name={response[2].itemName}></Item>
       <ItemDate day={response[2].itemDate} month={response[2].itemMonth} Year={response[2].itemYear}></ItemDate>

       <div className="App">
        Hello jee
        </div>
    </div>
  );
  
}

After that my code in App.js----------------------->

import <./App.css>
import Item from './components/Item';
import ItemDate from '/.components/ItemDate';

function App() {
 const response=[
   {
     itemName:"Nirma",
     itemDate:"20",
     itemMonth:"June",
     itemYear:"1998"
   },
   {
     itemName:"SurfExcel",
     itemDate:"22",
     itemMonth:"July",
     itemYear:"1999"
   },
   {
     itemName:"Tide",
     itemDate:"24",
     itemMonth:"August",
     itemYear:"2000"
   }
 ];

  return (
    <Card> 
        <div>
             <Item name={response[0].itemName}>Hello jee me hu aapka first item</Item>//Hello jee me hu aapka first item Item tag me props.children se print hoga
             <ItemDate day={response[0].itemDate} month={response[0].itemMonth} Year={response[0].itemYear}></ItemDate>

             <Item name={response[1].itemName}></Item>
             <ItemDate day={response[1].itemDate} month={response[1].itemMonth} Year={response[1].itemYear}></ItemDate>

             <Item name={response[2].itemName}></Item>
             <ItemDate day={response[2].itemDate} month={response[2].itemMonth} Year={response[2].itemYear}></ItemDate>

             <div className="App">
              Hello jee
             </div>
        </div>
    </Card>
  );
  
}


*/


import React from 'react';

import NewProduct from './components/NewProduct';

import Products from './components/Products';



//p1,p2,p3,p4 products are Objects
//React me event handling props ke dwara hoti hai aur event ko handling karne ke liye props sare "On" se start hote hai

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Surf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2)
     },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    }
  ];

  function printProductData(data){
    console.log("I am inside APP.js")
    console.log(data);
  }

  return (
    <div>
      <NewProduct pranay={printProductData}/>
      <Products items={products}/>
    </div>
  );
}

export default App;//isko index.js me import/use kiya hai
