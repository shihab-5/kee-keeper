import React from 'react';
import { IoIosPersonAdd } from "react-icons/io";

const Banner = () => {
    return (
        <div className='flex flex-col gap-5 items-center mt-16'>
            <h1 className='text-5xl font-bold text-emerald-800'>Friends to keep close in your life</h1>
            <h3 className='text-gray-800'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</h3>
            <button className='btn btn-info bg-emerald-800 text-base-100 font-bold'><IoIosPersonAdd /> Add a Friend</button>
        </div>
    );
};

export default Banner;