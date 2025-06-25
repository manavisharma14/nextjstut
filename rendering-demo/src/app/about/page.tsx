import { cookies } from 'next/headers';
export default async function AboutPage(){
    console.log("server component")
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")
    console.log("Theme cookie:", theme);
    return (
      
        <div>About Page {new Date().toLocaleTimeString()} </div>
    )
}