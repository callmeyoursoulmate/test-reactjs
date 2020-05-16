import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
};


function getRandomColor(){
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    let randomIndex = Math.trunc(Math.random() * 5);

    return COLOR_LIST[randomIndex];
}
function ColorBox() {
    //muốn console initColor log ra 1 lần thì nhét callback trong useState;
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log('=====> initColor',initColor);
        return initColor;
    });
    function changeColor() {
        //get random color => set color
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color',newColor);
    }
    return (
        <div>
            <h1
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={changeColor}
            >
                Color Box
            </h1>
        </div>
    );
}

export default ColorBox;