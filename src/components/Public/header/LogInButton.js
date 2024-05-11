import React from "react";
import { FormattedMessage } from "react-intl";

function LogInButton() {
    return (
      <a href="/auth" className="btn btn-outline-light mx-2 border-3 fs-5">
          <FormattedMessage id='login'/>        
      </a>
    );
  }

export default LogInButton;