/*
 * @Author: xx
 * @Date: 2024-05-21 17:03:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-21 19:56:23
 * @Description: 
 * @FilePath: \toolweb\src\main.tsx
 */
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);