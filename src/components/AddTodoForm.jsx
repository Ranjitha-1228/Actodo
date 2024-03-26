import { useState } from "react"

function AddTodoForm(props){
      const activity = props.activityArr
      const setactivity =props.setActlist  
      const[ newactivity,setNewactivity] = useState("")
      function handlechange(event){
           setNewactivity(event.target.value)
      }
      function addact () {
  setactivity([...activity,{id:activity.length+1,activity:newactivity}])
  setNewactivity("")
      }
   
    return(<>
     <div  className="flex flex-col gap-3">
            <h1 className="font-medium text-2xl" >Manage Activites</h1>
            <div>
            <input value={newactivity} onChange={handlechange} type="text"  className="border border-black p-1 " placeholder="New Activity?"></input>
            <button onClick={addact} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
           
        </div>
    </>)
}
export default AddTodoForm