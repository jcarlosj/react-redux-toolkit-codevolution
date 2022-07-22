import { useSelector } from 'react-redux';


const IcecreamView = () => {
    // ? useSelector: Permite extraer datos del estado de la tienda Redux
    const numOfIcecreams = useSelector( state => state.icecream.numOfIceCreams );    // ? state.<key-reducer>.<property-value>

    return (
        <div>
            <h3>Number of ice creams - { numOfIcecreams }</h3>
            <button>Order ice cream</button>
            <button>Restock ice creams</button>
        </div>
    );
};


export default IcecreamView;
