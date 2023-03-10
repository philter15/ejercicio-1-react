import '../App.css';
import { EdadUser } from './EdadUser';

const Mascota = ({name,age, show}) => {
    return (
        <>
            <h1 className='Usuario'> Hola soy una mascota ma llamo {name}</h1>
            <EdadUser edad = {age} show ={show}  />
        </>
    )
}

export { Mascota };