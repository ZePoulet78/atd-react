import React from "react";
function UserProfile() {
  const name = localStorage.getItem('name');
  const firstname = localStorage.getItem('firstname');
  const avatar = localStorage.getItem('avatar');
    return (
      <div className="d-flex align-items-center mx-3">
        <div className="rounded-circle bg-white mx-2" style={{ width: '45px', height: '45px' }}>
          <img className="rounded-circle" src={avatar} alt="User" height={45} width={45} />
        </div>
        <span className="text-white">{name} {firstname}</span>
      </div>
    );
  }

export default UserProfile;