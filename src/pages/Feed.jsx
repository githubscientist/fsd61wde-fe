import { useLoaderData } from "react-router-dom";

const Feed = () => {

    const posts = useLoaderData();

    return (
        <div className="container mt-5">
            <h1>Feed</h1>
            <div className="row">
                {posts.map(post => (
                    <div key={post._id} className="col-8 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <strong className="card-title text-small">{post.user && post.user.name}</strong>
                                <p className="card-text">{post.description}</p>
                                <p className="card-text text-muted small">{post.createdAt.substring(0, 10)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feed;