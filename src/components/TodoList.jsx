import Todoitem from "./Todoitem";

function TodoList(props) {
    
     const activityList = props.activityArr
     const setActivitylist = props.setActlist
    return (<>
        <div className="bg-[#8272DA] border rounded-md flex-grow p-2">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {
               activityList.length ===0?<p>You haven't added anything yet</p>:""
            }
            {
                activityList.map(function (item, index) {
                    return <Todoitem  id={item.id} activity={activityList} setactivity={setActivitylist} item={item} index={index}></Todoitem>
                })
            }

            
        </div>
    </>)
}
export default TodoList