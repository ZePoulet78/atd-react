// import {Logo, LogInButton, LogoutButton, HeaderButton, UserProfile} from "@/components/Public/header";


// import React, { useContext } from 'react';
// import { useIntl } from 'react-intl';
// import { LanguageContext } from "@/_helpers/LanguageProvider";



// function PublicHeader(){
//     return (
//         <header className="navbar navbar-expand navbar-dark header py-3">
//             <div className="container">
//                 <Logo />   
//                 <div className="flex items-center gap-3">
//                     <HeaderButton>Bouton</HeaderButton>
//                     <HeaderButton>Bouton 2</HeaderButton>
//                 </div>
//                 <div className="navbar-nav ml-auto">
//                     <select value={locale} onChange={handleLanguageChange}>
//                         <option value="fr">Français</option>
//                         <option value="en">English</option>
//                     </select>
//                     {/* <LogoutButton /> */}
//                     <LogInButton />
//                     {/* <UserProfile /> */}
//                 </div>
//             </div>
//             {
//             <style>
//                 {`
//                 .header {
//                     background-color: #31AFB4;
//                 }
//                 `}
//             </style>
//             }
//         </header>
//     )   
// }
// export default PublicHeader;


import { Logo, LogInButton, HeaderButton } from "@/components/Public/header";
import React, { useContext } from 'react';
import { LanguageContext } from "@/_helpers/LanguageProvider";

function PublicHeader() {
  const { locale, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <header className="navbar navbar-expand navbar-dark header py-3">
      <div className="container">
        <Logo />
        <div className="flex items-center gap-3">
          <HeaderButton>Bouton</HeaderButton>
          <HeaderButton>Bouton 2</HeaderButton>
        </div>
        <div className="navbar-nav ml-auto">
          <select value={locale} onChange={handleLanguageChange}>
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
          <LogInButton />
        </div>
      </div>
      <style>
        {`
          .header {
            background-color: #31AFB4;
          }
        `}
      </style>
    </header>
  );
}

export default PublicHeader;