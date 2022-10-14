import "./Profile.css";
import { useEffect, useState } from "react";
import { getBeersApi } from "../../services/Profile.service";

function Profile() {
  const [beer, setBeer] = useState([]);
  useEffect(()=>{
    getBeersApi().then(result=>console.log(result));
  },[])
  return (
    <div className="profile">
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
