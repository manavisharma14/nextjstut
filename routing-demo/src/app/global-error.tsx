"use client";

import "./globals.css"

export default function GlobalError(){
    return(
        <div className="flex flex-col items-center justfy-center min-h-screen">
            <div className="bg-white shadow rounded px-4 py-3 text-red-950">
                <h1 className="text-2xl font-bold">Something went wrong</h1>
                <button onClick={() => window.location.reload()} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Refresh
                </button>
            </div>
        </div>

    )
}