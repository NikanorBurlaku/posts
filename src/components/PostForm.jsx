import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { useFetching } from '../components/hooks/useFetching';
import PostServies from '../API/PostServies';

const PostForm = ({ setModal, sendForm }) => {


    const [post, setPost] = useState({ title: '', body: '' });



    return (

        <form onSubmit={(event) => sendForm(event, post, setModal)}>
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
            <MyButton type="submit">Add new</MyButton>
        </form>
    );
};

export default PostForm;