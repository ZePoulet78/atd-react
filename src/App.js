import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRouter from '@/pages/Admin/AdminRouter';
import AuthProvider from '@/_helpers/AuthProvider';
import AuthRouter from './pages/Auth/AuthRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormattedMessage, IntlProvider } from 'react-intl';
import transFR from './locales/fr.json';
import transEN from './locales/en.json';
import transTML from './locales/tml.json';
import transES from './locales/es.json';
import transPT from './locales/pt.json';
import transCH from './locales/ch.json';
import transARB from './locales/arb.json';


import { useState } from 'react';
import PublicHeader from '@/components/Public/PublicHeader';
import { LanguageContext } from '@/_helpers/LanguageProvider';
// import { checkbox } from '@material-tailwind/react';
import PublicRouter from './pages/Public1/PublicRouter';

const messages = {
  fr: transFR,
  en: transEN,
  tml: transTML,
  es: transES,
  pt: transPT,
  arb: transARB,
  ch: transCH,
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
                  <AuthProvider>
                    <AdminRouter />
                  </AuthProvider>
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