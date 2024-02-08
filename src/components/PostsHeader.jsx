import React from 'react';
import PostFilter from './PostFilter';
import MySelect from './MySelect';
import MyButton from './UI/button/MyButton';

const PostsHeader = ({limit, setLimit, filter, setFilter, setModal}) => {
    return (
        <div className='posts__header'>

            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Number of items'
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: 50, name: '50' },
                ]}
            />
            <MyButton onClick={() => setModal(true)}>Add new post</MyButton>
        </div>
    );
};

export default PostsHeader;