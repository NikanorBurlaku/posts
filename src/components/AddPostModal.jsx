import React, { useState } from 'react';
import PostForm from './PostForm';
import ModalForm from './UI/ModalForm/ModalForm';
import PostServies from '../API/PostServies';
import { useFetching } from './hooks/useFetching';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const AddPostModal = ({ modal, toggleModal, setModal }) => {

    const [post, setPost] = useState({ title: '', body: '' });
    const [addNewPost] = useFetching(async (event) => {
        event.preventDefault();
        const response = await PostServies.addNewPost(post);
        if (response.status === 200) {

            alert("Post was added successfully")
        } else {
            console.error("Error:", response.statusText);
            alert("An error occurred while adding a new post. Please try again or contact the administrator");
        }

        setModal(false);
    })

    return (

        <ModalForm setVisible={toggleModal} isVisible={modal}>
            <h2>Add new post</h2>
            <form onSubmit={(event) => addNewPost(event, post, setModal)}>
                <MyInput
                    type="text"
                    placeholder='title'
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
                <MyInput
                    type="text"
                    placeholder='description'
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                />
                <MyButton type="submit">Edit post</MyButton>
            </form>
        </ModalForm>
    );
};

export default AddPostModal;
