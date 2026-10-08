import react from "react"
import axios from "axios"
import GetApiCall from './GetApiCall'
import Post from "./Post"
function App() {
 

  return (
    <>
      <h1>Welcome To Full Stack Project</h1>
      <GetApiCall></GetApiCall>
      <br />
      <br />
      <Post></Post>
      
    </>
  )
}

export default App
