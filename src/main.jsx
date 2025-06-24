import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import App from './App.jsx';
import GlobalStyles from './components/GlobalStyles';

library.add(faCircleXmark, faMagnifyingGlass, faSpinner, faCoffee);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </StrictMode>,
);
