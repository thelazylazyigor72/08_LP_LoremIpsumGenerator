import React, { useState } from 'react';
import data from './data';

function App() {
  //state for count - thats for ruled component and to count how many elements to show based on input
  const [count,setCount] = useState(0)
  //initially - nothing, but based on count we will set text w/ needed amount of elements of array
  const [text,setText] = useState([])
  
  //handle submit function
  const handleSubmit = (e) => {
    //first of we do not need to target-blank, so preventdefault actions
    e.preventDefault()
    //notice that count from input will be string and we actually parsing it, 
    //also variable just for comfort
    let amount = parseInt(count)
    //case when <=0
    if (count <= 0 ) {
      amount = 1
    }
    //case when count more than elements in data, its just what decided, if it was like 10 elements, we will say 10 and etc
    if (count > 8) {
      amount = 8
    }
    //setting state value w/ amount lengthed array
    setText(data.slice(0,amount))
  }
  //notice how we make input based on state
  //just populate state text variable on page
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum ?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input type='number' name='amount' id='amount' value={count} 
        onChange={(e) => setCount(e.target.value)}/>
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item,index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
