import React from 'react';
import Nav from './page';
import { Outlet } from 'react-router';
import Footer from './footer';

const Home = () => {
    return (
        <div className='bg-base-300'>
    <div>
        <Nav></Nav>
    </div>
        <Outlet></Outlet>
        <Footer></Footer>

        </div>
    );
};

export default Home;