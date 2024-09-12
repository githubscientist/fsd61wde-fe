import instance from "./instance";

const postServices = {
    getAllPosts: async () => {
        return await instance.get("/posts");
    }
}

export default postServices;