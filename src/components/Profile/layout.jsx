"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import PersonalInfo from "./PersonalInfo/personalInfo";
import OrderHistory from "./OrderHistory/orderHistory";
import WishList from "./WishList/wishList";
import ChangePassword from "../Auth/changePassword";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="w-full h-screen flex flex-col md:flex-row gap-10 p-5">
      {/* Mobile view tabs */}
      <div className="md:hidden w-full">
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
  // Map tab values to menu IDs
  const handleTabChange = (value) => {
    // Convert string tab value to number ID
    setSelectedMenu(parseInt(value));
  };

  // Get the current tab value based on selectedMenu
  const getCurrentTabValue = () => {
    return selectedMenu.toString();
  };

  return (
    <ScrollArea orientation="horizontal">
      <Tabs
        value={getCurrentTabValue()}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="1">My Profile</TabsTrigger>
          <TabsTrigger value="2">Order History</TabsTrigger>
          <TabsTrigger value="3">Wish List</TabsTrigger>
          <TabsTrigger value="4">Change Password</TabsTrigger>
        </TabsList>
      </Tabs>
    </ScrollArea>
  );
};

export default ProfileLayout;
