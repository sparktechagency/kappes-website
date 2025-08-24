import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot, FaGlobe, FaEnvelope } from "react-icons/fa6";
import Image from "next/image";
import SendMessage from "./sendMessage";
import {
  selectServiceContactInfo,
  selectServiceWorkingHours,
} from "@/features/servieSlice/serviceSlice";

function RightAside() {
  // Get contact info from Redux selector
  const contact = useSelector(selectServiceContactInfo);
  const workingHours = useSelector(selectServiceWorkingHours);

  // If no contact information is available
  if (!contact) {
    return (
      <div className="px-4 my-5 md:my-0 md:px-0">
        <Card className="w-full md:w-60 lg:w-72">
          <CardHeader>
            <CardTitle className="text-2xl font-comfortaa font-bold text-gray-500">
              No Contact Information
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // Social media links with fallback
  const social = [
    {
      id: 1,
      src: "/assets/social/facebook.png",
      alt: "facebook img",
      link: contact.facebook,
      name: "Facebook",
    },
    {
      id: 2,
      src: "/assets/social/instagram.png",
      alt: "instagram img",
      link: contact.instagram,
      name: "Instagram",
    },
    {
      id: 3,
      src: "/assets/social/youtube.png",
      alt: "youtube img",
      link: contact.youtube,
      name: "YouTube",
    },
  ];

  return (
    <div className="px-4 my-5 md:my-0 md:px-0">
      <Card className="w-full md:w-60 lg:w-72 my-5 md:mt-0">
        <CardHeader>
          <CardTitle className="text-2xl font-comfortaa font-bold">
            Contact Info
          </CardTitle>
          <Separator />

          {contact.phone !== "N/A" && (
            <CardDescription className="flex items-center justify-start gap-3">
              <span>
                <FaPhone className="text-red-800" />
              </span>
              <span>{contact.phone}</span>
            </CardDescription>
          )}

          {contact.email !== "N/A" && (
            <CardDescription className="flex items-center justify-start gap-3">
              <span>
                <FaEnvelope className="text-red-800" />
              </span>
              <span>{contact.email}</span>
            </CardDescription>
          )}

          {contact.address !== "N/A" && (
            <CardDescription className="flex items-center justify-start gap-3">
              <span>
                <FaLocationDot className="text-red-800" />
              </span>
              <span>{contact.address}</span>
            </CardDescription>
          )}

          {contact.website === "N/A" && (
            <CardDescription className="flex items-center justify-start gap-3">
              <span>
                <FaGlobe className="text-red-800" />
              </span>
              <span>
                <a
                  href={
                    contact.website.startsWith("http")
                      ? contact.website
                      : `https://${contact.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.website}
                </a>
              </span>
            </CardDescription>
          )}
        </CardHeader>

        <CardFooter className="flex items-center gap-3">
          {social.map((item) => (
            <div
              key={item.id}
              className="group relative"
              title={item.link === "N/A" ? "Not Available" : item.name}
            >
              <Image
                width={20}
                height={20}
                src={item.src}
                alt={item.alt}
                className={`w-5 h-5 ${
                  item.link === "N/A"
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:opacity-75 transition-opacity cursor-pointer"
                }`}
                onClick={() => {
                  if (item.link !== "N/A") {
                    window.open(
                      item.link.startsWith("http")
                        ? item.link
                        : `https://${item.link}`,
                      "_blank"
                    );
                  }
                }}
              />
              {item.link === "N/A" && (
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Not Available
                </span>
              )}
            </div>
          ))}
        </CardFooter>
      </Card>

      <BusinessHours workingHours={workingHours} />
      <SendMessage />
    </div>
  );
}

export default RightAside;

const BusinessHours = ({ workingHours }) => {
  // If no working hours, return a message
  if (!workingHours || workingHours.length === 0) {
    return (
      <Card className="w-full my-5 md:w-60 lg:w-72 md:my-0">
        <CardHeader>
          <CardTitle className="text-xl font-comfortaa font-bold">
            Business Hours
          </CardTitle>
          <Separator className="bg-red-700" />
          <CardDescription className="text-gray-500">
            No working hours available
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  // Create a mapping of days to make sure they're in order
  const daysOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Sort working hours based on the days order
  const sortedWorkingHours = daysOrder.map(
    (day) =>
      workingHours.find((hour) => hour.day === day) || {
        day,
        start: "Closed",
        end: "",
      }
  );

  return (
    <Card className="w-full my-5 md:w-60 lg:w-72 md:my-0">
      <CardHeader>
        <CardTitle className="text-xl font-comfortaa font-bold">
          Business Hours
        </CardTitle>
        <Separator className="bg-red-700" />

        {sortedWorkingHours.map((hour, index) => (
          <React.Fragment key={hour.day}>
            <CardDescription>
              <div className="flex justify-between">
                <span>{hour.day}</span>
                <span>
                  {hour.start === "Closed"
                    ? "Closed"
                    : `${hour.start} - ${hour.end}`}
                </span>
              </div>
            </CardDescription>
            {index < sortedWorkingHours.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </CardHeader>
    </Card>
  );
};
