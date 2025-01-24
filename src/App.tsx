import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';
import { AdminPanelSettings, GolfCourseSharp, GraphicEq, MoneyOff } from '@mui/icons-material';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'predicciones',
    title: 'Predicciones',
    icon: <GraphicEq />,
  },
  {
    segment: 'metas-sugerencias',
    title: 'Metas y Sugerencias',
    icon: <GolfCourseSharp />,
  },
  {
    segment: 'gastos-ingresos',
    title: 'Gastos e Ingresos',
    icon: <MoneyOff />,
  },
  {
    segment: 'panel-admin',
    title: 'Panel Administrador',
    icon: <AdminPanelSettings />,
  }
];

const BRANDING = {
  title: "Bussines Intelligence",
};


export default function App() {
  
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}