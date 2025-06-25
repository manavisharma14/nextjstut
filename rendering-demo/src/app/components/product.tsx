export const Product = async () => {

    await new Promise(resolve => setTimeout(resolve, 4000)); // Simulate a delay
    return (
        <div>Product</div>
    )
}