import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/Loginpage';
import RegisterUser from './pages/RegisterUser';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register-user'];
  const [searchQuery, setSearchQuery] = useState("");

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar onSearch={(value) => setSearchQuery(value)} />}
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register-user' element={<RegisterUser />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Homepage searchQuery={searchQuery} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/product-detail/:id'
          element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;