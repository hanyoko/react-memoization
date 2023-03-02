import React, { useEffect, useState } from 'react';

const Box = ({createBox}) => {
    const [style, setStyle] = useState({});
    useEffect(()=>{
        console.log('박스키우기');
        setStyle(createBox());
        // {
        //     backgroundColor: 'pink',
        //     width: `${size}px`,
        //     height: `${size}px`
        // }
    },[createBox])
    
    return (
        <div style={style}>
            
        </div>
    );
};

export default Box;