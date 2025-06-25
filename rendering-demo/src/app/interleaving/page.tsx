import { ServerComponentOne } from "@/app/components/server-component-one"
import { ClientComponentOne } from "../components/client-component-one"
export default function InterleavingPage() {
    return (
        <div>
            <h1>Interleaving Page</h1>
            <ClientComponentOne>
                <ServerComponentOne/>
            </ClientComponentOne>
        </div>
        
    )
}