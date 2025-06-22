"use client";

import './globals.css';

import { useState } from 'react';

interface WrapperProps {
    children: React.ReactNode;
}

const ErrorSimulator = ({
    message = "An error occurred",
} : {
    message?: string;
}) => {
    const [error, setError] = useState(false);

    if(error){
        throw new Error(message);
    }

    return (
        <button title="Simulate Error" className='bg-red-950 text-red-500 rounded p-1 leading-none font-semibold cursor-pointer text-sm' onClick={() => setError(true)}>
            Simulate Error </button>
    )
};



export const ErrorWrapper = ({ children }: WrapperProps) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
        <div className='bg-white shadow rounded px-4 py-3 text-red-950'>
        <ErrorSimulator message='Simulates error in root layout' />
        </div>
        {children}
        </div>
    );
}