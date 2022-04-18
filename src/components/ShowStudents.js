
import { useState, useEffect } from "react";
import "../App.css"

export const ShowStudents = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        getData()
    }, []);

    const getData = ()=>{
        fetch("localhost:8080/students").then((res)=>(res.json())).then((data)=>{
            console.log(data)
            setData(data)
        })
    }

    const handleSort = (val, ascending = true)=>{
        const sorting = data.sort((a, b)=>{
            if(ascending){
                return a-b
            }
            else{
                return b-a
            }
        })
        setData([...sorting])
    }

    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort" onClick={()=> handleSort()} >sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}
            {data.map((student)=>{
                return (
                    <tr className="row">
                    <td className="first_name">{student.first_name}</td>
                    <td className="last_name">{student.last_name}</td>
                    <td className="email">{student.email}</td>
                    <td className="gender">{student.gender}</td>
                    <td className="age">{student.age}</td>
                    <td className="tenth_score">{student.tenth_score}</td>
                    <td className="twelth_score">{student.twelth_score}</td>
                    <td className="preferred_branch">{student.preferred_branch}</td>
                  </tr>
                )
            })}
           
          </tbody>
        </table>
      </div>
    );
  };