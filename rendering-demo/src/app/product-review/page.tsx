import { Suspense } from "react";
import { Product } from "../components/product";
import { Reviews } from "../components/review";

export default function ProductReview() {
    return (
        <div>
            <Suspense fallback={<div>Loading Product...</div>}>
                <Product />
            </Suspense>
            <Suspense fallback={<div>Loading Reviews...</div>}>
                <Reviews />
            </Suspense>
        </div>
    )
}