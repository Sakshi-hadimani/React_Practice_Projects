import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // function show(event) {
  //   //alert("Button is clicked" +event.target);
  //   alert("Button is clicked "+event.type);
  // }


  function show(name1,name2){
    alert("Good evening "+name1 + " and "+name2);
  }

  return (
    <>
      <h1>Events in React</h1>
      <button onClick={()=>show("Sakshi","Shruti")}>Click Here</button>

      <br />

      <button onDoubleClick={()=>{
        alert("Good Morning! How are you?")
      }}>Double Click Here</button>

      <br />

      <button onMouseOver={()=>{
        alert("Mouse is over a button")
      }}>Mouse Over</button>

      <input type="text" placeholder='Enter Details' onChange={()=>{
        console.log("Value is changed");
      }} />
    </>
  )
}

export default App
