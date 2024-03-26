import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login (props){
    const navigate =  useNavigate()
    const userArr = props.user
    const [Uinput,setUinput] = useState ("")
    const handleUinput = (event) =>{
      setUinput(event.target.value)
    }
    const [Pinput,setPinput] = useState("")
   const handlePinput = (event) =>{
    setPinput(event.target.value )
   }
   const [uresult,setresult] = useState(true)
 
   function check() {
    var userfound = false 
    console.log(userArr)

    userArr.forEach(function(item){
        if(item.username === Uinput && item.password === Pinput){
            console.log("Login checked") 
            userfound = true
            navigate("/landing",{state:{user:Uinput}})
        }   
    })
    if(userfound===false){
      console.log("login failed")
      setresult(false)
    }
   }
 return (
    <div  className="bg-black p-10">

    <div className="bg-[#EFEFEF] p-10">
      <h1 className="text-3xl font-medium">Hey Hi </h1>
      {uresult?<p>I help you manage your activites after you login :) </p>:<p className="text-rose-500">Please Sign Up Before you Login</p>}
      <div className="flex flex-col gap-2">
      <input value={Uinput} onChange={handleUinput}
      className="p-1 w-52 border bg-transparent border-black rounded-md " type="text" placeholder="username"></input>
      <input value={Pinput} onChange={handlePinput}
      className="p-1 w-52 bg-transparent border border-black rounded-md" type="text" placeholder="password"></input>
    
      <button onClick={check} className="bg-[#685bae] w-24  py-1  border rounded-md " >Sign Up</button>
      <p>Don't have an account? <Link to={"/signup"} className="underline">Login</Link></p>
      </div>
  
    </div>
      </div>
 )
}
export default Login
