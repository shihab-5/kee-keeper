import React, { Suspense } from 'react';
import { IoIosPersonAdd } from "react-icons/io";
import Friends from './home/friends';

const Banner = () => {
    return (
       <>
        <div className='flex flex-col gap-5 items-center pt-16 bg-base-300 '>
            <h1 className='text-5xl font-bold text-emerald-800'>Friends to keep close in your life</h1>
            <h3 className='text-gray-800'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</h3>
            <button className='btn btn-info bg-emerald-800 text-base-100 font-bold'><IoIosPersonAdd /> Add a Friend</button>
        </div>
    <Suspense fallback={<h1 className='text-center font-black text-7xl my-20'>Loading...</h1>}>
                <Friends></Friends>
    </Suspense>
       </>
    );
};

export default Banner;