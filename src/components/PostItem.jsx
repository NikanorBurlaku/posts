import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostItem = ({ post, remove, setModal, setUpdatedPost }) => {

    const comments = Math.floor(Math.random() * 10) + 1;
    const router = useNavigate();
    return (
        <div className="post">
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
            <div className="buttons">
                <button onClick={() => router(`/posts/${post.id}/${comments}`)} className="open-button">Open</button>
                <button onClick={() => router(`/posts/${post.id}/${comments}`)}
                    className="comment-button">Comments ({comments})</button>
                <button className="update-button" onClick={() => {
                    setModal(true)
                    setUpdatedPost(post)
                }}>Edit</button>
                <button className="delete-button" onClick={() => remove(post)}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;