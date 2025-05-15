import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot, FaGlobe } from "react-icons/fa6";
import Image from "next/image";
import SendMessage from "./sendMessage";

function RightAside() {
  return (
    <div className="px-4 my-5 md:my-0 md:px-0 ">
      <ContactInfo />
      <BusinessHours />
      <SendMessage />
    </div>
  );
}

export default RightAside;

const ContactInfo = () => {
  const social = [
    {
      id: 1,
      src: "/assets/social/facebook.png",
      alt: "facebook img",
    },
    {
      id: 2,
      src: "/assets/social/instagram.png",
      alt: "instagram img",
    },
    {
      id: 3,
      src: "/assets/social/youtube.png",
      alt: "youtube img",
    },
  ];
  return (
    <Card className="w-full md:w-60 lg:w-72 my-5 md:mt-0">
      <CardHeader>
        <CardTitle className="text-2xl font-comfortaa font-bold">
          Contact Info
        </CardTitle>
        <Separator />
        <CardDescription className="flex items-center justify-start gap-3">
          <span>
            <FaPhone className="text-red-800" />
          </span>
          <span>+1 (416) 555-1234</span>
        </CardDescription>
        <CardDescription className="flex items-center justify-start gap-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M0.796875 14.4693C0.932292 14.511 1.07031 14.5448 1.21094 14.5709C1.35156 14.5969 1.48958 14.6047 1.625 14.5943C2.6875 14.5943 3.75 14.5943 4.8125 14.5943C5.875 14.5943 6.9375 14.5943 8 14.5943C9.0625 14.5943 10.125 14.5943 11.1875 14.5943C12.25 14.5943 13.3125 14.5943 14.375 14.5943C14.5104 14.6047 14.6484 14.5969 14.7891 14.5709C14.9297 14.5448 15.0677 14.511 15.2031 14.4693C14.599 13.8651 14 13.261 13.4062 12.6568C12.8125 12.0631 12.2135 11.4641 11.6094 10.8599C11.0052 10.2558 10.401 9.65681 9.79688 9.06306C9.19271 8.46931 8.58333 7.88077 7.96875 7.29743C7.375 7.89118 6.77604 8.48493 6.17188 9.07868C5.57812 9.68285 4.98177 10.2818 4.38281 10.8756C3.78385 11.4693 3.1875 12.0683 2.59375 12.6724C1.98958 13.2662 1.39062 13.8651 0.796875 14.4693ZM0.125 13.7974C0.572917 13.3495 1.01562 12.9068 1.45312 12.4693C1.90104 12.0318 2.34375 11.5917 2.78125 11.149C3.21875 10.7063 3.66146 10.2662 4.10938 9.82868C4.54688 9.38077 4.98438 8.93806 5.42188 8.50056C4.98438 8.06306 4.54688 7.62035 4.10938 7.17243C3.66146 6.73493 3.21875 6.29483 2.78125 5.85212C2.34375 5.40941 1.90104 4.96931 1.45312 4.53181C1.01562 4.09431 0.572917 3.65681 0.125 3.21931C0.104167 3.29222 0.0833333 3.36514 0.0625 3.43806C0.0416667 3.51097 0.0208333 3.58389 0 3.65681V13.3287C0.0208333 13.4016 0.0416667 13.4771 0.0625 13.5552C0.0833333 13.6334 0.104167 13.7141 0.125 13.7974ZM10.5781 8.50056C11.0156 8.93806 11.4531 9.38077 11.8906 9.82868C12.3385 10.2662 12.7812 10.7063 13.2188 11.149C13.6562 11.5917 14.099 12.0318 14.5469 12.4693C14.9844 12.9068 15.4271 13.3443 15.875 13.7818C15.8958 13.7089 15.9167 13.636 15.9375 13.5631C15.9583 13.4901 15.9792 13.4172 16 13.3443V3.67243C15.9792 3.5891 15.9583 3.51097 15.9375 3.43806C15.9167 3.36514 15.8958 3.28702 15.875 3.20368C15.4271 3.6516 14.9844 4.09431 14.5469 4.53181C14.099 4.96931 13.6562 5.40941 13.2188 5.85212C12.7812 6.29483 12.3385 6.73493 11.8906 7.17243C11.4531 7.62035 11.0156 8.06306 10.5781 8.50056ZM0.796875 2.53181C1.23438 2.97972 1.67708 3.42243 2.125 3.85993C2.5625 4.30785 3.0026 4.75056 3.44531 5.18806C3.88802 5.62556 4.32812 6.06827 4.76562 6.51618C5.21354 6.95368 5.65625 7.39118 6.09375 7.82868C6.35417 7.57868 6.61458 7.32087 6.875 7.05525C7.13542 6.78962 7.40104 6.53181 7.67188 6.28181C7.75521 6.18806 7.86198 6.149 7.99219 6.16462C8.1224 6.18025 8.22917 6.22972 8.3125 6.31306C8.58333 6.56306 8.84896 6.81566 9.10938 7.07087C9.36979 7.32608 9.63542 7.57868 9.90625 7.82868C10.3438 7.39118 10.7865 6.95368 11.2344 6.51618C11.6719 6.06827 12.112 5.62556 12.5547 5.18806C12.9974 4.75056 13.4375 4.30785 13.875 3.85993C14.3229 3.42243 14.7656 2.97972 15.2031 2.53181C15.0677 2.49014 14.9297 2.45629 14.7891 2.43025C14.6484 2.4042 14.5104 2.39639 14.375 2.40681C13.3125 2.40681 12.25 2.40681 11.1875 2.40681C10.125 2.40681 9.0625 2.40681 8 2.40681C6.9375 2.40681 5.875 2.40681 4.8125 2.40681C3.75 2.40681 2.6875 2.40681 1.625 2.40681C1.47917 2.40681 1.33854 2.41722 1.20312 2.43806C1.06771 2.45889 0.932292 2.49014 0.796875 2.53181Z"
                fill="#AF1500"
              />
            </svg>
          </span>
          <span>demo@gmail.com</span>
        </CardDescription>
        <CardDescription className="flex items-center justify-start gap-3">
          <span>
            <FaLocationDot className="text-red-800" />
          </span>
          <span>1234 Queen Street West, Toronto, ON M6K 1L7, Canada</span>
        </CardDescription>
        <CardDescription className="flex items-center justify-start gap-3">
          <span>
            <FaGlobe className="text-red-800" />
          </span>
          <span>http:www.demo.com</span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center gap-3">
        {social.map((item) => (
          <Image
            key={item.id}
            width={1000}
            height={1000}
            src={item.src}
            alt={item.alt}
            className="w-5 h-5 "
          />
        ))}
      </CardFooter>
    </Card>
  );
};
const BusinessHours = () => {
  return (
    <Card className="w-full my-5 md:w-60 lg:w-72  md:my-0">
      <CardHeader>
        <CardTitle className="text-xl font-comfortaa font-bold">
          Business Hours
        </CardTitle>
        <Separator className="bg-red-700" />
        <CardDescription>
          <div className="flex justify-between">
            <span>Monday</span>
            <span>{"6:00am - 18:30pm"}</span>
          </div>
        </CardDescription>
        <Separator />
        <CardDescription>
          <div className="flex justify-between">
            <span>Tuesday</span>
            <span>{"6:00am - 17:30pm"}</span>
          </div>
        </CardDescription>
        <Separator />
        <CardDescription>
          <div className="flex justify-between">
            <span>Wednesday</span>
            <span>{"6:30am - 17:30pm"}</span>
          </div>
        </CardDescription>
        <Separator />
        <CardDescription>
          <div className="flex justify-between">
            <span>Thursday</span>
            <span>{"6:30am - 17:30pm"}</span>
          </div>
        </CardDescription>
        <Separator />
        <CardDescription>
          <div className="flex justify-between">
            <span>Friday</span>
            <span>{"6:30am - 17:30pm"}</span>
          </div>
        </CardDescription>
        <Separator />
        <CardDescription>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>{"6:30 am - 12:30 pm"}</span>
          </div>
        </CardDescription>
        <Separator />
        <CardDescription>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>{"Closed"}</span>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
