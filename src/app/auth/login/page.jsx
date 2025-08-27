import LogIn from "@/components/Auth/login";
import React from "react";

function Login() {
  return (
    <div className="w-full min-h-screen flex items-start py-10 sm:py-14 md:py-20 lg:py-32 xl:py-36 justify-center bg-gray-50 ">
      <LogIn />
    </div>
  );
}

export default Login;
