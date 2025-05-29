// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// export default function PersonalInfo({ selectedMenu }) {
//   console.log("selectedMenu", selectedMenu);

//   if (selectedMenu !== 1) return null;

//   return (
//     <div className="flex flex-col gap-4 w-full">
//       <PersonalInfoCard />
//       <ShippingAddressCard />
//     </div>
//   );
// }

// function PersonalInfoCard() {
//   return (
//     <Card className="p-0 w-full h-fit md:w-full lg:w-[40rem] lx:w-[60rem] overflow-hidden">
//       <div className="bg-kappes px-4 flex items-center justify-between">
//         <div className="flex items-center gap-4 text-white">
//           <span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="25"
//               viewBox="0 0 24 25"
//               fill="none"
//             >
//               <path
//                 d="M2 21.4999C1.99986 20.2061 2.31352 18.9316 2.91408 17.7856C3.51464 16.6396 4.38419 15.6564 5.44815 14.9202C6.51212 14.1841 7.73876 13.7169 9.02288 13.5589C10.307 13.4009 11.6103 13.5567 12.821 14.0129"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M21.378 17.1261C21.7763 16.7278 22.0001 16.1875 22.0001 15.6241C22.0001 15.0608 21.7763 14.5205 21.378 14.1221C20.9796 13.7238 20.4393 13.5 19.876 13.5C19.3126 13.5 18.7723 13.7238 18.374 14.1221L14.364 18.1341C14.1262 18.3718 13.9522 18.6655 13.858 18.9881L13.021 21.8581C12.9959 21.9442 12.9944 22.0354 13.0166 22.1222C13.0389 22.2091 13.084 22.2883 13.1474 22.3517C13.2108 22.4151 13.2901 22.4603 13.3769 22.4825C13.4637 22.5048 13.5549 22.5032 13.641 22.4781L16.511 21.6411C16.8336 21.5469 17.1274 21.3729 17.365 21.1351L21.378 17.1261Z"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M10 13.5C12.7614 13.5 15 11.2614 15 8.5C15 5.73858 12.7614 3.5 10 3.5C7.23858 3.5 5 5.73858 5 8.5C5 11.2614 7.23858 13.5 10 13.5Z"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//           <p>Personal Information</p>
//         </div>
//         <Button className="bg-transparent hover:bg-transparent cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="19"
//             height="19"
//             viewBox="0 0 19 19"
//             fill="none"
//           >
//             <path
//               d="M10.4004 11.85L7.10037 12.55C6.60037 12.65 6.10037 12.25 6.20037 11.65L6.90037 8.35C7.00037 8.05 7.10037 7.85 7.30037 7.65L13.5004 1.45C14.1004 0.85 15.0004 0.85 15.6004 1.45L17.3004 3.15C17.9004 3.75 17.9004 4.65 17.3004 5.25L11.2004 11.45C10.9004 11.65 10.7004 11.75 10.4004 11.85Z"
//               stroke="white"
//               strokeWidth="1.3"
//               strokeMiterlimit="10"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M15.3 10.2502V15.1502C15.3 16.5502 14.2 17.6502 12.8 17.6502H3.5C2.1 17.6502 1 16.5502 1 15.1502V5.9502C1 4.5502 2.1 3.4502 3.5 3.4502H8.4"
//               stroke="white"
//               strokeWidth="1.3"
//               strokeMiterlimit="10"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Button>
//       </div>
//       <div className="flex flex-col gap-4 p-5 -mt-5">
//         <p className="flex items-center gap-4">
//           <span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//             >
//               <path
//                 d="M9.99919 10.8333C12.3004 10.8333 14.1659 8.96785 14.1659 6.66667C14.1659 4.36548 12.3004 2.5 9.99919 2.5C7.698 2.5 5.83252 4.36548 5.83252 6.66667C5.83252 8.96785 7.698 10.8333 9.99919 10.8333Z"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M16.6659 17.4997C16.6659 15.7316 15.9635 14.0359 14.7132 12.7856C13.463 11.5354 11.7673 10.833 9.99919 10.833C8.23108 10.833 6.53538 11.5354 5.28514 12.7856C4.0349 14.0359 3.33252 15.7316 3.33252 17.4997"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//           Jack Taylor
//         </p>
//         <p className="flex items-center gap-4">
//           <span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//             >
//               <path
//                 d="M18.3337 14.1004V16.6004C18.3346 16.8325 18.2871 17.0622 18.1941 17.2749C18.1011 17.4875 17.9648 17.6784 17.7937 17.8353C17.6227 17.9922 17.4208 18.1116 17.201 18.186C16.9811 18.2603 16.7482 18.288 16.517 18.2671C13.9527 17.9884 11.4895 17.1122 9.32535 15.7087C7.31187 14.4293 5.6048 12.7222 4.32535 10.7087C2.917 8.53474 2.04055 6.05957 1.76702 3.48374C1.74619 3.2533 1.77358 3.02104 1.84743 2.80176C1.92129 2.58248 2.03999 2.38098 2.19599 2.21009C2.35199 2.0392 2.54186 1.90266 2.75351 1.80917C2.96517 1.71569 3.19397 1.66729 3.42535 1.66707H5.92535C6.32977 1.66309 6.72184 1.80631 7.02849 2.07002C7.33513 2.33373 7.53542 2.69995 7.59202 3.10041C7.69754 3.90046 7.89323 4.68601 8.17535 5.44207C8.28747 5.74034 8.31174 6.0645 8.24527 6.37614C8.17881 6.68778 8.0244 6.97383 7.80035 7.20041L6.74202 8.25874C7.92831 10.345 9.65573 12.0724 11.742 13.2587L12.8004 12.2004C13.0269 11.9764 13.313 11.8219 13.6246 11.7555C13.9363 11.689 14.2604 11.7133 14.5587 11.8254C15.3147 12.1075 16.1003 12.3032 16.9004 12.4087C17.3052 12.4658 17.6749 12.6697 17.9391 12.9817C18.2034 13.2936 18.3438 13.6917 18.3337 14.1004Z"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M11.709 1.66699C13.4075 1.84597 14.9941 2.59932 16.2064 3.80248C17.4186 5.00563 18.1839 6.5865 18.3757 8.28366"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M11.709 5C12.5286 5.16161 13.2807 5.56586 13.8676 6.16026C14.4546 6.75466 14.8494 7.51177 15.0007 8.33333"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//           +123456789101
//         </p>
//         <p className="flex items-center gap-4">
//           <span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//             >
//               <path
//                 d="M16.6667 3.33301H3.33341C2.41294 3.33301 1.66675 4.0792 1.66675 4.99967V14.9997C1.66675 15.9201 2.41294 16.6663 3.33341 16.6663H16.6667C17.5872 16.6663 18.3334 15.9201 18.3334 14.9997V4.99967C18.3334 4.0792 17.5872 3.33301 16.6667 3.33301Z"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M18.3334 5.83301L10.8584 10.583C10.6011 10.7442 10.3037 10.8297 10.0001 10.8297C9.69648 10.8297 9.39902 10.7442 9.14175 10.583L1.66675 5.83301"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//           Demo@gmail.com
//         </p>
//       </div>
//     </Card>
//   );
// }

