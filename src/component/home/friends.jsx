import React, { use } from 'react';
import { Link } from 'react-router';


const data=fetch('/friends.json').then(res=>res.json())
const Friends = () => {
    const friends=use(data)
    console.log(friends)
    return (
        <div className='bg-base-300 pb-16 '>
    <div className='w-[85%] lg:w-[75%] mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-8 shadow-2xs shadow-gray-400'>
            <div className='bg-white rounded-2xl flex flex-col gap-3 py-9'>
                <p className='font-bold text-4xl text-center'>{friends.length}</p>
                <p className='text-center '>total Friends</p>
            </div>
            <div className='bg-white rounded-2xl flex flex-col gap-3 py-9'>
                <p className='font-bold text-4xl text-center'>10</p>
                <p className='text-center '>On Track</p>
            </div>
            <div className='bg-white rounded-2xl flex flex-col gap-3 py-9'>
                <p className='font-bold text-4xl text-center'>6</p>
                <p className='text-center '>Need Attention</p>
            </div>
            <div className='bg-white rounded-2xl flex flex-col gap-3 py-9'>
                <p className='font-bold text-4xl text-center'>12</p>
                <p className='text-center '>Interactions this Month</p>
            </div>
        </div>
        
          <h1 className='m-3 font-bold text-2xl'>Your Friends</h1>

    <div className='grid grid-cols-2 xl:grid-cols-4 lg:gap-9 gap-3 '>

        {
          friends.map((friend,ind)=>{
           const {id,picture,name,tags,next_due_date,status}=friend
           const diff =new Date().getTime() - new Date(next_due_date).getTime();

const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24));
         return(
              <Link to={`/details/${id}`} key={ind} className='flex flex-col bg-base-100 rounded-2xl gap-3 py-4 items-center'>
                 <img src={picture} className='rounded-full w-[30%]' alt="" />
                 <p className='font-bold text-2xl'>{name}</p>
                 <p>{daysAgo}d ago</p>
               <div className='flex gap-3'>
                  {
                    tags.map((tag,ind)=>{
                        return<p className='bg-green-200 rounded-full py-1 px-2 font-bold' key={ind}>{tag}</p>
                    })
                 }
               </div>
                 <p className={`bg-green-400 rounded-full py-1 px-2 font-bold text-white ${status==='overdue'?"bg-red-700":"bg-green-700"}
                 ${status==='almost due'?"bg-lime-500":"bg-green-700"}`}>{status}</p>
              </Link>
        )
      })
      }  
    </div>
    
 </div>         
        </div>

    );
};

export default Friends;