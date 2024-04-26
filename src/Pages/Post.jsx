// import React,{useState} from 'react'
// import Qoute from '../Components/Qoute';

// export default function Post() {
//     console.log("this is the post page")
//   const [inputtext, setinputtext] = useState('');
//   const [ownQoutes, setownQoutes] = useState([]);
//   const onchangeHandler=(e)=>{
//      e.preventDefault();
//      setinputtext(e.target.value);
//   }
//   const onclickHandler=()=>{
//     setownQoutes((prev)=>[...prev,inputtext])
//      setinputtext('');
//   }
  
//     return (
//     <div className='bg-slate-300 flex flex-col gap-3 p-4 min-h-screen'>
//         <textarea name="" id="" cols="30" rows="10" placeholder='write ur code' value={inputtext} onChange={onchangeHandler} className='bg-gray-200 border rounded-md p-3 '></textarea>
//        <div className='justify-center items-center flex'>
//        <button onClick={onclickHandler} className='bg-pink-400 p-2 text-black rounded-md border'>add</button>
//        </div>
//         <div>
//             {ownQoutes&&ownQoutes.map((qoute)=>(
//                 <Qoute key={qoute} text={inputtext} author={inputtext.substring(0,10)} />
//             ))}
//         </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import Qoute from '../Components/Qoute'; // Assuming Qoute component displays a quote

export default function Post() {
  console.log("this is the post page");
  const [inputtext, setinputtext] = useState('');
  const [author, setauthor] = useState('');
  const [ownQoutes, setownQoutes] = useState([]);
 
  const authorOnchange=(e)=>{
    e.preventDefault();
    setauthor(e.target.value)
  }
  const onchangeHandler = (e) => {
    setinputtext(e.target.value); // Update input text state
  };

  const onclickHandler = () => {
    const newQuote = inputtext; // Capture current inputtext value
    setownQoutes((prev) => [...prev, newQuote]); // Use newQuote
    setinputtext(''); // Clear input text after adding the quote
  };

  return (
    <div className='bg-slate-300 flex flex-col gap-3 p-4 min-h-screen'>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder='write ur code'
        value={inputtext}
        onChange={onchangeHandler}
        className='bg-gray-200 border rounded-md p-3 '
      ></textarea>
      <input type="text" placeholder='enter author' className='p-1 rounded-sm shadow-black text-black text-md border-2 border-black' value={author} onChange={authorOnchange}/>
      <div className='justify-center items-center flex'>
        <button onClick={onclickHandler} className='bg-pink-400 p-2 text-black rounded-md border'>
          add
        </button>
      </div>
      <div>
        {ownQoutes.length > 0 && ( // Check if there are any quotes
          ownQoutes.map((quote) => (
            <Qoute key={quote} text={quote} author={author} /> // Use quote for text prop
          ))
        )}
      </div>
    </div>
  );
}


