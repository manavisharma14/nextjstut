import "client-only"
export const clientSideFunction = () => {
    console.log(`use window object, use localstorage`);
    return "client result";
}