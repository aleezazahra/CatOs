
import React, { useEffect, useState } from 'react';
import Cat from '../assets/Cat-blurred.png';
import Pfp from '../assets/catpfp.jpeg'
import { useNavigate } from 'react-router-dom';
import DialogBox from '../components/Dialogbox'


const Lockscreen = () => {
  
  
   const navigate = useNavigate();

    const[password,setPassword]=useState<string>("")
     const [time, setTime] = useState(new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  }));
    const[error,setError]=useState<string>("")
    const[showWarning,setWarning]=useState<boolean>(false)
    useEffect(()=>{
      setWarning(true)
    },[])
   const handleLogin = (
    ) => {
  
    if (password === "167") {
      navigate('/home');
    } else if (password === "") {
      setError("Password is required");
    } else {
      setError("Incorrect password");
    }
  };
  const handleKey=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==="Enter"){
      handleLogin()
    }

  }
  
  
  useEffect(() => {

   setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000 * 30)
    }, []);

  return(
    <div className='min-h-screen w-full relative justify-items-center'>
      <DialogBox isOpen={showWarning} onClose={()=>setWarning(false)} />
    <div className="absolute inset-0" style={{ 
        backgroundImage: `url(${Cat})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    
      }}
      >
     

        <div className="items-center flex flex-col">

          <img src={Pfp} className="rounded-full w-30 mt-30" />
           <h2 className="text-white text-2xl mt-5 ">{time}</h2>
          <input type="password" className="bg-white/30 text-black rounded-2xl w-60 mt-10 p-3 " value={password} onChange={(e) => {   setPassword(e.target.value);
            if(error) setError(""); 
          }} placeholder="Enter the password" onKeyDown={handleKey}></input>
          <p className='text-amber-400 mt-2 mr-2 '>Hint: What is 100+67 </p>
          <p className='text-white mt-11'>Press Enter to login</p>




          {error && <p className="text-red-500 text-sm mt-2 font-bold">{error}</p>}
         </div>
        </div>


    </div>
  )
}

export default Lockscreen;