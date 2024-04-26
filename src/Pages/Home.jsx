import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Qoute from '../Components/Qoute';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    console.log("this is the home jsx")
    const [Qputes, setQputes] = useState([]);
    console.log(Qputes);
    const [Loading, setLoading] = useState(true);
    const navigate= useNavigate();
    const gettheqoutes=async()=>{
        try{
            const data=await axios.get("http://localhost:3000/all");
            console.log("this is the useEffect")
            console.log(data.data);
            setQputes(data.data.qoutes);
            console.log(Qputes)
            setLoading(false);
        }catch(err){
            console.log(err);
        }
       }
    const gotoPostPage=()=>{
        navigate('/post');
    }
    useEffect(()=>{
        gettheqoutes()
    },[])
    // useEffect(()=>{
    //     gettheqoutes();
    // },[Qputes])
    if(Loading){
        return (
            <div>
            <div>Loading..</div>
            <Button onclick={gotoPostPage}/>
            </div>
         )
    }
  return (
    <div className='bg-blue-600 min-h-screen'>
        {/* <h1>these are the Qputes for today</h1> */}
       
         <div className='flex flex-col gap-3 p-4'>
            {Qputes.length>1&&Qputes.map((q)=>(
                <Qoute key={q._id} author={q.author} text={q.text}/>
            ))}
         </div>
         <Button onclick={gotoPostPage}/>
    </div>
  )
}
