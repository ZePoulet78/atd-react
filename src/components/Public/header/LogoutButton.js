import React from "react";
import {accountService} from "@/_service/account.service";

function LogoutButton() {
  const handleLogout = () => {
    accountService.logout();
  };  
  return (
        <button className="navbar-brand" onClick={handleLogout}>
          <img src='/logoutButton.png' alt="Logout" height={28} width={28} />
        </button>
      );
}

export default LogoutButton;