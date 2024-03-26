import Card from "./Card";
import Header from "./Header"
import TodoContainer from "./TodoContainer";

import {useLocation} from "react-router-dom"
function Landing() {
    const  data  = useLocation();
    return (
      <>
        <div className="bg-black p-16">
          <div className="bg-[#EFEFEF] p-10 border rounded-md"  >
            <Header users={data.state.user}/>
            <div className="flex justify-between gap-7 my-5 flex-wrap">
              <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
              <Card bgcolor={"#ca524e"} title={"March 20"} subtitle={"4:11"} />
              <Card bgcolor={"#ca8201"} title={"Built Using"} subtitle={"React"} />
            </div>
            <TodoContainer/>
          </div>
        </div>
      </>
    );
  }
  
  export default Landing;