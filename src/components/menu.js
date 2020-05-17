import React from 'react';

const Menu = props => {
    return (
        <div style={{position: 'absolute', margin: '0 0 0 15vw'}}>

            {props.children}
            <div className='card'>
                   {console.log(props.visible)}ebrerre
            </div>
        </div>
    ); 
};


export default Menu;