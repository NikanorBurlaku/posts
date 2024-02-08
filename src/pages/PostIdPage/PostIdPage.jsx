import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../components/hooks/useFetching';
import PostServies from '../../API/PostServies';
import Loader from '../../components/UI/Loader/Loader';
import './PostIdPage.css'

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoadingPost, errorPost] = useFetching(async (id) => {
        const response = await PostServies.getById(id);
        setPost(response.data);
    })

    const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async (limit) => {
        const response = await PostServies.getComments(limit);
        setComments(response.data.comments);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsById(params.comments);
    }, [])
    return (
        <div className="posts__container">
            {isLoadingPost
                ? <Loader />
                : <div className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            }
            <div className="comments">
                <h3>Comments</h3>
                {isLoadingComments
                    ? <Loader />
                    :
                    comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <p>{comment.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostIdPage;