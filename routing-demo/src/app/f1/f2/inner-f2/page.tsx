import Link from 'next/link';
export default function InnerF2() {
    return (
        <div>
            <h1>Inner F2</h1>
            <p>This is the Inner F2 page.</p>
            <Link href='/f5'>F5</Link>
        </div>
    );
}