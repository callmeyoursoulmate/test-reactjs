import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    onChangeColor: PropTypes.func,
};
ColorBox.defaultProps = {
    onChangeColor: null
}

function ColorBox(props) {
    let [color, setColor] = useState('green');
    function onChangeColor(color) {
        console.log('===> color',color)
    }
    return (
        <div>
            <h1
                style={{ background: color }}
                onClick={onChangeColor}
            >
                Color Box
            </h1>
        </div>
    );
}

export default ColorBox;