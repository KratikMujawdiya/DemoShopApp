/* ------------------------Basic------->

>React ek js ki library hai jiska sole purpose hai UI create karna 
>Megical line:React is all about components(Reusable piece of code at the end component is a function in react)
>React component based architecture se bni hoti hai
>component se apn ek custom HTML element create kar rhe hai(Not for interviewer) 
>React se me easily UI create kar sakta hu incomparison to js
>React predefined function hote hai jisse UI create karne me kam time lagta hai incomparison to js
>React=React js org vali website se React pado

>React components are Javascript functions that return markup(HTML)
>React component names must always start with a capital letter,while HTML tags must be lowercase 
>The HTML(markup) syntax you have seen above is called JSX.
>Your component also can't return multiple JSX tags. You have to wrap them into a shared parent like a <div>...</div> or an <>..</> wrapper
>In React, you specify a css class with className. It works the same way as the HTML class attribute ans in react class is a reserved keyword 
>In JSX(javascript xml) code is the combination of HTML and JavaScript
>ReactDom is a package that provides methods for working with the document object model in react application
>React is a single page application hai(Ek html file hai usme hi sare changes dynamically hote hai dusre pages bhi esi ek page me dynamically change hoker bnte hai)
>Dynamic change:Weather app me paragraph tag me kuch nhi dala usme api ki through temperature aa rha tha isko bolte hai dynamic change

>HTML in JavaScript syntax is called JSX(javascript xml)
>components are reusable piece of code 
>why react:reusability,do not repeat yourself(dry),readibility increase,maintainbility increase 
>Kai fse to-Reactjs.org

---------------------Setup

Reactjs.org par gya react par click karke get started par click kiya fir create new react app par click kiya to steps aayi:-
steps to create a new single page react App below

1.Install node js
2.VS code
3.create a new folder ->ReactFolio
4.change directory to ReactFolio
5.npx create-react-app demoshopapp
6.Change directory to demoshopapp
7.npm start

*package.json me me jo 2 dependecies hai 
 "react-dom": "^18.3.1",
"react-scripts": "5.0.1",
yhi react 2 dependencies react ki actual library ko create karte hai
yha react ka version 18.3.1 use ho rha hai
>index.js entry point hai react ka ,index.js is the first file of js that will be execute first
>root:public folder me index.html file ki body me div element pda hai jiski id hai root
>here const root is a element of react aur is react ke root element ke andar app vala component render kar diya

Entry point-index.js in src folder(sabse pehle index.js file load hogi) and index.js pehli js ki file hai jo execute hogi

   Kya jana:---------------------->

   1.Packege.json-->dependecies,Scripts,Versions
   2.src-->app.js,index.css,index.js
   //index.css file kuch bhi nhi hai bas index.js file ke liye css configuration contain karti hai
   3.public-->index.html

   *root.render(..) ek function hai react me jo ki chijo ko render karta hai root par 

   *flow: index.js--->index.html--->root div---->react root bnaya---->render--->app component--->App.js--->HTML(render)

   *react me jo code likh rhe hai vo user friendly code hai vo hume samaj aayega browser ko nhi,to ye userfriendly code browserfriendly(HTML tarha ka)code me convert ho rha hai

  *index.html me body me jo likh hai (<div id="root"></div>) isko replace kar rha hai App vale component se 

  *npm start command react me jo code likha hai use convert karti hai equivalent html code me , equivalent js code me jo browser ko samaj me aayega 

  *so conversion vala kam npm vali comman sambhal rhi hai 
  
  *component:Ek js ki file create karo and function likhdo 

  in startint App.js

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

  Output:pehle Nirma fir agli line me Hello

  After that my App.js ka code

import './App.css';
import Card from './components/Card';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const itemTwoName="SurfExcel";
  return (
    <Card>
    <div>
       <Item name="Nirma">Hello jee ye mera first item hai</Item>
       <ItemDate day="20" month="June" Year="1998"></ItemDate>

       <Item name={itemTwoName}></Item>
       <ItemDate day="22" month="July" Year="1999"></ItemDate>

       <Item name="555"></Item>
       <ItemDate day="24" month="August" Year="2000"></ItemDate>

       <div className="App">
        Hello jee
        </div>
    </div>
    </Card>
  );
}

export default App;


------------------------------------------>props(properties)
  
*/




//Kisi bhi file ko use karne ya link karne ke liye mujhe yha par import karna pad rha hai 
import React from 'react';
import ReactDOM from 'react-dom/client';//ReactDom is a package that provides methods for working with the document object model in react application
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';//It is a package that capture user experience with web page 



//yha root element create kiya
const root = ReactDOM.createRoot(document.getElementById('root'));//root id hai ye public ki index.html file me body me div tag pda hai uski id hai
// ye line root vale element ko fetch karke la rhi hai

//root element ke andar kuch render karna padega UI par dikhane ke liye so:-

root.render(<App />);//root ke andar app val component render kar diya

//pehla component react ka--->App

//App vala component App.js vali file hai

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
