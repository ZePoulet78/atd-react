import React from "react";
function UserProfile() {
    return (
      <div className="d-flex align-items-center mx-3">
        <div className="rounded-circle bg-white mr-2" style={{ width: '30px', height: '30px' }} />
        <span className="text-white">Utilisateur</span>
      </div>
    );
  }

export default UserProfile;