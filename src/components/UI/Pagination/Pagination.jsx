import React from 'react';
import { usePagination } from '../../hooks/usePagination';
import './Pagination.css'

const Pagination = ({ totalPages, page, setPage }) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => setPage(p)}
                    className={p === page ? 'page current_page' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;