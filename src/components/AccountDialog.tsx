import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PiUserCircleLight } from "react-icons/pi";
import { UserContent, UserContext } from "@/lib/UserContext";
import AccountForm from "./AccountForm";

function AccountDialog() {
  const { user, setUser } = useContext<UserContent>(UserContext);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-1/2 bg-secondary rounded px-2 md:px-5 flex items-center text-black hover:bg-secondary/80 transition-colors uppercase font-bold text-xs md:text-sm ">
          <PiUserCircleLight className="text-xl mr-1" />
          Account
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black text-white border border-primary">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center uppercase font-black">
            manage account
          </DialogTitle>
        </DialogHeader>
        <AccountForm />
      </DialogContent>
    </Dialog>
  );
}

export default AccountDialog;