import { useContext, Context, createContext, useState } from "react";

const bookContext = createContext(null)

export const useBookContext = () => {
const context = useContext(bookContext)
if(context === undefined)
{throw new Error('app context must be within bookContext Provieder');}

return context
}

const BookContextProvider = ({children}) => {
    const [checkOut, setCheckOut] =useState([])


    const addToCheckOut = () => {

    }

    const returnBook =(id) => {

    }

    return ( <BookContext.Provider value={checkOut, addToCheckOut ,returnBook}>
        {children}
    </BookContext.Provider>)
}

export default BookContextProvider;