import { useState } from 'react';
import './ProductForm'

function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        //console.log(event.target.value);
    }
    // set vale function value ko on the spot change nhi karte, vo value ko schedule karte hai so output me kabhi 22 select kerne par 25 dikhayega
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    /* 
       Agar multiple state ko ek sath handle karna hai to useState ke andar as a object pass kar 
       const[fullProductInput, setFullProductInput]=useState({
       title:'',
       date:''
       });
    */


    function submitHandler(event) {
        event.preventDefault();//Agar me title and date fill karke Add product par click karu to empty na ho iske liye preventDefault ka use kiya

        const productData = {
            title:newTitle,
            date:newDate
        };

        //console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    //value={newTitle} likhne se jab title and date me kuch likhkar Add product par click karenge to fir se empty ho jayega
    //UI se linke karne ke liye value={newTitle} kiya
    //Parent child se communicate karta hai using props and chile-> parent se communicate karega using props function


    return (<form onSubmit={submitHandler}>
    <div className='new-product_controls'>
        <div className='new-product_control'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>

        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </div>

    </form>)
}

export default ProductForm;