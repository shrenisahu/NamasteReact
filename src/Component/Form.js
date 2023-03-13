import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <input placeholder="enter name" />
      <input placeholder="enter email" />
      <button>Login</button>
    </>
  );
};
export default Form;
