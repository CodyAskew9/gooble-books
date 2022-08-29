import { useContext, createContext, useState } from "react";

const bookContext = createContext(null)

export const useBookContext = () => {
const context = useContext(bookContext)
if(context === undefined)
{throw new Error('app context must be within bookContext Provieder');}

return context
}

const BookContextProvider = ({children}) => {
    const [checkOut, setCheckOut] =useState([])


    const addToCheckOut = (book) => { 
        const oldCheckOut = [...checkOut] 

        const newCheckOut = oldCheckOut.concat(book)

        setCheckOut(newCheckOut)

    }

    const returnBook =(id) => {

        const oldCheckOut = [...checkOut]
        const newCheckOut = oldCheckOut.filter((item) => item.id !== id)
        
        setCheckOut(newCheckOut)

    }

    return ( <bookContext.Provider value={{checkOut, addToCheckOut, returnBook}}>
        {children}
    </bookContext.Provider>
    )
}

export default BookContextProvider;