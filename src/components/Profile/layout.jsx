"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import PersonalInfo from "./PersonalInfo/personalInfo";
import OrderHistory from "./OrderHistory/orderHistory";

import ChangePassword from "../Auth/changePassword";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import WishList from "./WishList/wishList";
import Image from "next/image";

function ProfileLayout() {
  // Using number IDs to match the existing Sidebar component
  const [selectedMenu, setSelectedMenu] = useState(1);

  // Function to render the correct component based on selectedMenu
  const renderComponent = () => {
    switch (selectedMenu) {
      case 1:
        return <PersonalInfo selectedMenu={selectedMenu} />;
      case 2:
        return <OrderHistory selectedMenu={selectedMenu} />;
      case 3:
        return <WishList selectedMenu={selectedMenu} />;
      case 4:
        return <ChangePassword selectedMenu={selectedMenu} />;
      default:
        return <PersonalInfo selectedMenu={selectedMenu} />;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:px-32 md:flex-row gap-10 p-5 pb-20 ">
      {/* Mobile view tabs */}
      <div className="md:hidden w-full z-10">
        <MobileTabs
          setSelectedMenu={setSelectedMenu}
          selectedMenu={selectedMenu}
        />
      </div>

      {/* Desktop view with sidebar */}
      <Sidebar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />

      {/* Content display - works for both mobile and desktop */}
      {renderComponent()}
    </div>
  );
}

// MobileTabs component to handle mobile navigation
const MobileTabs = ({ setSelectedMenu, selectedMenu }) => {
  const handleTabChange = (value) => {
    setSelectedMenu(parseInt(value));
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg ">
      <Tabs value={selectedMenu.toString()} onValueChange={handleTabChange}>
        <TabsList className="flex w-max gap-2 px-2 bg-kappes">
          <TabsTrigger value="1" className="whitespace-nowrap cursor-pointer">
            My Profile
          </TabsTrigger>
          <TabsTrigger value="2" className="whitespace-nowrap cursor-pointer">
            Order History
          </TabsTrigger>
          <TabsTrigger value="3" className="whitespace-nowrap cursor-pointer">
            Wish List
          </TabsTrigger>
          <TabsTrigger value="4" className="whitespace-nowrap cursor-pointer">
            Change Password
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProfileLayout;
