import React, { useEffect, useState } from 'react';
import { add, multiple } from '../../utilites/Common';
import Cosmatic from '../Cosmatic/Cosmatic';
import Dress from '../Drass/Dress';


// const loadData =()=>{
//     fetch('data.json')
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }

const Cosmatics = () => {
    const [cosmatics, setCosmatics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmatics(data))
    }, [])



    return (
        <div>
            <h1>The borolox Shopping mall</h1>
            {
                cosmatics.map(cosmetic => <Cosmatic key ={cosmetic._id} cosmetic={cosmetic}></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;