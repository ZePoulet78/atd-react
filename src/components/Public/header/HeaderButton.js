import React from "react";
function HeaderButton({ children }) {
    return (
      <a className="navbar-brand fs-6 text-light ml-5">
        {children}
        {/* <style>
          {`
            .navbar-brand {
                color: #FFFDFC;
                text-decoration: none;
                padding: 0.5rem 1rem;
            }
          `}
        </style> */}
      </a>
    );
  }
  
  export default HeaderButton;