"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
    console.log("ClientComponentTwo rendered");

    const [name, setName] = useState("Batman");
    return (
        <div>
            <h1>Client Component Two</h1>
        </div>
    );
}