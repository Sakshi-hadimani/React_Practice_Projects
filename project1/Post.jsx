import React, { useState } from 'react';
import axios from 'axios';
export default function Post(){
    const[student,setStudent]=useState({
        name : "",
        email : "",
        age : "",
        city : ""

    });

    function handleChange(event){
        setStudent({
            ...student,
            [event.target.name]:event.target.value
    })
    }

    

    function addStudent(event){
        event.preventDefault();
        axios.post("http://localhost:8085/students/saveStudent",student)  //Syntax : axios(url,data)
        .then(
            (response) => {
                console.log(response.data);
                alert("Student Added Successfully");
            
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
    }

    function reset(){
        setStudent({
            name : "",
            email : "",
            age : "",
            city : ""

        })
    }
    return(
        <>
        <h2>Insert Details to save Student</h2>
        <form onSubmit={addStudent} onReset={reset}>
            <input type="text" 
            name="name"
            value={student.name}
            onChange={handleChange} placeholder='Enter your name'/>
            <br />
            <br />

            <input type="text"
            name="email"
            value={student.email}
            onChange={handleChange} placeholder='Enter your email' />
            <br />
            <br />

            
            <input type="number"
            name="age"
            value={student.age}
            onChange={handleChange} placeholder='Enter your age'/>
            <br />
            <br />

            
            <input type="text"
            name="city"
            value={student.city}
            onChange={handleChange} placeholder='Enter your city'/>
            <br />
            <br />

            <button type='submit' style={{backgroundColor:"yellowgreen"}}>Add Student</button> &nbsp;&nbsp; ||  &nbsp;&nbsp;
            <button type='reset' style={{backgroundColor:"yellowgreen"}} >Reset Form</button>
        </form>
        </>
        
    )
}