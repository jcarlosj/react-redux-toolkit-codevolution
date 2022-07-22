import { useSelector } from 'react-redux';


const CakeView = () => {
    // ? useSelector: Permite extraer datos del estado de la tienda Redux
    const numOfCakes = useSelector( ( state ) => state.cake.numOfCakes );   // ? state.<key-reducer>.<property-value>

    return (
        <div>
            <h3>Number of cakes - { numOfCakes }</h3>
            <button>Order cake</button>
            <button>Restock cakes</button>
        </div>
    );
};


export default CakeView;
