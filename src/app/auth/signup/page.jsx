import RegistrationForm from "@/components/Auth/registration";
import React from "react";

function SignUp() {
  return (
    <div className="w-full min-h-screen lg:pt-12 pb-10 flex items-start justify-center bg-gray-50">
      <RegistrationForm />
    </div>
  );
}

export default SignUp;
