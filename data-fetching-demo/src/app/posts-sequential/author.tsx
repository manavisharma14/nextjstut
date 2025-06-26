type Author = {
    id: number,
    name: string
};

export async function Author({
    userId 
} : { userId: number}
) {

    await new Promise (resolve => setTimeout(resolve, 1000)); // Simulate a delay
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    return(
        <div className="text-sm text-gray-600">
            Written by: {" "}
            <span className="font-semibold">{user.name}</span>
        </div>
    )
}