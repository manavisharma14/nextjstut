type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};


type album = {
    userId: number;
    id: number;
    title: string;
};


async function getUserPosts(userId: string){
    await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return res.json();
}


async function getUserAlbums(userId: string){
    await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return res.json();
}


export default async function UserProfile({
    params,
} : {
    params: Promise<{id: string}>
}) {
    const { id } = await params;

    const postsData = getUserPosts(id);
    const albumsData = getUserAlbums(id);

    const [posts, albums] = await Promise.all([postsData, albumsData]);

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-extrabold text-red-400 mb-8"></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Posts</h2>
                    <div className="space-y-4">
                        {posts.map((post: Post) => (
                            <div key={post.id} className="p-4 border border-gray-300 rounded-md">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="text-gray-700">{post.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Albums</h2>
                    <div className="space-y-4">
                        {albums.map((album: album) => (
                            <div key={album.id} className="p-4 border border-gray-300 rounded-md">
                                <h2 className="text-xl font-semibold">{album.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}