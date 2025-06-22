import Link from 'next/link';

export default async function NewsArticle({
    params, searchParams
} : {
    params: Promise<{ articleId: string}>;
    searchParams: Promise<{ lang?: "en" | "fr" | "es"}>

}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams; 
    return (
        <div>
            <h1> Article {articleId} </h1>
            <p>Reading in language {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}> Read in English </Link>
                <Link href={`/articles/${articleId}?lang=fr`}> Lire en français </Link>
                <Link href={`/articles/${articleId}?lang=es`}> Leer en español </Link>

            </div>
        </div>
    )
}

// import Link from 'next/link';
// export default async function NewsArticle({ params, searchParams} : {
//     params: Promise<{articleId: string}>;
//     searchParams: Promise<{lang?: "en" | "fr" | "es"}>;

// }){
//     const { articleId } = await params;
//     const { lang = "en" } = await searchParams; 
//     return(
//         <div>
//             <h1>Article {articleId}</h1>
//             <p>Reading in langauge {lang}</p>

//             <div>
//                 <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
//                 <Link href={`/articles/${articleId}?lang=fr`}>Lire en français</Link>
//                 <Link href={`/articles/${articleId}?lang=es`}>Leer en español</Link>
//             </div>
//         </div>
//     )
// }