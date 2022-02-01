import React from 'react';
import { useState } from 'react';
import Star from './Images/star.png'

function Header() {
    const [counter, setCounter] = useState(0);

    function listOfStars(input){
        let result = []
        for(let i = 0; i< input; i++){
            result.push(<img key={i} style={{ margin: "5px"}} src={Star} alt="star" width="50px"/>)
        }
        return result
        
    }
    return (
        <div>
            <div style={{background: 'maroon', display: 'flex', justifyContent: 'space-between', margin: '10px auto', width: '98%', color: 'white'}}>
                <h2 style={{ margin: "20px"}}>LOGO</h2>
                <h2 style={{ margin: "20px"}}>MENU</h2>
            </div>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <button style={{ margin: "20px"}} onClick={() => {if(counter > 0){setCounter(counter - 1)}}}>Remove</button>
                <h3 style={{ margin: "20px"}}>{counter}</h3>
                <button style={{ margin: "20px"}} onClick={() => setCounter(counter + 1)}>Add</button>
            </div>
            <div style={{display: "flex", margin: "20px", flexWrap: 'wrap'}}>
                {listOfStars(counter)}
            </div>
        </div>
    );
}

export default Header;
