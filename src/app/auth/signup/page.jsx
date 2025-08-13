import RegistrationForm from "@/components/Auth/registration";
import React from "react";

function SignUp() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] pt-20 pb-10 flex items-center justify-center bg-gray-50">
      <RegistrationForm />
    </div>
  );
}

export default SignUp;
