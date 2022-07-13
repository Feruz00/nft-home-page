import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css';
import { ThemeProvider } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    
);
