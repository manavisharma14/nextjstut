function getRandomInt(count: number) {
    return Math.floor(Math.random() * count) + 1;
}

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error('Error loading product details');
    }
    return (
        <div>
            <h1>Product Layout</h1>
            {children}
        </div>
    );
}