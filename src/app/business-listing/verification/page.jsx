import VerificationSuccess from "@/common/components/verificationSuccess";
import OTPverification from "@/components/Auth/OTPverification";
import React from "react";

function page() {
  return (
    <>
      <OTPverification />
      <VerificationSuccess Content={<Content />} />
    </>
  );
}

export default page;

const Content = () => {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6">
      {/* Checkmark Icon */}
      <div className="p-2 w-20 h-20 bg-red-700 rounded-full mb-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="31"
          viewBox="0 0 39 31"
          fill="none"
        >
          <path
            d="M38.7443 5.36231L33.9643 0.617188L13.5406 20.8841L5.03588 12.4492L0.255859 17.1943L13.5406 30.3821L38.7443 5.36231Z"
            fill="#FEFEFE"
          />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-comfortaa font-bold text-red-700 mb-2">
        Your Business is Verified
      </h2>

      {/* Message */}
      <p className="text-gray-600 text-sm sm:text-base max-w-md">
        Your business has been successfully verified and is now listed in the
        directory. You can now connect with potential customers!
      </p>
    </div>
  );
};
