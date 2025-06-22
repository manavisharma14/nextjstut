 import { Metadata } from "next";
 type Props = {
    params: { productId: string }; // ✅ FIXED: no Promise
  };
  
  export function generateMetadata({ params }: Props) {
  
    return {
      title: `Product ${params.productId}`, // ✅ simplified, no await needed
      description: `Details for product ${params.productId}`,
    };
  }
  
  export default function ProductDetails({ params }: Props) {
    return <h1>Details about product {params.productId}</h1>;
  }
  

// type Props = {
//     params: Promise<{ productId: string }>; 
//   };
  
//   export const generateMetadata = async ({ params }: Props ) : Promise<Metadata> => {
//     const id = (await params).productId; 
//     return {
//       title: `Product ${id}`, 
//     };
//   }
  
//   export default async function ProductDetails({ params }: Props) {
//     const productId = (await params).productId; 
//     return <h1>Details about product {productId}</h1>;
//   }
  