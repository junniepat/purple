import React from 'react';

const Menu = props => {
    return (
        <div style={{position: 'fixed', margin: '0 0 0 15vw', zIndex:'100',background: '#fff',width:'100%',height:'100%'}}>

            {props.children}
            <div className='card'>
                   {console.log(props.visible)}ebrerre
            </div>
        </div>
    ); 
};


export default Menu;