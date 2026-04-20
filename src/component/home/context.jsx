import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const friendContext=createContext()
const FriendProvider = ({children}) => {


    const [timeline,setStore]=useState([])

    const handle=(markedFriend,type)=>{
        const exist=timeline.find(friend=>(friend.id===markedFriend.id && friend.checkType==type ))
        if(exist){
            toast.error('already exist')
            return;
        }
        else{
        
            const newItem ={
                ...markedFriend,
                checkType:type
            }
            markedFriend.checkType=type
            // markedFriend.time=Date.now()
            setStore([...timeline,newItem])
          toast.success(`${markedFriend.checkType} added successfully for ${markedFriend.name}`)
        }
    // console.log(timeline)
    }

    const data={
         timeline,
         setStore,
         handle,
        //  handleText,
        //  handleVideo,
    }
    return (
       <friendContext.Provider value={data}>
        {children}
       </friendContext.Provider>
    );
};

export default FriendProvider;