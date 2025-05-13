"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import PersonalInfo from "./PersonalInfo/personalInfo";
import OrderHistory from "./OrderHistory/orderHistory";
import WishList from "./WishList/wishList";
import WishListCard from "./WishList/wishListCard";
import ChangePassword from "../Auth/changePassword";

function ProfileLayout() {
  const [selectedMenu, setSelectedMenu] = useState(1);
  console.log(selectedMenu);
  return (
    <div className="w-full h-screen flex gap-10 p-10">
      <Sidebar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
      <PersonalInfo selectedMenu={selectedMenu} />
      <OrderHistory selectedMenu={selectedMenu} />
      <WishList selectedMenu={selectedMenu} />
      <ChangePassword selectedMenu={selectedMenu} />
      {/* <WishListCard /> */}
    </div>
  );
}

export default ProfileLayout;
