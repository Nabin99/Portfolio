import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(<React.StrictMode>
     <App />
   </React.StrictMode>);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();
