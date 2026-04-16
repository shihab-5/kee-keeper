import React from 'react';
import { useLoaderData } from 'react-router';

const Detail = () => {
    const friend=useLoaderData();
    console.log(friend)
    return (
        <div>
        <h1>here the details</h1>    
        </div>
    );
};

export default Detail;