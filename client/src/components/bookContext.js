import { useContext, createContext, useState, useEffect } from "react";

const bookContext = createContext(null)

const checkOutLocalStorage = JSON.parse(localStorage.getItem('checkout') || "[]")
// const kidsLocalStorage = JSON.parse(localStorage.getItem('kids') || "[]")
export const useBookContext = () => {
const context = useContext(bookContext)
if(context === undefined)
{throw new Error('app context must be within bookContext Provider');}

return context
}

const BookContextProvider = ({children}) => {
    const [checkOut, setCheckOut] =useState(checkOutLocalStorage)
    // const [name, setName] =useState(kidsLocalStorage)
    const [kid, setKid] = useState([{fullName:""}])


    const addToCheckOut = (book) => { 
        const oldCheckOut = [...checkOut] 
        const newCheckOut = oldCheckOut.concat(book) 
        // const oldStudent = [...name,] 
        // const newStudent = oldStudent.concat(kid)
        setCheckOut(newCheckOut)
        // setName(newStudent)

    }
    // const student = (kid) => { 
    //     const oldStudent = [...name,] 
    //     const newStudent = oldStudent.concat(kid)

    //     setName(newStudent)

    // }

    const returnBook =(id) => {

        const oldCheckOut = [...checkOut]
        const newCheckOut = oldCheckOut.filter((item) => item.id !== id)
        
        setCheckOut(newCheckOut)

    }
   
    useEffect(()=> {
        localStorage.setItem('checkout', JSON.stringify(checkOut))
    
      },[checkOut])
    // useEffect(()=> {
    //     localStorage.setItem('kids', JSON.stringify(name))
    
    //   },[name])
   

    return ( <bookContext.Provider value={{checkOut, addToCheckOut, returnBook, setKid }}>
        {children}
    </bookContext.Provider>
    )
}

export default BookContextProvider;