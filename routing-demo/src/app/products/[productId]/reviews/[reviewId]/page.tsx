// import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';

// function getRandomInt(count : number) {
//     return Math.floor(Math.random() * count) + 1;
// }
export default async function ProductReview({
    params,
} :{
    params: Promise<{productId: string, reviewId: string}>;
}) {
    // const random = getRandomInt(2);
    // if(random === 1){
    //     throw new Error('Error loading product review');
    // }
    const {productId, reviewId} = await params;
    if(parseInt(reviewId) > 1000){
        // notFound();
        redirect('/products');
    }
    return <h1>Review of product {productId} with id {reviewId}</h1>
}