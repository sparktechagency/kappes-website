"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import Link from "next/link";

// Business type options
const businessTypes = [
  "Restaurant",
  "Retail",
  "Healthcare",
  "Technology",
  "Education",
  "Professional Services",
  "Construction",
  "Manufacturing",
  "Entertainment",
  "Other",
];

// Province options
const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

// Territories
const territories = ["Northwest Territories", "Nunavut", "Yukon"];

// City options (simplified)
const cities = [
  "Toronto",
  "Montreal",
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Quebec City",
  "Winnipeg",
  "Halifax",
  "Victoria",
];

export default function BusinessListingForm() {
  const [logoFile, setLogoFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  const form = useForm({
    defaultValues: {
      businessName: "",
      businessType: "",
      businessEmail: "",
      phone: "",
      shortDescription: "",
      province: "",
      territory: "",
      city: "",
      detailAddress: "",
    },
  });

  const onSubmit = (data) => {
    // Include file data
    const formData = {
      ...data,
      logo: logoFile,
      coverPhoto: coverFile,
    };
    console.log(formData);
    // Here you would typically send this data to your backend
  };

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleCoverChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4 ">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-red-700">
            Add Your Business Listing
          </h1>
          <p className="text-gray-600">
            Join Our Directory and Connect with Thousands of Customers
          </p>
        </div>

        <Card className="w-full bg-[#f9f5f4] border-none">
          <CardContent className="pt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Add Business Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="businessName"
                      rules={{ required: "Business name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your Business name"
                              {...field}
                              className="bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessType"
                      rules={{ required: "Business type is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Type*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Select business category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {businessTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessEmail"
                      rules={{
                        required: "Business email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Email*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your business email address"
                              {...field}
                              className="bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{
                        required: "Phone number is required",
                        minLength: {
                          value: 10,
                          message: "Phone number must be at least 10 digits",
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone*</FormLabel>
                          <FormControl>
                            <div className="flex">
                              <div className="bg-gray-100 flex items-center px-3 border border-r-0 rounded-l">
                                <span>🇨🇦</span>
                              </div>
                              <Input
                                className="rounded-l-none bg-white"
                                placeholder="Enter your business phone number"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="logo"
                      render={() => (
                        <FormItem>
                          <FormLabel>Business logo*</FormLabel>
                          <FormControl>
                            <div
                              className="border rounded flex items-center justify-center p-2 h-10 bg-white cursor-pointer"
                              onClick={() =>
                                document.getElementById("logo-upload").click()
                              }
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              <span className="text-sm">Upload logo</span>
                              <input
                                id="logo-upload"
                                type="file"
                                accept="image/*"
                                className="hidden bg-white"
                                onChange={handleLogoChange}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                          {logoFile && (
                            <p className="text-xs text-gray-500 mt-1">
                              {logoFile.name}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="coverPhoto"
                      render={() => (
                        <FormItem>
                          <FormLabel>Cover Photo*</FormLabel>
                          <FormControl>
                            <div
                              className="border rounded flex items-center justify-center p-2 h-10 bg-white cursor-pointer"
                              onClick={() =>
                                document.getElementById("cover-upload").click()
                              }
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              <span className="text-sm">Upload logo</span>
                              <input
                                id="cover-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleCoverChange}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                          {coverFile && (
                            <p className="text-xs text-gray-500 mt-1">
                              {coverFile.name}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-6">
                    <FormField
                      control={form.control}
                      name="shortDescription"
                      rules={{
                        required: "Description is required",
                        minLength: {
                          value: 10,
                          message: "Description must be at least 10 characters",
                        },
                        maxLength: {
                          value: 500,
                          message: "Description must not exceed 500 characters",
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Short Description*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your business in a few sentences"
                              {...field}
                              className="resize-none bg-white"
                              rows={4}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Add Business Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="province"
                      rules={{ required: "Province is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Province*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Please choose your Province" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {provinces.map((province) => (
                                <SelectItem key={province} value={province}>
                                  {province}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="territory"
                      rules={{ required: "Territory is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Territory*</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Please choose your territory" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {territories.map((territory) => (
                                <SelectItem key={territory} value={territory}>
                                  {territory}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Please choose your city" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {cities.map((city) => (
                                <SelectItem key={city} value={city}>
                                  {city}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="detailAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Detail Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your detail address"
                              {...field}
                              className="bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link href="business-listing/verification">
                    <Button
                      type="submit"
                      className="bg-red-700 hover:bg-red-800 text-white px-8"
                    >
                      Continue
                    </Button>
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
