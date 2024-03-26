import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Sign (props) {
  const navigate = useNavigate()
 const user = props.user
 const setUser= props.set
 const [Uinput,setUinput] = useState("")
 const handleUinput = (event) =>{
    setUinput(event.target.value)
 }
 const [Pinput,setPinput] = useState("")
 const handlePinput =(event) =>{
    setPinput(event.target.value)
 }
 function handleadd () {
   setUser([...user,{username:Uinput,password:Pinput}])
   navigate("/")
   
  
 }
    return ( 
    <div  className="bg-black p-10">

    <div className="bg-[#EFEFEF] p-10">
    <h1 className="text-3xl font-medium">Hey Hi </h1>
    <p>Sign up here :) </p>
     <div className="flex flex-col gap-2">
    <input value={Uinput} onChange={handleUinput}
    className="p-1 w-52 border bg-transparent border-black rounded-md "
     type="text" 
     placeholder="username"></input>
    <input value={Pinput} onChange={handlePinput}
    className="p-1 w-52 bg-transparent border border-black rounded-md"
     type="text" 
     placeholder="password"></input>
   <input 
    className="p-1 w-52 bg-transparent border border-black rounded-md"
     type="text"
      placeholder="Confirm password"></input>
    <button onClick={handleadd} className=" bg-[#FCA201]  w-24  py-1  border rounded-md " >Sign Up</button>
    <p> Already you have an account? <Link to={"/"} className="underline">Login</Link></p>
    </div>

  </div>
    </div>
    )

}
export default Sign  