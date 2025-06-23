export const dynamic = "force-static";
export const revalidate = 10; // Revalidate every 60 seconds
export async function GET(){
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}