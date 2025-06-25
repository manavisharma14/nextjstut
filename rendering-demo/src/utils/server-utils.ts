import "server-only";
// no client component can/should import this file
export const ServerSideFunction = async () => { 
    console.log('ServerSideFunction called');
    return "Server RESULT"
}