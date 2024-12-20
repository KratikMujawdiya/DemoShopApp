// import './Card.css';

// function Card(props){
//     return <div className='card'>{props.children}</div>;//Ek line ho tab () ki jarurat nhi hai
// }

// export default Card;

//<Card>.......</Card>=Isme ... vala content props.children property se aayega

import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}> {props.children}</div>;
};

export default Card;