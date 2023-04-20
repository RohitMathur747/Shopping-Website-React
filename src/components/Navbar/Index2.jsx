import React, { useContext } from 'react';
import "./style.css";
import imgs from "./images.png";
import { ContexData } from '../ContextApi';

const Index2 = () => {
   let data= useContext(ContexData);
   function GenricHandler() {
    
    data.setData((prevalue) => {
        let x = prevalue.isloggin;
        return { ...prevalue, isloggin: !x }
    })

    console.log(data);
}
    return (
        <div className='navbar'>
            <h1 className='brand'>
                <span>
                    <img src={imgs} height="50px" width="50px" alt="i.png"  /> 
                    S</span>
                hopify</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                
            
                {data.data.isloggin?
                <li><a href="/">{data.data.userName}</a></li>:
                <li><a href="/">Login</a></li>}
                {data.data.isloggin? 
                <li><a href="/" onClick={GenricHandler}>logout</a></li>:
                <li><a href="/">Sign UP</a></li>}
                
            </ul>
            
        </div>
    )
}

export default Index2