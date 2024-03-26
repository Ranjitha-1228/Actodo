function Todoitem(props){
    const activitylistArr = props.activity
    const setlistArr = props.setactivity

    function handledelete(Deleteid){
       // setlistArr([])
       console.log(Deleteid)
      var temparr = activitylistArr.filter(function(item){
        if(item.id === Deleteid){
            return false
        }
        else {
            return true
        }
        
       })
       setlistArr(temparr)
    }
    return(<>
    <div className="flex justify-between">
    <p>{props.index+1}.{props. item.activity}</p>
    <button className="text-red-500" onClick={()=>handledelete(props.id)}>Delete</button>
    
    </div>
  
    </>) 
}
export default Todoitem



