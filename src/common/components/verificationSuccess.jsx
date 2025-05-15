"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Expecting a `Content` prop that's a React component
function VerificationSuccess({ Content }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[90%] sm:max-w-md p-6 text-center rounded-xl">
        {Content}
      </DialogContent>
    </Dialog>
  );
}

export default VerificationSuccess;
