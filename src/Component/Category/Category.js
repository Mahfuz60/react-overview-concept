import React, { useContext, useEffect, useState } from 'react';
import { CategoryContex } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts=[
    {name:'Lenevo',category:'laptop'},{name:'Asus',category:'laptop'},{name:'Dell',category:'laptop'},{name:'Nokia',category:'mobile'},{name:'Samsang',category:'mobile'},{name:'Realme',category:'mobile'},{name:'Nikon',category:'camera'},{name:'Sony',category:'camera'},{name:'Cannon',category:'camera'}
];
const Category = () => {
    const [category]=useContext(CategoryContex);
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        const matchProduct=allProducts.filter(pd=>pd.category.toLowerCase()===category.toLowerCase());
        setProduct(matchProduct);


    },[category])
    
    return (
        <div>
        <h3>Select your Category:{category}</h3>;
        {
            products.map(pd=> <CategoryDetails product={pd}></CategoryDetails>)
        }
        </div>
    );
};

export default Category;