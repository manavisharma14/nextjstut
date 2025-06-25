"use client";

import { useState } from 'react';
export default function Dashboard(){
    const [name, setName] = useState("");
    console.log("dashboard client component")
    return (
        <div>
            
            <h1>Dashboard</h1>
            <p>This is a server component.</p>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}