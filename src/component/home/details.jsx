import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { FaBell } from "react-icons/fa";
import { IoArchive } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdText } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { friendContext } from './context';


const Detail = () => {
    const friend=useLoaderData();

const {name,picture,bio,tags,status,email,next_due_date,goal,days_since_contact}=friend

  const {handle}=useContext(friendContext)
    return (
        <div className='grid grid-cols-5 grid-rows-7 gap-3 w-[70%] mt-20 mx-auto rounded-2xl'>
           <div className="col-span-2 row-span-4 flex flex-col py-7 gap-2.5 items-center bg-white rounded-2xl">
            <img src={picture} className='w-[25%] rounded-full' alt="" />
            <p className='font-bold text-2xl'>{name}</p>
            <div className='flex gap-3'>
                  {
                    tags.map((tag,ind)=>{
                        return<p className='bg-green-200 rounded-full py-1 px-2 font-bold' key={ind}>{tag}</p>
                    })
                 }
               </div>
                 <p className={`bg-green-400 rounded-full py-1 px-2 font-bold text-white ${status==='overdue'?"bg-red-700":"bg-green-700"}
                 ${status==='almost due'?"bg-lime-500":"bg-green-700"}`}>{status}</p>
                 <p className='italic text-gray-600 text-center'>{bio}</p>
                <p className='text-gray-500'>Email:{email}</p>
           </div>
           <div className="col-span-1 row-span-2 gap-2.5 flex flex-col bg-base-100 rounded-2xl items- justify-center">
            <p className='font-bold text-4xl text-green-900 text-center'>{days_since_contact}</p>
            <p className='text-2xl text-center'>day since contact</p>
           </div>
           <div className="col-span-1 row-span-2 flex gap-2.5 flex-col bg-base-100 rounded-2xl items- justify-center">
            <p  className='font-bold text-4xl text-green-900 text-center'>{goal}</p>
            <p className='text-2xl text-center'>Goals(days)</p>
           </div>
           <div className="col-span-1 row-span-2 flex gap-2.5 flex-col bg-base-100 rounded-2xl items- justify-center">
            <p  className='font-bold text-4xl text-green-900 text-center'>{next_due_date}</p>
            <p className='text-2xl text-center'>next due</p>
           </div>
           <div className="col-span-3 row-span-2 flex justify-between items-center bg-base-100 rounded-2xl py-3 px-5">
            <div className='flex flex-col gap-3 items-center justify-center'>
                <p className='text-3xl font-bold text-green-800'>relationship goal</p>
            <p className='text-2xl text-gray-700'>connect every <span className='font-bold'>{goal} days</span></p>
            </div>
            <button className='btn font-bold'>Edit</button>
           </div>
           <div className="h-full col-span-2 row-span-2 flex flex-col gap-7">
            <div className=" btn bg-base-100 rounded-2xl"><FaBell /> Snooze 2 weeks</div>
           <div className=" btn bg-base-100 rounded-2xl"><IoArchive /> Archive</div>
           <div className="btn bg-base-100 rounded-2xl text-red-700"><AiFillDelete /> Delete</div>
           </div>
        
           <div className="col-span-3 row-span-2 bg-base-100 flex flex-col gap-3 justify-between p-6">
            <p className='font-bold text-2xl justify-center'>Quick Check-In</p>
            <div className='grid grid-cols-3 gap-5'>
               <div className='bg-base-300'>
                <button onClick={()=>handle(friend,'Call')} className='flex flex-col gap-2 py-2.5 px-6 font-bold text-2xl bg-base-300 text-center '><LuPhoneCall /> Call</button>
               </div>
               <div className=' bg-base-300'>
                <button onClick={()=>handle(friend,'Text')} className='flex flex-col gap-2 py-2.5 px-6 font-bold text-2xl bg-base-300 text-center '><IoMdText /> Text</button>
               </div>
               <div className=' bg-base-300'>
                <button onClick={()=>handle(friend,'Video')} className='flex flex-col gap-2 py-2.5 px-6 font-bold text-2xl bg-base-300 text-center '><IoVideocamOutline /> Video</button>
               </div>
            </div>
           </div>
        </div>
    );
};

export default Detail;