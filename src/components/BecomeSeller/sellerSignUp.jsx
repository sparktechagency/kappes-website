import Image from "next/image";
import React from "react";
import SellerRegistrationForm from "./registration";

function SellerSignUpForm() {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen">
      {/* Image Section - Hidden on small mobile, shown from medium screens up */}
      <div className="hidden sm:block sm:w-full lg:w-1/2 relative">
        <Image
          src="/assets/becomeSeller/getReady.png"
          alt="seller get started"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Mobile Top Image - Only shown on small screens */}
      <div className="sm:visible lg:hidden w-full h-48 relative">
        <Image
          src="/assets/becomeSeller/getReady.png"
          alt="seller get started"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="w-full max-w-md lg:max-w-lg">
          <SellerRegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default SellerSignUpForm;
