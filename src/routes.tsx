import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Predictions } from './pages/prediction';
import { Expense } from './pages/expensePage';
import HomePage from './pages/homePage';
import { Goal } from './pages/goal';
import { Admin } from './pages/admin';

const router = createBrowserRouter( [
  {
    path: '/',
    element: <App />,
    children: [
        { path: '', element: <HomePage /> },
        { path: 'predicciones', element: <Predictions /> },
        { path: 'metas-sugerencias', element: <Goal /> },
        { path: 'gastos-ingresos', element: <Expense /> },
        { path: 'panel-admin', element: <Admin /> },
    ],
  },
  
]);

export default router;
