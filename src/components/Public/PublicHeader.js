import { Logo, LogInButton, LogoutButton, UserProfile, HeaderButton } from "@/components/Public/header";
import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from "@/_helpers/LanguageProvider";
import { FormattedMessage } from "react-intl";

function PublicHeader() {
  const { locale, changeLanguage } = useContext(LanguageContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Vérifier la présence du token dans le localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <header className="navbar navbar-expand navbar-dark header py-3">
      <div className="container">
        <Logo />
        <div className="flex items-center gap-3">
          <HeaderButton href="/"> <FormattedMessage id="about" /> </HeaderButton>
          <HeaderButton href="/auth/joinus"><FormattedMessage id="join" /> </HeaderButton>
          <HeaderButton href="/auth/needhelp"><FormattedMessage id="needhelp" /> </HeaderButton>
        </div>
        <div className="navbar-nav ml-auto">
          <select className="blue border"  value={locale} onChange={handleLanguageChange}>
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="tml">தமிழ்</option>
          </select>
          {isLoggedIn ? (
            <>
              <UserProfile />
              <LogoutButton />
            </>
          ) : (
            <LogInButton />
          )}
        </div>
      </div>
      <style>
        {`
          .header {
            background-color: #31AFB4;
          }
          .blue {
            background-color: #31AFB4;
          }
        `}
      </style>
    </header>
  );
}

export default PublicHeader;
