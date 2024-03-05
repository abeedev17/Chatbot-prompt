import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user.userName) return <div>Please login</div>;
  return <div>Welcome {user.userName}</div>;
}

export default Profile;
