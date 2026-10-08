import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'

function App() {
  const [student, setStudent] = useState([
    {
      id:1,
      name:"Sidhaarth",
      age:20,
      city:"Pune"
    },

    {
      id:2,
      name:"Swapnil",
      age:22,
      city:"Mumbai"
    },

    {
      id:3,
      name:"Amit",
      age:23,
      city:"PCMC"
    },

    {
      id:4,
      name:"Ritesh",
      age:25,
      city:"kolhapur"
    },

    {
      id:5,
      name:"Sakshi",
      age:20,
      city:"Pune"
    },
]);

function addStudent(){
   const newStudent = {
    id:6,
    name:"Shruti",
    age:27,
    city:"Hubli"
   }

   setStudent([...student,newStudent]);
}

  return (
    <>
      <h1 style={{backgroundColor:"brown",color:"white",textAlign:"center"}}>Rendering Lists With Map</h1>

      <table border={2}style={{border:"2px solid black"}}>
        <thead>
          <tr >
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((stud)=>
              <tr key={stud.id}>
                <td>{stud.id}</td>
                <td>{stud.name}</td>
                <td>{stud.age}</td>
                <td>{stud.city}</td>
              </tr>
            )
          }
          
        </tbody>
      </table>

      <br />
      <br />
      <button onClick={addStudent} style={{backgroundColor:"yellowgreen",color:"white",textAlign:"center"}}>Add Student</button>
    </>
  )
}

export default App
