import '../App.css';
import PropTypes from 'prop-types'

const myStyle = {
    ocultar:{
        display : "none"
    },
    mostrar : {
        display:"block",
        color:"black",
        backgroundColor: "green"
    }
}

const EdadUser = ({edad,show = true}) => {
    return (
        <>
            <p 
            className="Usuario" 
            style={ show ? myStyle.mostrar : myStyle.ocultar } 
            >
                ===Que onda mi edad es {edad} anios===
                </p>
        </>
    )
}

EdadUser.propTypes = {
    edad : PropTypes.number.isRequired
};

export { EdadUser }; 