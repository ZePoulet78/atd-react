import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRouter from '@/pages/Admin/AdminRouter';
import AdminProvider from '@/_helpers/AdminProvider';
import AuthRouter from './pages/Auth/AuthRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

import { IntlProvider } from 'react-intl';
import transFR from './locales/fr.json';
import transEN from './locales/en.json';
import transTML from './locales/tml.json';


import { useState } from 'react';
import PublicHeader from '@/components/Public/PublicHeader';
import { LanguageContext } from '@/_helpers/LanguageProvider';
import PublicRouter from './pages/Public1/PublicRouter';
import ProfileRouter from '@/pages/Public1/ProfilePages/ProfileRouter'

const messages = {
  fr: transFR,
  en: transEN,
  tml: transTML
};

function App() {
  const [locale, setLocale] = useState('fr');
  localStorage.removeItem('i18nextLng')
  const changeLanguage = (lng) => {
    setLocale(lng);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className="App">
          <PublicHeader />
          <BrowserRouter>
            <Routes>
              <Route
                path="/admin/*"
                element={
                  <AdminProvider>
                      <AdminRouter />
                  </AdminProvider>
                }
              />
              <Route
              path='/profile/*'
              element={
                <ProfileRouter/>
              }
              />
              <Route path='/auth/*' element={<AuthRouter />} />
              <Route path='/*' element={<PublicRouter />} />
            </Routes>
          </BrowserRouter>
        </div>
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default App;