import React, { createContext } from 'react';

export const friendContext=createContext()
const FriendProvider = ({children}) => {

    const [timeline,setStore]=useState([]);

    const data={
         timeline,
         setStore,
    }
    return (
       <friendContext.Provider value={data}>
        {children}
       </friendContext.Provider>
    );
};

export default FriendProvider;