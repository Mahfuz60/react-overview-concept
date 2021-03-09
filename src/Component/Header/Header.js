import React, { useContext } from 'react';
import { CategoryContex } from '../../App';

const Header = () => {
    const [category,setCategory]=useContext(CategoryContex);
    return (
        <div>
        <h1>This Header:{category}</h1>
        <button onClick={()=>setCategory('Laptop')}>Laptop</button>
        <button onClick={()=>setCategory('Mobile')}>Mobile</button>
        <button onClick={()=>setCategory('Camera')}>Camera</button>
            
        </div>
    );
};

export default Header;