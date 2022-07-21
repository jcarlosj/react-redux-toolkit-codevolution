import store from './app/store.js';

import { ordered as cakeOrdered, restocked as cakeRestocked } from './features/cake/cakeSlice.js';
import { ordered as icecreamOrdered, restocked as icecreamRestocked } from './features/icecream/icecreamSlice.js';

import { fetchUsers } from './features/user/userSlice.js';
import { fetchUserById } from './features/user/userByIdSlice.js';

// ? Responsabilidad #2: Permite acceder al estado global de la aplicacion
console.log( 'Initial state: ', store.getState() );

// ? Responsabilidad #3: Registra o subscrible los listeners
const unsubscribe = store.subscribe( () => {
    // console.log( 'Update ', store.getState() );
}); 

// ? Responsabilidad #4: Permite la actualizacion del estado a traves del envio de acciones al Redux Store a traves del metodo dispatch()
store.dispatch( fetchUsers() );     // ? Envia/Despacha una accion asincrona a Redux Toolkit
store.dispatch( fetchUserById( 1 ) );

// store.dispatch( cakeOrdered() );
// store.dispatch( cakeOrdered() );
// store.dispatch( cakeOrdered() );
// store.dispatch( cakeRestocked( 3 ) );

// store.dispatch( icecreamOrdered() );
// store.dispatch( icecreamOrdered( 2 ) );
// store.dispatch( icecreamRestocked( 3 ) );

// ? Responsabilidad #5: Cancela registro o rechazar subscripcion de los listeners
// unsubscribe();       // ? Deshabilitar cuando estamos haciendo uso de una funcion asincrona