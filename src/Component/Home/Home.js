import React, { useContext } from 'react';
import { CategoryContex } from '../../App';
import Category from '../Category/Category';

const Home = (props) => {
    const category =useContext(CategoryContex);
    const {count}=props;
    return (
        <div style={{border: '2px solid purple'}}> 
        <h1>This is Home:{category}</h1>
        <Category ></Category>
            
        </div>
    );
};

export default Home;