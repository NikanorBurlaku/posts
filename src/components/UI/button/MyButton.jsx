import React from 'react';
import style from './MyButton.module.css';

const MyButton = (props) => {
    return (
       <button className={style.MyButton} {...props}></button>
    );
};

export default MyButton;