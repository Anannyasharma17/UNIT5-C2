import { useState} from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [state, setState] = useState("show")

  const handleChange =()=>{
    if(state == "add"){
      setState("show")
    }
    else if(state == "show"){
      setState("add")
    }
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={handleChange}>{state==="show" ? "Add Data" : "show Data"}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {state ==="show" ? <ShowStudents/>:<AddStudent/>}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
