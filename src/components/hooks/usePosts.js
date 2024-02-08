import { useMemo } from "react";

export const usePosts = (posts, sort, search) => {
    const filteredAndSortedPosts = useMemo(() => {
        let filteredPosts = posts;

        if (search) {
            filteredPosts = filteredPosts.filter(post =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (sort) {
            filteredPosts = [...filteredPosts].sort((a, b) => {
                if (sort === 'id') {
                    return a.id - b.id
                } else if (sort === 'title') {
                    return a.title.localeCompare(b[sort]);
                } else if (sort === 'title') {
                    return a.body.localeCompare(b[sort]);
                }
                return 0;
            });
        }

        return filteredPosts;
    }, [posts, search, sort]);

    return filteredAndSortedPosts;
}