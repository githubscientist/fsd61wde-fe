import instance from "./instance";

const postServices = {
    getAllPosts: async () => {
        return await instance.get("/posts");
    },
    createPost: async (post) => {
        return await instance.post("/posts", post);
    },
}

export default postServices;