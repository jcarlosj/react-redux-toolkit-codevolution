import { useSelector, useDispatch } from 'react-redux';   
import { useEffect } from 'react';

import { fetchUsers } from './userSlice'


const UserView = () => {
    // ? useSelector: Permite extraer datos del estado de la tienda Redux
    const dataUsers = useSelector( state => state.user );    // ? state.<key-reducer> por que es un proceso asincrono

    console.log( dataUsers );

    // ? useDispatch: Devuelve una referencia a la función de despacho de la tienda Redux. Puede usarlo para enviar acciones según sea necesario.
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( fetchUsers() );
    }, [] );
    

    return (
        <div className="async-app">
            <h2>Procesos asíncronos</h2>
            <div className="users">
                <div>
                    <h3>User by id</h3>
                </div>
                <div>
                    <h3>List of users</h3>
                    {   dataUsers.loading && <p>Loading...</p> }
                    {   ! dataUsers.loading && dataUsers.error 
                            ?   <p>{ dataUsers.error }</p>
                            :   null
                    }
                    {   ! dataUsers.loading && dataUsers.users.length 
                            ?   <ul className="user-list">
                                    {   dataUsers.users.map( user => (
                                            <li key={ user.id }>{ user.name }</li>
                                        ))
                                    }
                                </ul>
                            :   null
                    }
                </div>
            </div>
        </div>
    );
};


export default UserView;
