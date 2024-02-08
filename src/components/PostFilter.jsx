import React from 'react';
import SearchSelect from './MySelect';
import MySelect from './MySelect';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <>

            <input placeholder='search'
                value={filter.search}
                onChange={event => setFilter({ ...filter, search: event.target.value })}
            />

            <MySelect
                setFilter={setFilter}
                filter={filter}
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='sort'
                options={[
                    { value: 'id', name: 'by number' },
                    { value: 'title', name: 'by title' },
                    { value: 'body', name: 'by body' },
                ]}
            />
        </>
    );
};

export default PostFilter;