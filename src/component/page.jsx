import React from 'react';
import { NavLink } from 'react-router';
import { FaHome,FaClock} from "react-icons/fa";
import { BsGraphDown } from "react-icons/bs";



const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-16">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
        <img src="/logo.png" alt="" />
    </a>
  </div>
  <div className='' >
    <ul className="menu menu-horizontal gap-2.5 ">
     <NavLink to={'/'} className={({isActive})=>isActive?'btn btn-success text-base-100':'btn btn-ghost text-gray-900'}><FaHome />
 Home</NavLink>
     <NavLink to={'/timeline'} className={({isActive})=>isActive?'btn btn-success text-base-100':'btn btn-ghost text-gray-900'}><FaClock />
Timeline</NavLink>

     <NavLink to={'/starts'} className={({isActive})=>isActive?'btn btn-success text-base-100' :'btn btn-ghost text-gray-900'}><BsGraphDown />
 Starts</NavLink>

    </ul>
  </div>
</div>
   
        </div>
    );
};

export default Nav;