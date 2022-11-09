import { useContext, createContext, useState, useEffect } from "react";

const bookContext = createContext(null)

const checkOutLocalStorage = JSON.parse(localStorage.getItem('checkout') || "[]")
const kidsLocalStorage = JSON.parse(localStorage.getItem('name') || "[]")
export const useBookContext = () => {
const context = useContext(bookContext)
if(context === undefined)
{throw new Error('app context must be within bookContext Provider');}

return context
}

const BookContextProvider = ({children}) => {
    const [checkOut, setCheckOut] =useState(checkOutLocalStorage)
    const [name, setName] =useState(kidsLocalStorage)
  


    const addToCheckOut = (book) => { 
        const oldCheckOut = [...checkOut] 
        const newCheckOut = oldCheckOut.concat(book) 
        
        setCheckOut(newCheckOut)
       

    }
    const notFoundCheckOut = (book) => { 
        const oldName = [...name] 
        const newName = oldName.concat(book) 
        
        setName(newName)
       

    }
   
    const returnBook =(title) => {

        const oldCheckOut = [...checkOut]
        const newCheckOut = oldCheckOut.filter((item) => item.book.title !== title)
        
        setCheckOut(newCheckOut)

    }
    const returnBookTwo =(title) => {

        const oldName = [...name]
        const newName = oldName.filter((item) => item.notFoundInfo !== title)
        
        setName(newName)

    }
   
    useEffect(()=> {
        localStorage.setItem('checkout', JSON.stringify(checkOut))
    
      },[checkOut])
    useEffect(()=> {
        localStorage.setItem("name", JSON.stringify(name))
    
      },[name])
   

    return ( <bookContext.Provider value={{checkOut, addToCheckOut, returnBook, returnBookTwo, notFoundCheckOut, name}}>
        {children}
    </bookContext.Provider>
    )
}

export default BookContextProvider;