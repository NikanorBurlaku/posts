
import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, remove, setModal,setUpdatedPost }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдены!
            </h1>
        )
    }
    return (
        <main className="posts__container">

            {posts.map((post, index) =>

                <PostItem 
                key={post.id} 
                post={post} 
                index={index} 
                remove={remove} 
                setModal={setModal}
                setUpdatedPost={setUpdatedPost} 
                />
            )}
        </main>
    );
};

export default PostList;