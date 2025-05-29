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
import provideIcon from "@/common/components/provideIcon";
function Address() {
  return (
    <div className="w-full flex flex-col gap-5 h-full items-start justify-between  ">
      <Card className="w-full h-[45%]  border p-0">
        <CardHeader className="bg-kappes rounded-t-md">
          <CardTitle className="flex items-center justify-between text-white h-12 gap-4 py-2  mt-1.5">
            <span className="flex items-center gap-4 font-comfortaa">
              <IoHomeOutline size={20} className="-mt-1" />
              Shipping Address
            </span>

            <span className="cursor-pointer">
              {provideIcon({ name: "edit" })}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start justify-start gap-4">
          <div className="flex items-center justify-start gap-2">
            {provideIcon({ name: "user" })}
            <p>Jack Taylor</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            {provideIcon({ name: "telephone" })}

            <p>+123456789101</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            {provideIcon({ name: "location" })}
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
