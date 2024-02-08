import React from 'react';
import style from './MyTextarea.module.css'

const MyTextarea = (props) => {
    return (
        <textarea className={style.MyTextarea} {...props}>
            
        </textarea>
    );
};

export default MyTextarea;