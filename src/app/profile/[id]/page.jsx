"use client";
import ProfileLayout from "@/components/Profile/layout";
import React from "react";
import { withAuth } from "@/Providers/AuthGuard";

function Profile() {
  return (
    <div className="relative  w-full h-full bg-white  z-0">
      <div
        className="absolute  w-full h-full bg-white  z-0 opacity-70"
        style={{
          backgroundImage: `url("/assets/texture.png")`,
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <ProfileLayout />
    </div>
  );
}

export default withAuth(Profile);
