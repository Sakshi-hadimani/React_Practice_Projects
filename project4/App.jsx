import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // const [name, setName] = useState("");
  // const[email,setEmail] = useState("");
  // const[age,setAge] = useState(0);
  // const[course,setCourse] = useState("");

  const[student,setStudent]=useState({
    name : "",
    email : "",
    age : 0,
    course : "",
    gender: ""
  });

  const[submittedStudent,setSubmittedStudent]=useState(null);

  function handleStudentChange(event){
    setStudent({
      ...student,
      [event.target.name] : event.target.value
    })
  }

  function handleSubmit(event){

      if(student.name===""){
        alert("Please enter student name");
        return;
      }
      if(student.email===""){
        alert("Please enter student email");
        return;
      }
      if(student.age===""){
        alert("Please enter student age");
        return;
      }
      if(student.course===""){
        alert("Please enter student course");
        return;
      }
      if(student.gender===""){
        alert("Please enter student gender");
        return;
      }
      event.preventDefault();
      setSubmittedStudent(student);
  }

  function resetForm(){
    
      setStudent({
        name:"",
        email:"",
        age:"",
        course:"",
        gender:""
      });
    
  }
  return (
    <>
      <h2>Forms and controlled components</h2>
      <form onSubmit={handleSubmit} onReset={resetForm}>
      <input type="text"
        name='name'
        placeholder='Enter Name'
        value={student.name} 
        onChange={handleStudentChange} /> <br />

            
      <input type="email"
        name='email'
        placeholder='Enter Email'
        value={student.email} 
        onChange={handleStudentChange} /> <br />

        
      <input type="number"
        name='age'
        placeholder='Enter Age'
        value={student.age} 
        onChange={handleStudentChange}/> <br />

      <select name="course" value={student.course} onChange={handleStudentChange}>
        <option value="">Select Course</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="Node.js">Node.js</option>
      </select>     <br />

      <input type="radio" name="gender" value={"male"} onChange={handleStudentChange} /> Male

      <input type="radio" name="gender" value={"female"} onChange={handleStudentChange} />  Female <br />

      <button type='submit'>Submit</button> &nbsp;&nbsp; ||  &nbsp;&nbsp;
      <button type='reset'>Reset</button>
      </form>


      {
        submittedStudent &&
        <div>
          <h3>Student Details</h3>
          <h3>Name:{student.name}</h3>
          <h3>Email:{student.email}</h3>
          <h3>Age:{student.age}</h3>
          <h3>Course:{student.course}</h3>
          <h3>gender:{student.gender}</h3>
        </div>
      }
    </>
  )
}

export default App
