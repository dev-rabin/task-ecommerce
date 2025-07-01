import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/Loginpage';

function AppWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/product-detail' element={<ProductDetail />} />
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