// const ShippingAddressCard = () => {
//   return (
//     <Card className="p-0 w-full h-fit md:w-full lg:w-[40rem] overflow-hidden">
//       <div className="bg-kappes px-4 flex items-center justify-between">
//         <div className="flex items-center gap-4 text-white">
//           <span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="25"
//               viewBox="0 0 24 25"
//               fill="none"
//             >
//               <path
//                 d="M2 21.4999C1.99986 20.2061 2.31352 18.9316 2.91408 17.7856C3.51464 16.6396 4.38419 15.6564 5.44815 14.9202C6.51212 14.1841 7.73876 13.7169 9.02288 13.5589C10.307 13.4009 11.6103 13.5567 12.821 14.0129"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M21.378 17.1261C21.7763 16.7278 22.0001 16.1875 22.0001 15.6241C22.0001 15.0608 21.7763 14.5205 21.378 14.1221C20.9796 13.7238 20.4393 13.5 19.876 13.5C19.3126 13.5 18.7723 13.7238 18.374 14.1221L14.364 18.1341C14.1262 18.3718 13.9522 18.6655 13.858 18.9881L13.021 21.8581C12.9959 21.9442 12.9944 22.0354 13.0166 22.1222C13.0389 22.2091 13.084 22.2883 13.1474 22.3517C13.2108 22.4151 13.2901 22.4603 13.3769 22.4825C13.4637 22.5048 13.5549 22.5032 13.641 22.4781L16.511 21.6411C16.8336 21.5469 17.1274 21.3729 17.365 21.1351L21.378 17.1261Z"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M10 13.5C12.7614 13.5 15 11.2614 15 8.5C15 5.73858 12.7614 3.5 10 3.5C7.23858 3.5 5 5.73858 5 8.5C5 11.2614 7.23858 13.5 10 13.5Z"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//           <p>Personal Information</p>
//         </div>
//         <Button className="bg-transparent hover:bg-transparent cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="19"
//             height="19"
//             viewBox="0 0 19 19"
//             fill="none"
//           >
//             <path
//               d="M10.4004 11.85L7.10037 12.55C6.60037 12.65 6.10037 12.25 6.20037 11.65L6.90037 8.35C7.00037 8.05 7.10037 7.85 7.30037 7.65L13.5004 1.45C14.1004 0.85 15.0004 0.85 15.6004 1.45L17.3004 3.15C17.9004 3.75 17.9004 4.65 17.3004 5.25L11.2004 11.45C10.9004 11.65 10.7004 11.75 10.4004 11.85Z"
//               stroke="white"
//               strokeWidth="1.3"
//               strokeMiterlimit="10"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M15.3 10.2502V15.1502C15.3 16.5502 14.2 17.6502 12.8 17.6502H3.5C2.1 17.6502 1 16.5502 1 15.1502V5.9502C1 4.5502 2.1 3.4502 3.5 3.4502H8.4"
//               stroke="white"
//               strokeWidth="1.3"
//               strokeMiterlimit="10"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Button>
//       </div>
//       <div className="flex flex-col gap-4 p-5 -mt-5">
//         <p className="flex items-center gap-4">
//           <span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//             >
//               <path
//                 d="M9.99919 10.8333C12.3004 10.8333 14.1659 8.96785 14.1659 6.66667C14.1659 4.36548 12.3004 2.5 9.99919 2.5C7.698 2.5 5.83252 4.36548 5.83252 6.66667C5.83252 8.96785 7.698 10.8333 9.99919 10.8333Z"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M16.6659 17.4997C16.6659 15.7316 15.9635 14.0359 14.7132 12.7856C13.463 11.5354 11.7673 10.833 9.99919 10.833C8.23108 10.833 6.53538 11.5354 5.28514 12.7856C4.0349 14.0359 3.33252 15.7316 3.33252 17.4997"
//                 stroke="#3A3A3A"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//           Jack Taylor
//         </p>
//       </div>
//     </Card>
//   );
// };

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { TbHome } from "react-icons/tb";
export default function PersonalInfo({ selectedMenu }) {
  if (selectedMenu !== 1) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      <PersonalInfoCard />
      <ShippingAddressCard />
    </div>
  );
}

function PersonalInfoCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="p-0 w-full h-fit md:w-full lg:w-[40rem] lx:w-[60rem] overflow-hidden">
        <div className="bg-kappes px-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M2 21.4999C1.99986 20.2061 2.31352 18.9316 2.91408 17.7856C3.51464 16.6396 4.38419 15.6564 5.44815 14.9202C6.51212 14.1841 7.73876 13.7169 9.02288 13.5589C10.307 13.4009 11.6103 13.5567 12.821 14.0129"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.378 17.1261C21.7763 16.7278 22.0001 16.1875 22.0001 15.6241C22.0001 15.0608 21.7763 14.5205 21.378 14.1221C20.9796 13.7238 20.4393 13.5 19.876 13.5C19.3126 13.5 18.7723 13.7238 18.374 14.1221L14.364 18.1341C14.1262 18.3718 13.9522 18.6655 13.858 18.9881L13.021 21.8581C12.9959 21.9442 12.9944 22.0354 13.0166 22.1222C13.0389 22.2091 13.084 22.2883 13.1474 22.3517C13.2108 22.4151 13.2901 22.4603 13.3769 22.4825C13.4637 22.5048 13.5549 22.5032 13.641 22.4781L16.511 21.6411C16.8336 21.5469 17.1274 21.3729 17.365 21.1351L21.378 17.1261Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13.5C12.7614 13.5 15 11.2614 15 8.5C15 5.73858 12.7614 3.5 10 3.5C7.23858 3.5 5 5.73858 5 8.5C5 11.2614 7.23858 13.5 10 13.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p>Personal Information</p>
          </div>
          <Button
            className="bg-transparent hover:bg-transparent cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M10.4004 11.85L7.10037 12.55C6.60037 12.65 6.10037 12.25 6.20037 11.65L6.90037 8.35C7.00037 8.05 7.10037 7.85 7.30037 7.65L13.5004 1.45C14.1004 0.85 15.0004 0.85 15.6004 1.45L17.3004 3.15C17.9004 3.75 17.9004 4.65 17.3004 5.25L11.2004 11.45C10.9004 11.65 10.7004 11.75 10.4004 11.85Z"
                stroke="white"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.3 10.2502V15.1502C15.3 16.5502 14.2 17.6502 12.8 17.6502H3.5C2.1 17.6502 1 16.5502 1 15.1502V5.9502C1 4.5502 2.1 3.4502 3.5 3.4502H8.4"
                stroke="white"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className="flex flex-col gap-4 p-5 -mt-5">
          <p className="flex items-center gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99919 10.8333C12.3004 10.8333 14.1659 8.96785 14.1659 6.66667C14.1659 4.36548 12.3004 2.5 9.99919 2.5C7.698 2.5 5.83252 4.36548 5.83252 6.66667C5.83252 8.96785 7.698 10.8333 9.99919 10.8333Z"
                  stroke="#3A3A3A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6659 17.4997C16.6659 15.7316 15.9635 14.0359 14.7132 12.7856C13.463 11.5354 11.7673 10.833 9.99919 10.833C8.23108 10.833 6.53538 11.5354 5.28514 12.7856C4.0349 14.0359 3.33252 15.7316 3.33252 17.4997"
                  stroke="#3A3A3A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Jack Taylor
          </p>
          <p className="flex items-center gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.3337 14.1004V16.6004C18.3346 16.8325 18.2871 17.0622 18.1941 17.2749C18.1011 17.4875 17.9648 17.6784 17.7937 17.8353C17.6227 17.9922 17.4208 18.1116 17.201 18.186C16.9811 18.2603 16.7482 18.288 16.517 18.2671C13.9527 17.9884 11.4895 17.1122 9.32535 15.7087C7.31187 14.4293 5.6048 12.7222 4.32535 10.7087C2.917 8.53474 2.04055 6.05957 1.76702 3.48374C1.74619 3.2533 1.77358 3.02104 1.84743 2.80176C1.92129 2.58248 2.03999 2.38098 2.19599 2.21009C2.35199 2.0392 2.54186 1.90266 2.75351 1.80917C2.96517 1.71569 3.19397 1.66729 3.42535 1.66707H5.92535C6.32977 1.66309 6.72184 1.80631 7.02849 2.07002C7.33513 2.33373 7.53542 2.69995 7.59202 3.10041C7.69754 3.90046 7.89323 4.68601 8.17535 5.44207C8.28747 5.74034 8.31174 6.0645 8.24527 6.37614C8.17881 6.68778 8.0244 6.97383 7.80035 7.20041L6.74202 8.25874C7.92831 10.345 9.65573 12.0724 11.742 13.2587L12.8004 12.2004C13.0269 11.9764 13.313 11.8219 13.6246 11.7555C13.9363 11.689 14.2604 11.7133 14.5587 11.8254C15.3147 12.1075 16.1003 12.3032 16.9004 12.4087C17.3052 12.4658 17.6749 12.6697 17.9391 12.9817C18.2034 13.2936 18.3438 13.6917 18.3337 14.1004Z"
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
            </span>
            +123456789101
          </p>
          <p className="flex items-center gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.6667 3.33301H3.33341C2.41294 3.33301 1.66675 4.0792 1.66675 4.99967V14.9997C1.66675 15.9201 2.41294 16.6663 3.33341 16.6663H16.6667C17.5872 16.6663 18.3334 15.9201 18.3334 14.9997V4.99967C18.3334 4.0792 17.5872 3.33301 16.6667 3.33301Z"
                  stroke="#3A3A3A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3334 5.83301L10.8584 10.583C10.6011 10.7442 10.3037 10.8297 10.0001 10.8297C9.69648 10.8297 9.39902 10.7442 9.14175 10.583L1.66675 5.83301"
                  stroke="#3A3A3A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Demo@gmail.com
          </p>
        </div>
      </Card>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Personal Information</DialogTitle>
            <DialogDescription>
              You can edit your personal info here.
            </DialogDescription>
          </DialogHeader>
          {/* Put your edit form here */}
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 rounded"
              defaultValue="Jack Taylor"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-2 rounded"
              defaultValue="+123456789101"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              defaultValue="Demo@gmail.com"
            />
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)} className="bg-kappes">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)} className="bg-kappes">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

const ShippingAddressCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="p-0 w-full h-fit md:w-full lg:w-[40rem] overflow-hidden">
        <div className="bg-kappes px-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <span>
              <TbHome size={25} />
            </span>
            <p>Shipping Address</p>
          </div>
          <Button
            className="bg-transparent hover:bg-transparent cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M10.4004 11.85L7.10037 12.55C6.60037 12.65 6.10037 12.25 6.20037 11.65L6.90037 8.35C7.00037 8.05 7.10037 7.85 7.30037 7.65L13.5004 1.45C14.1004 0.85 15.0004 0.85 15.6004 1.45L17.3004 3.15C17.9004 3.75 17.9004 4.65 17.3004 5.25L11.2004 11.45C10.9004 11.65 10.7004 11.75 10.4004 11.85Z"
                stroke="white"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.3 10.2502V15.1502C15.3 16.5502 14.2 17.6502 12.8 17.6502H3.5C2.1 17.6502 1 16.5502 1 15.1502V5.9502C1 4.5502 2.1 3.4502 3.5 3.4502H8.4"
                stroke="white"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className="flex flex-col gap-4 p-5 -mt-5">
          <p className="flex items-center gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99919 10.8333C12.3004 10.8333 14.1659 8.96785 14.1659 6.66667C14.1659 4.36548 12.3004 2.5 9.99919 2.5C7.698 2.5 5.83252 4.36548 5.83252 6.66667C5.83252 8.96785 7.698 10.8333 9.99919 10.8333Z"
                  stroke="#3A3A3A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6659 17.4997C16.6659 15.7316 15.9635 14.0359 14.7132 12.7856C13.463 11.5354 11.7673 10.833 9.99919 10.833C8.23108 10.833 6.53538 11.5354 5.28514 12.7856C4.0349 14.0359 3.33252 15.7316 3.33252 17.4997"
                  stroke="#3A3A3A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Jack Taylor
          </p>
        </div>
      </Card>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Shipping Address</DialogTitle>
            <DialogDescription>
              Update your shipping address details here.
            </DialogDescription>
          </DialogHeader>
          {/* Edit form inputs */}
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Address"
              className="border p-2 rounded"
              defaultValue="123 Main St, Springfield"
            />
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border p-2 rounded"
            />
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)} className="bg-kappes">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)} className="bg-kappes">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
