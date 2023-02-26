import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const errData = useRouteError();
  console.log(errData);
  return (
    <div>
      <h1>{errData.status + ":" + errData.statusText}</h1>
    </div>
  );
};

export default Error;
