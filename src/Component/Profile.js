import React, { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("clear timer");
    };
  }, []);
  return <div>profile</div>;
};

export default Profile;
