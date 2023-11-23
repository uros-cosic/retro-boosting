import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PiUserCircleLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import LoginForm from "./LoginForm";

function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-1/2 bg-black rounded px-2 md:px-5 border-b-2 border-r-2 border-secondary flex items-center hover:opacity-80 transition-colors uppercase font-bold text-xs md:text-sm ">
          <PiUserCircleLight className="text-xl mr-1" />
          login
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black text-white border border-primary">
        <DialogHeader>
          <DialogTitle>
            <h1 className="text-3xl text-center uppercase font-black">login</h1>
          </DialogTitle>
        </DialogHeader>
        <LoginForm />
        <div className="before:border-t flex before:flex-1 items-center before:border-white after:border-t after:flex-1 after:border-white text-white">
          <p className="text-center uppercase mx-4 font-semibold text-sm">or</p>
        </div>
        <div className="w-full">
          <Button className="bg-primary text-white text-lg font-bold w-full py-5 hover:bg-primary/90 transition-colors uppercase">
            <FaGoogle className="mr-3 text-lg" />
            use google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
