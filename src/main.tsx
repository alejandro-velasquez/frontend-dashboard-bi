import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';
import DashboardPage from './pages';
import OrdersPage from './pages/orders';
import { Expense } from './pages/expense';
import { Predictions } from './pages/prediction';
import { Admin } from './pages/admin';
import { Goal } from './pages/goal';


const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'predicciones',
            element: <Predictions />,
          },
          {
            path: 'metas-sugerencias',
            element: <Goal />,
          },
          {
            path: 'gastos-ingresos',
            element: <Expense />,
          },
          {
            path: 'panel-admin',
            element: <Admin />,
          },
          {
            path: 'salir',
            element: "",
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);