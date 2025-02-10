
import dbConnect from '@/app/lib/dbConnect';
import Post from '@/app/lib/models/Post';

export default async function BlogPost({ params }) {
    const { id } = params;
    await dbConnect();
    console.log("id", id);


    const post = await Post.findById(id);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-8 text-white">
            <article className="max-w-3xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="text-gray-400">
                        <p>By {post.author}</p>
                        <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                    </div>
                </header>

                <div className="prose prose-invert max-w-none">
                    {post.content}
                </div>

                <div className="mt-8 flex justify-center">
                </div>
            </article>
        </div>
    );
}