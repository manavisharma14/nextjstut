import Link from 'next/link';

export default function F2() {
    return (
        <div>
            <h1>F2</h1>
            <p>This is the F2 page.</p>
            <Link href="/f4">
                Go to F4
            </Link>
        </div>
    );
} 