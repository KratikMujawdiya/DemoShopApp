/* 
>React ek js ki library hai jiska sole purpose hai UI create karna 
>Megical line:React is all about components(Reusable piece of code at the end component is a function in react)
>React component based architecture se bni hoti hai
>component se apn ek custom HTML element create kar rhe hai(Not for interviewer) 
>React se me easily UI create kar sakta hu incomparison to js
>React predefined function hote hai jisse UI create karne me kam time lagta hai incomparison to js
>React=React js org vali website se React pado

steps to create a new single page react App below
/*
1.Install node js
2.VS code
3.create a new folder ->ReactFolio
4.change directory to ReactFolio
5.npx create-react-app demoshopapp
6.Change directory to demoshopapp
7.npm start
*/
/*
   Entry point-index.js in src folder(sabse pehle index.js file load hogi) and index.js pehli js ki file hai jo execute hogi

   Kya jana:---------------------->

   1.Packege.json-->dependecies,Scripts,Versions
   2.src-->app.js,index.css,index.js
   //index.css file kuch bhi nhi hai bas index.js file ke liye css contain karti hai
   3.public-->index.html

   flow:index.js->index.html->root div->react root->render->App component->App.js->render( HTML)

   //react code-user friendly->browser-friendly 

   js ke andar class ek reserved keyword hai that's why hum yha class ki jagah className use karte hai

   index.js file const root+render vala code kyo chal rha hai kyoki ye js nhi actually me ye ek jsx(javascript xml format)

   jsxme javascript ke andar xml ka use hota hai

   npm start command react me jo code likha hai use convert karti hai equivalent html code me , equivalent js code me jo browser ko samaj me aayega 

   so conversion vala kam npm vali comman sambhal rhi hai 

   
   *Item tag me text me content ko print karana hai to props.children property ka use karna padega */

/* 
>React components are Javascript functions that return markup(HTML)
>React component names must always start with a capital letter,while HTML tags must be lowercase 
>The HTML(markup) syntax you have seen above is called JSX.
>Your component also can't return multiple JSX tags. You have to wrap them into a shared parent like a <div>...</div> or an <>..</> wrapper
>In React, you specify a css class with className. It works the same way as the HTML class attribute 
>In JSX(javascript xml) code is the combination of HTML and JavaScript
*/

//-------------------------------->props(properties)

//---------->App.js code

/* import './App.css';
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



*/


