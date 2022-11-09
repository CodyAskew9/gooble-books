import React, { useState } from 'react'
import { useBookContext } from "./bookContext";

const NotFound = () => {
    const { notFoundCheckOut} = useBookContext()
    const [student,  setStudent] = useState({notFoundInfo: ""})
    const handleSubmit = (e) => { notFoundCheckOut(student)
      
   
      e.preventDefault()
    }
    const handleChange = (e) => {
      setStudent({notFoundInfo: e.target.value})
     
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
              <input type="text" name="Enter Your Name" placeholder='Enter your name and title' value={student.kid} onChange={handleChange} />
              <input type="submit"  />
                </form>   
    </>
  )
}

export default NotFound