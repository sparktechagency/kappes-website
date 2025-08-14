import ResetPasswordForm from "@/components/Auth/resetPassword";
import ResetSuccess from "@/components/Auth/resetSuccess";
import React from "react";

function ResetPassword() {
  return (
    <div className="w-screen my-6 md:my-20 px-2   md:h-[100vh] flex items-start justify-start">
      <ResetPasswordForm />
    </div>
  );
  // return <ResetSuccess />;
}

export default ResetPassword;
