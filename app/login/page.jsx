import React from 'react';
import Ticker from '../Components/Ticker';

const LoginPage = () => {
    return (
        <div>
            <h1 className='text-red-700 text-3xl font-bold'>Hello I am Login Page.</h1>
            <Ticker text={'Hello I am Ashraful Islam'}/>
        </div>
    );
};

export default LoginPage;