import ForgotPasswordForm from "@/components/Auth/forgotPassword";
import React from "react";

function ForgotPassword() {
  return (
    <div className="w-screen my-6 md:my-20 px-2   md:h-[100vh] flex items-start justify-start">
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPassword;
