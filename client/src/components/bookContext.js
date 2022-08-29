import { useContext, createContext, useState } from "react";

const bookContext = createContext(null)

export const useBookContext = () => {
const context = useContext(bookContext)
if(context === undefined)
{throw new Error('app context must be within bookContext Provider');}

return context
}

const BookContextProvider = ({children}) => {
    const [checkOut, setCheckOut] =useState([])
    const [name, setName] =useState([])



    const addToCheckOut = (book) => { 
        const oldCheckOut = [...checkOut, ...name] 

        const newCheckOut = oldCheckOut.concat(book)

        setCheckOut(newCheckOut)

    }

    const returnBook =(id) => {

        const oldCheckOut = [...checkOut]
        const newCheckOut = oldCheckOut.filter((item) => id !== item.id)
        
        setCheckOut(newCheckOut)

    }
    const student = (name) => {
        const oldStudent = [...name]
        const newStudent = oldStudent.concat(name)

        setName(newStudent)
    }

   

    return ( <bookContext.Provider value={{checkOut, addToCheckOut, returnBook, student, name }}>
        {children}
    </bookContext.Provider>
    )
}

export default BookContextProvider;