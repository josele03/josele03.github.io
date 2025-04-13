import React from 'react';
import Layout from '@theme/Layout';
import AppRubix from '../components/Rubix/AppRubix.js';
import '../css/rubix.css'; // Importa los estilos de RubixCube
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function RubixCubePage() {
  return (
    <BrowserOnly> 
    <Layout
      title="RubixCube"
      description="Pantalla interactiva del Cubo de Rubik">
      <main>
        <AppRubix /> {/* Renderiza el modelo interactivo */}
      </main>
    </Layout>
    </BrowserOnly>
  );
}