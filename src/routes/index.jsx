import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes';
import { SaleRoutes } from './sale.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch(user.role) {
      
    }
  }

  return (
    <BrowserRouter>
      {user ? <AdminRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}