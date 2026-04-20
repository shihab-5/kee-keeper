import React, { useContext, useState } from 'react';
import FriendProvider, { friendContext } from '../home/context';

const Time = () => {

      const {timeline}=useContext(friendContext)

//    const click=({type})=>{
    // let fltr=timeline
    const [fltr,click]=useState('all')

  let sortItem= fltr==='all'?timeline: timeline.filter(sortingItem=>sortingItem.checkType===fltr)
//   console.log(sortItem)
//    fltr=[...sortItem]
//    timeline=[...fltr]
//    console.log(fltr)

   

    return (
    <div>
            <div className='my-20 mx-36 flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Timeline</h1>
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort by {fltr} ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>click('Call')}>Call</a></li>
    <li><a onClick={()=>click('Text')}>Text</a></li>
    <li><a onClick={()=>click('Video')}>Video</a></li>
  </ul>
</div>            <div className='flex flex-col gap-4'>
                {
                   <> {sortItem.length===0 && (<h1 className='bg-base-100 font-bold text-5xl text-green-900 px-3 py-20 rounded-2xl text-center'>No items found</h1>)}
            
       {sortItem.map((friend,ind)=>{
                        return (
                        <div key={ind} className='bg-base-100 px-3 py-3 rounded-2xl flex gap-3'>
                   <img src={friend.checkType==='Call'? "/call.png":friend.checkType==='Text'?"/text.png":"/video.png"} className='w-[5%]' alt="" />
                <div className='flex flex-col gap-1.5' >
                       <p><span className='font-bold text-2xl text-green-800'>{friend.checkType}</span> with {friend.name}</p>
                   <p>{new Date().toLocaleString()}</p>
                </div>
                          </div>
                        )
                    })
                    
                }
                </>}
            </div>
        </div>
    </div>
    );
};

export default Time;