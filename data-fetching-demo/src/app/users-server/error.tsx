// error handling components should be client components
"use client";
import { useEffect } from "react";



export default function ErrorFallback( { error } : { error: Error }) {
    useEffect(() => {
        console.log(`An error occurred: ${error.message}`);

    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-red-100 text-red-800 p-4 rounded-md shadow-md">
                <h1 className="text-xl font-bold">An error occurred</h1>
                <p className="mt-2">Please try again later.</p>
            </div>
        </div>
    )
}