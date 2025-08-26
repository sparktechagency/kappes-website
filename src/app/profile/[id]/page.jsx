"use client";
import ProfileLayout from "@/components/Profile/layout";
import React from "react";
import { withAuth } from "@/components/Providers/AuthGuard";

function Profile() {
  return (
    <div className="relative  w-full h-full bg-white  z-0">
      <div
        className="absolute  w-full h-full bg-white  z-0"
        style={{
          backgroundImage: `url("/assets/texture.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <ProfileLayout />
    </div>
  );
}

export default withAuth(Profile);
