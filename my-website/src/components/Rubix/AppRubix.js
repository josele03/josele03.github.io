/*
 * Basado en código bajo licencia Apache 2.0.
 * Archivo original: parte de mi TFG.
 * Modificado por: Jose Márquez Carqués
 */

import React from 'react';
import CubeContainer from '../Rubix/CubeContainer'; // Ajusta la ruta
import '../../css/rubix.css'; // Ajusta la ruta de los estilos

class AppRubix extends React.Component {
    render() {
        return (
            <div className="app">
                <CubeContainer/>
            </div>
        );
    }
}

export default AppRubix;
