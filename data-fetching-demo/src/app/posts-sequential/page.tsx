import { Suspense } from "react";
import { Author} from "./author";
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export default async function PostsSequential() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();


    if(!posts){
        return <div className="p-4">No posts found.</div>;
    }

    const filteredPosts = posts.filter((post) => post.id % 10 === 1);

    return(
        <div className="p-4 space-y-4">
            <h1 className="text-3xl font-bold text-red-400">Blog Posts</h1>
            <div className="space-y-4">
                {filteredPosts.map((post) => (
                    <div key={post.id} className="p-4 border border-gray-300 rounded-md">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        <Suspense fallback={<div>Loading author...</div>}>
                        <Author userId={post.userId}/>
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
    )
}