import { useSelector, useDispatch } from 'react-redux';

import { ordered, restocked } from './icecreamSlice';


const IcecreamView = () => {
    // ? useSelector: Permite extraer datos del estado de la tienda Redux
    const numOfIcecreams = useSelector( state => state.icecream.numOfIceCreams );    // ? state.<key-reducer>.<property-value>

    // ? useDispatch: Devuelve una referencia a la función de despacho de la tienda Redux. Puede usarlo para enviar acciones según sea necesario.
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Number of ice creams - { numOfIcecreams }</h3>
            <button
                onClick={ () => dispatch( ordered() ) }
            >Order ice cream</button>
            <button
                onClick={ () => dispatch( restocked( 3 ) )}
            >Restock 3 ice creams</button>
        </div>
    );
};


export default IcecreamView;
