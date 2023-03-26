const saveInLocalDb = id =>{

    let shoppingCard = {};
    /* get item */
    const storedCard = localStorage.getItem('shopping-card');
    if(storedCard){
        shoppingCard = JSON.parse(storedCard)
    }
    else{
        shoppingCard = {}
    }
    /* set item */
    const quantity = shoppingCard[id];
    if(quantity){
        const newQuantity = quantity+1
        shoppingCard[id] = newQuantity;       
    }
    else{
        /* ekhane 1 dara product er quantity bhijano hoyeche.. */
        shoppingCard[id] = 1;
    }
    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard))
}

const removeData = id =>{
    const storedCard = localStorage.getItem('shopping-card');
    
    if(storedCard){
        const shoppingCard = JSON.parse(storedCard)
        if(id in shoppingCard){
           delete shoppingCard[id]
           localStorage.setItem('shopping-card', JSON.stringify(shoppingCard))
        }
    }
}

const clareCard =()=>{
    localStorage.removeItem('shopping-card')
}
export {saveInLocalDb, removeData, clareCard}