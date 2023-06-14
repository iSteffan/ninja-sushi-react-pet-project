import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="delivery" element={<DeliveryPage />} />
      <Route path="aboutUs" element={<AboutUsPage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="cabinet" element={<PersonalCabinetPage />} /> */}
    </Routes>
  );
};
