import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaGoogle } from "react-icons/fa";
import RegisterForm from "./RegisterForm";
import { Button } from "@/components/ui/button";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { ImSpinner2 } from "react-icons/im";

function RegisterDialog() {
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleGoogleClick = async () => {
    setLoading(true);
  };

  return (
    <Dialog onOpenChange={(isOpen) => setDialogOpen(isOpen)} open={dialogOpen}>
      <DialogTrigger asChild>
        <Button className="h-1/2 bg-light rounded px-2 md:px-5 flex items-center text-dark hover:bg-light/80 transition-colors uppercase font-black text-xs md:text-sm">
          <PiUserCirclePlusLight className="text-xl mr-1" />
          register
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-dark text-light border border-primary z-[100]">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center uppercase font-bold">
            register
          </DialogTitle>
        </DialogHeader>
        <RegisterForm setDialogOpen={setDialogOpen} />
        <div className="before:border-t flex before:flex-1 items-center before:border-light after:border-t after:flex-1 after:border-light text-light">
          <p className="text-center uppercase mx-4 font-normal text-sm">or</p>
        </div>
        <div className="w-full">
          <Button
            className="bg-primary text-light text-lg font-normal w-full py-5 hover:bg-primary/90 transition-colors uppercase"
            disabled={loading}
            aria-disabled={loading}
            onClick={handleGoogleClick}
          >
            <FaGoogle className="mr-3 text-lg" />
            use google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RegisterDialog;
