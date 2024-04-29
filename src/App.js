// import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import AdminRouter from '@/pages/Admin/AdminRouter';
// import AuthProvider from '@/_helpers/AuthProvider';
// import AuthRouter from './pages/Auth/AuthRouter';
// import Home from '@/pages/Public1/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import { FormattedMessage, IntlProvider } from 'react-intl';
// import transFR from './locales/fr.json';
// import transEN from './locales/en.json';
// import { useState } from 'react';
// import PublicHeader from '@/components/Public/PublicHeader';
// const messages = {
//   fr: transFR,
//   en: transEN,
// };

// function App() {
//   const [locale, setLocale] = useState('fr');

//   const changeLanguage = (lng) => {
//     setLocale(lng);
//   };

//   return (
//     <IntlProvider locale={locale} messages={messages[locale]}>
//       <div className="App">
//         <PublicHeader />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/admin/*" element={
//               <AuthProvider >
//                 <AdminRouter />
//               </AuthProvider>
//             }/>
//             <Route path="/auth/*" element={<AuthRouter />}/>
//             <Route path="/" element={<Home />} /> {/* Ajout de cette ligne */}
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </IntlProvider>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRouter from '@/pages/Admin/AdminRouter';
import AuthProvider from '@/_helpers/AuthProvider';
import AuthRouter from './pages/Auth/AuthRouter';
import Home from '@/pages/Public1/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage, IntlProvider } from 'react-intl';
import transFR from './locales/fr.json';
import transEN from './locales/en.json';
import { useState } from 'react';
import PublicHeader from '@/components/Public/PublicHeader';
import { LanguageContext } from '@/_helpers/LanguageProvider';

const messages = {
  fr: transFR,
  en: transEN,
};

function App() {
  const [locale, setLocale] = useState('fr');

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
              <Route path="/auth/*" element={<AuthRouter />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default App;