import RegistrationForm from "@/components/Auth/registration";
import React from "react";

function SignUp() {
  return (
    <div className="w-screen h-[100vh] flex items-center justify-center bg-gray-50">
      <RegistrationForm />;
    </div>
  );
}

export default SignUp;
