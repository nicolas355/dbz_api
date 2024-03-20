import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/shared/Layout/Layout';
import Home from '../pages/Home/Home';
import DragonBallForm from '../pages/DragonBallForm/DragonBallForm'; // Importa el componente del formulario

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/formulario" element={<DragonBallForm />} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;