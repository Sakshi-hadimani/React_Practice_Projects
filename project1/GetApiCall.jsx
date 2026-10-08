import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import Delete from './Delete';
export default function GetApiCall(){
    const[student,setStudents]=useState([]);
    const[showTable,setShowTable]=useState(false);
    const[stud,setStudent]=useState({
      id:"",
      name:"",
      age:"",
      email:"",
      city:""
    })
  //   const[loading,setLoading]=useState(false);
    useEffect(()=>{
  //     setLoading(true)
  //       axios("http://localhost:8085/students/getAllStudents")
  //           .then(
  //               (response) => {
  //                   console.log(response.data);
  //                   setStudents(response.data);
  //               }
  //           )
  //           .catch(
  //               (error)=>{
  //                   console.log(error)
  //               }
  //           )
  //           .finally(()=>{
  //             setLoading(false)
  //           })
     getData();
    },[]);

  function getData(){
    axios("http://localhost:8085/students/getAllStudents")
            .then(
                (response) => {
                    console.log(response.data);
                    setStudents(response.data);

                    setShowTable(true);
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
            
  }

  function editStudent(selectedStudent){
      setStudent(selectedStudent);
  }

   function handleChange(event){
      setStudent({
        ...stud,
      [event.target.name]:event.target.value
      })
   }

   function studentUpdate(event){
      event.preventDefault();
      axios.put("http://localhost:8085/students/updateStudent/"+stud.id,stud)
      .then(
        (response)=>{
          alert("student updated successfully");
          setStudent({
            id:"",
            name:"",
            age:"",
            email:"",
            city:""
          })
        }
      )
      .catch(
        (error)=>{
          console.log(error);
        }
      )
   }
    return(
        <>
        <h2>Update Student</h2>
        <form onSubmit={studentUpdate}>
          <input type="text"
          name="id" 
          placeholder='Enter student id'
          value={stud.id}
          readOnly/>
          <br />
          <br />
          <input type="text" 
          name="name"
          placeholder='Enter student name'
          value={stud.name}
          onChange={handleChange}/>

          <button type='submit'>Update Student</button>
        </form>
        <br />
        <br />
            { <button onClick={getData} style={{backgroundColor:"yellowgreen"}}>get data</button> }
      
      <br />

      {
        showTable &&  
        <table border={2} >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>email</th>
            <th>city</th>
            <th>Action</th>

          </tr>  
        </thead>
        <tbody>
          {
            student.map((stud)=>
               <tr key={stud.id}>
                  <td>{stud.id}</td>
                  <td>{stud.name}</td>
                  <td>{stud.age}</td>
                  <td>{stud.email}</td>
                  <td>{stud.city}</td>
                  <td><button onClick={()=>{editStudent(stud)}}>Edit</button>
                    <Delete id={stud.id} onDelete={getData}></Delete>
                  </td>

               </tr>
            )
          }  
        </tbody>  
      </table> 
      
      }
        
           
        </>
    )
  }