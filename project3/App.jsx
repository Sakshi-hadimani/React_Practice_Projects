import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  const[city,setCity]=useState("Pune");
  const[car,setCar]=useState("BMW");

  const[student,setStudent]=useState({
    name:"John",
    age:"23",
    city:"new york"
  });
function changeCity(event){
  setCity(event.target.value);
}
  return (
    <>
      <h2>City : {city}</h2>
      <input type="text" onChange={changeCity} />

      <br />
      <br />

      <h2>Car : {car}</h2>
      <input type="text" onChange={(event) => setCar(event.target.value) } />

      <br />
      <br />

      <p>Student Details : </p>
      <span>Name : {student.name}</span>
      <span>Age  : {student.age}</span>
      <span>City : {student.city}</span>

      <input type="text" onChange={function(event){
          setStudent({...student,city:event.target.value})
      }} />
      
    </>
  )
}

export default App
