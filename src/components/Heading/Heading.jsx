import React from 'react';

const Heading = (props) =>{
    const {name, titleName, styleName} = props;

    switch(name)
    {
        case "heading-1":
            return <h1 className={styleName}>{titleName}</h1>
        case "heading-2":
            return <h2 className={styleName}>{titleName}</h2>
        case "heading-3":
            return <h2 className={styleName}>{titleName}</h2>
    }
}

export default Heading;