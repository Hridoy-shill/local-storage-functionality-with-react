import React from 'react';
import calcult, { divition, subsitute } from '../../utilites/Common';
import './Dress.css'

const Dress = (props) => {
    // const {email, phone} = props.cosmetic
    const number1 = 150;
    const number2 = 50;
    const mainus = subsitute(number1, number2)
    const vhag = divition(number1, number2)  
    return (
        <div className='dress-div'>
            <h3>This is my second Compo!!</h3>
            <h3>Total = {mainus}</h3>
            <h3>Total = {vhag}</h3>
            {/* <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2> */}

        </div>
    );
};

export default Dress;