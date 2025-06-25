import fs from 'fs';
import { ServerComponentTwo } from './server-component-two';
import { ClientComponentTwo } from './client-component-two';
export const ServerComponentOne = () => {
    console.log("ServerComponentOne rendered");

    fs.readFileSync("src/app/components/server-component-one.tsx", "utf-8");
    return (
        <div>
            <h1>Server Component One</h1>
            <ClientComponentTwo />
        </div>
    );
}