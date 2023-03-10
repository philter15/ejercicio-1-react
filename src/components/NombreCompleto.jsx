import React from 'react';
import '../App.css';
import { EdadUser } from './EdadUser';

const NombreCompleto = (props) => {
    console.log("props", props);
    return (
        < >{/* React.Fragmet */}
            <h3 className="App">Me llamo {props.name}</h3>
            <EdadUser edad = {props.age} show = {props.show} />
        </>
    );
};

export { NombreCompleto }; //exportacion por nombre, como si fuera objeto
//export default NombreCompleto //e4xportacion por default 