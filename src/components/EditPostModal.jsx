import React, { useEffect, useState } from 'react';
import PostForm from './PostForm';
import ModalForm from './UI/ModalForm/ModalForm';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import MyTextarea from './UI/textarea/MyTextarea';
import { useFetching } from './hooks/useFetching';
import PostServies from '../API/PostServies';

const EditPostModal = ({ updatedPost, modal, toggleModal, setModal }) => {
    const defaultPost = {
        id: '',
        title: '',
        body: ''
    };

    const [post, setPost] = useState(defaultPost);

    useEffect(() => {
        if (updatedPost) {
            setPost({
                id: updatedPost.id || '',
                title: updatedPost.title || '',
                body: updatedPost.body || ''
            });
        } else {
            setPost(defaultPost);
        }
    }, [updatedPost]);

    const [editPost] = useFetching(async (event, post) => {
        event.preventDefault();

        const response = await PostServies.updatePost(post);
        if (response.status === 200) {
            alert("Post was updated successfully");
        } else {
            console.error("Error:", response.statusText);
            alert("An error occurred while updating a post. Please try again or contact the administrator");
        }
        setModal(false);
    });

    return (
        <ModalForm setVisible={toggleModal} isVisible={modal}>
            <h2>Update post</h2>
            <form onSubmit={(event) => editPost(event, post)}>
                <MyInput
                    type="text"
                    placeholder='title'
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
                <MyTextarea
                    type="text"
                    placeholder='description'
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                />
                <MyButton type="submit">Update post</MyButton>
            </form>
        </ModalForm>
    );
};

export default EditPostModal;
