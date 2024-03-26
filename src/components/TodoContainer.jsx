import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
function TodoContainer(){
    const [activityList, setActivitylist] = useState([
        {
        id: 1,
        activity: "Go for walk"
       },
      {
        id: 2,
        activity: "Go for shower"
      }
    ])
    return(<div>
        <div className="flex gap-5 flex-wrap">
        <AddTodoForm activityArr={activityList} setActlist={setActivitylist}/>
        <TodoList activityArr={activityList} setActlist={setActivitylist}/>
       
        </div>
    </div>)
}
export default TodoContainer