import { useState } from "react"
import Login from "./components/Login"
import Sign from "./components/Sign"
import Landing from "./components/Landing"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

 
function App() {
    const [userArr,setUserarr] = useState([
        {            username:"ranjitha",
            password:"123"
        }
    ])
return (<>
<BrowserRouter>

<Routes>
<Route path='/' element={<Login user={userArr} set={setUserarr}/>}></Route>
<Route path="/signup" element={<Sign user={userArr} set={setUserarr}/>}></Route>
<Route path="/landing" element={<Landing/>}></Route>
</Routes> </BrowserRouter></>)
}

export default App