"use client";

import { useState } from "react";

export const ClientComponentOne = ({
    children,
} : {
    children: React.ReactNode;

}) => {
    console.log("ClientComponentOne rendered");

    const [name, setName] = useState("Batman");
    return (
        <div>
            <h1>Client Component Oneeee</h1>
            {children}
        </div>
    );
}