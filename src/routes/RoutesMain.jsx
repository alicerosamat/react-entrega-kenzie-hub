import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/dashboard/DashboardPage'
import { RegisterPage } from '../pages/register/RegisterPage'

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path='/' element={<LoginPage />} />
         <Route path='/dashboard' element={<DashboardPage />} />
         <Route path='/register' element={<RegisterPage />} />
      </Routes>
   );
};