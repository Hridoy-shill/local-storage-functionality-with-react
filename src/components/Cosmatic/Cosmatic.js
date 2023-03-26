import React from 'react';
import { removeData, saveInLocalDb } from '../../utilites/localStorage';
import './Cosmatic.css'


const Cosmatic = (props) => {
    const {name, balance, _id} = props.cosmetic
    const addToCard = (id) =>{
        saveInLocalDb(id)
    }
    
    // const addToCardWithPera = () => addToCard(name)
    return (
        <div className='sigel-card'>
            <h1>Name: {name}</h1>
            <h2>Price: {balance}</h2>
            <h3>Id: {_id}</h3>
            {/* <button onClick={addToCardWithPera}>Add to card</button> */}
            <button onClick={() => addToCard(_id)}>Add to card</button>
            <button onClick={() => removeData(_id)}>Remove</button>
            {/* <button onClick={() => addToCard(balance)}>Cost</button> */}
        </div>
    );
};




export default Cosmatic;