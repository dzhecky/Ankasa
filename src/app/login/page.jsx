import FormLogin from "../components/formLogin/formLogin";
import LoginBlue from "../components/loginBlue/loginBlue";
import React from "react";



export default function Login() {

  return (
    <div className="flex bg-white h-screen">
      <LoginBlue />
      <FormLogin />
    </div>

  );
}
