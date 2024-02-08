import axios from "axios";

export default class PostServies {

    static async getAll(limit = 10, skip = 0) {
        skip = (skip - 1) * limit;
        const response = await axios.get("https://dummyjson.com/posts", {
            params: {
                limit: limit,
                skip: skip,
            }
        });
        return response;
    }

    static async getById(id) {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        return response;
    }

    static async addNewPost(post) {
        const response = await axios.post('https://dummyjson.com/posts/add', {
            title: post.title,
            body: post.body,
            userId: 5,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response;
    }

    static async updatePost(post) {

        const response = await axios.put(`https://dummyjson.com/posts/${post.id}`, {
            title: post.title,
            body: post.body,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return response;
    }

    static async deletePost(post) {
        const response = await axios.delete(`https://dummyjson.com/posts/${post.id}`);

        return response;
    }

    static async getComments(limit) {
        const skip = Math.floor(Math.random() * (340 - limit)) + 1;
        const response = await axios.get(`https://dummyjson.com/comments`, {
            params: {
                limit: limit,
                skip: skip,
            }
        });
        return response;
    }
}