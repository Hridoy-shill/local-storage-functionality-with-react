import React from 'react';
import { clareCard } from '../../utilites/localStorage';

const ClearCard = () => {
    return (
        <div>
            <button onClick={clareCard}>Clear Card</button>
        </div>
    );
};

export default ClearCard;