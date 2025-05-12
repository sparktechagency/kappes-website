"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoHomeOutline } from "react-icons/io5";
function Address() {
  return (
    <div className="w-full flex flex-col h-full items-start justify-between  ">
      <Card className="w-full h-[45%]  border">
        <CardHeader className="bg-kappes rounded-md">
          <CardTitle className="flex items-center justify-start text-white  gap-4 py-2">
            <IoHomeOutline />
            Shipping Address
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-start gap-4">
          <div className="flex items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.9987 10.8333C12.2999 10.8333 14.1654 8.96785 14.1654 6.66667C14.1654 4.36548 12.2999 2.5 9.9987 2.5C7.69751 2.5 5.83203 4.36548 5.83203 6.66667C5.83203 8.96785 7.69751 10.8333 9.9987 10.8333Z"
                stroke="#3A3A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.6654 17.4997C16.6654 15.7316 15.963 14.0359 14.7127 12.7856C13.4625 11.5354 11.7668 10.833 9.9987 10.833C8.23059 10.833 6.5349 11.5354 5.28465 12.7856C4.03441 14.0359 3.33203 15.7316 3.33203 17.4997"
                stroke="#3A3A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Jack Taylor</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z"
                stroke="#3A3A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.709 1.66699C13.4075 1.84597 14.9941 2.59932 16.2064 3.80248C17.4186 5.00563 18.1839 6.5865 18.3757 8.28366"
                stroke="#3A3A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.709 5C12.5286 5.16161 13.2807 5.56586 13.8676 6.16026C14.4546 6.75466 14.8494 7.51177 15.0007 8.33333"
                stroke="#3A3A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>+123456789101</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.6654 8.33366C16.6654 12.4945 12.0495 16.8278 10.4995 18.1662C10.3551 18.2747 10.1794 18.3335 9.9987 18.3335C9.81803 18.3335 9.64226 18.2747 9.49787 18.1662C7.94786 16.8278 3.33203 12.4945 3.33203 8.33366C3.33203 6.56555 4.03441 4.86986 5.28465 3.61961C6.5349 2.36937 8.23059 1.66699 9.9987 1.66699C11.7668 1.66699 13.4625 2.36937 14.7127 3.61961C15.963 4.86986 16.6654 6.56555 16.6654 8.33366Z"
                stroke="#3A3A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z"
                stroke="#3A3A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>123 Maple Street ,Apt 456, Toronto, ON M5A 1A1 ,Canada</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>

      <Card className="w-full h-[45%] border">
        <CardContent className="w-full flex flex-col items-start justify-start gap-4">
          <div className="w-full flex flex-col space-y-1.5">
            <Label htmlFor="framework">Delivery Options</Label>
            <Select>
              <SelectTrigger id="framework" className="w-full">
                <SelectValue placeholder="Choose Delivery Option" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col space-y-1.5">
            <Label htmlFor="framework">Payment Method</Label>
            <Select>
              <SelectTrigger id="framework" className="w-full">
                <SelectValue placeholder="Choose Delivery Option" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Address;
