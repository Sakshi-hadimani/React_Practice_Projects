import React from 'react';
import axios from "axios";
export default function  Delete({id,onDelete}){
    function deleteStudent(){
        let confirm=window.confirm("Are you sure You want to delete student?");
        if(confirm){
            axios.delete("http://localhost:8085/students/deleteStudent/"+id)
            .then(
                (response)=>{
                    alert("Student deleted successfully");
                    onDelete();
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        }
    }
    return(
        <>
            <button onClick={deleteStudent}>
                Delete
            </button>
        </>
    )
}