import React, { useEffect, useRef, useState } from 'react';
import PostServies from '../API/PostServies';
import AddPostModal from '../components/AddPostModal';
import EditPostModal from '../components/EditPostModal';
import PostList from '../components/PostList';
import PostsHeader from '../components/PostsHeader';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/Pagination/Pagination';
import { useFetching } from '../components/hooks/useFetching';
import { useObserver } from '../components/hooks/useObserver';
import { usePosts } from '../components/hooks/usePosts';
import { getPageCount } from '../components/utils/pageCount';

const Posts = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [updatePost, setUpdatedPost] = useState({});
    const [filter, setFilter] = useState({ search: '', sort: '' });
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [prevLimit, setPrevLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const lastElement = useRef();

    const toggleAddPostModal = () => {
        setAddModalOpen(!addModalOpen);
    }

    const toggleEditPostModal = () => {
        setEditModalOpen(!editModalOpen);
    }

    const [removePost] = useFetching(async (post) => {
        setPosts(posts.filter(p => p.id !== post.id));

        const response = await PostServies.deletePost(post);
    })


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostServies.getAll(limit, page);
        if (page === 1) {
            setPosts(response.data.posts);
        } else {
            setPosts([...posts, ...response.data.posts]);
        }
        const totalCount = response.data.total;
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        if (limit !== prevLimit) {
            setPage(1);
            setPrevLimit(limit);
        }


        fetchPosts(limit, page);

    }, [limit, page]);


    const filteredAndSortedPosts = usePosts(posts, filter.sort, filter.search);

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(prevPage => prevPage + 1);
    })


    return (
        <div className="App">
            <AddPostModal
                modal={addModalOpen}
                toggleModal={toggleAddPostModal}
                setModal={setAddModalOpen}
            />
            <EditPostModal
                modal={editModalOpen}
                toggleModal={toggleEditPostModal}
                setModal={setEditModalOpen}
                updatedPost={updatePost}
            />
            <PostsHeader
                limit={limit}
                setLimit={setLimit}
                filter={filter}
                setFilter={setFilter}
                setModal={setAddModalOpen}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>}
            {isPostsLoading ? (
                <Loader />
            ) : (
                <>
                    <PostList
                        posts={filteredAndSortedPosts}
                        remove={removePost}
                        setModal={(setEditModalOpen)}
                        setUpdatedPost={setUpdatedPost}
                    />
                    <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>
                    <Pagination
                        totalPages={totalPages}
                        page={page}
                        setPage={setPage}
                    />
                </>
            )}

        </div>
    );
}

export default Posts;