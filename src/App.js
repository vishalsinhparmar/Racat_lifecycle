import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count,setcount] = useState(0);
 
  useEffect(()=>{
    console.log('componets is render')
  },[count])

  useEffect(()=>{
   const timer = setInterval(()=>console.log("componets is running"),1000)
      
      return ()=>{
         clearInterval(timer)
         console.log('componets is unmounted')
      }
  },[])
  return (
    <>
      <p>counts :{count}</p>
      <button onClick={()=>setcount(count+1) }>button +</button>
    </>
  );
}

export default App;
