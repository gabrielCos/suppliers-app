import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// createRoot diz ao React a rota da nossa aplicação, onde esse componente deve ser armazenado
// depois essa rota em uma constante ou variável 
// em seguida, chamados o metódo de renderização para dizer o que queremos que seja renderizado na div que selecionados
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

