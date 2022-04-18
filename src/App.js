import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import {useState} from "react"
import "./App.css"

function App() {
  const [state,setState] = useState("display")

  const handleChange = () => {
    if(state==="form"){
      setState("display")
    }
    else if(state==="display"){
      setState("form")
    }
  }

  return (
    <div className="App">
      <button className="togglebtn" onClick={handleChange}>
        {state==="display"?"Add a new student ":"Go to students list"}
      </button>
      {state==="display"?<ShowStudents />:<AddStudent/>}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;