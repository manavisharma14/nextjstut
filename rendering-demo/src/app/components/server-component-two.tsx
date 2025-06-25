import fs from 'fs';
export const ServerComponentTwo = () => {
    console.log("ServerComponentTwo rendered");

    fs.readFileSync("src/app/components/server-component-two.tsx", "utf-8");
    return (
        <div>
            <h1>Server Component Two</h1>
        </div>
    );
}