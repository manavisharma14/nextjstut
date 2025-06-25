export const dynamicParams = false;
export async function generateStaticParams() {
    const products = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ]
    return products
}

export default async function ProductDetailsPage({ 
    params 
}: {
    params: Promise<{id: string}>
}) {
    const { id } = await params;
    console.log("Product ID:", id);
    return (
        <h1 className="text-3xl font-bold text-red-400">Product { id } details rendered at { new Date().toLocaleTimeString() }</h1>

    )


} 