import React, { useContext, useState } from "react";
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
import { UserContent, UserContext } from "@/lib/UserContext";
import { ImSpinner2 } from "react-icons/im";
import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";

function LoginDialog() {
  const { user, setUser } = useContext<UserContent>(UserContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoogleClick = async () => {
    // TODO
    setLoading(true);
  };

  return (
    <Dialog onOpenChange={(isOpen) => setDialogOpen(isOpen)} open={dialogOpen}>
      <DialogTrigger asChild>
        <Button className="h-1/2 bg-dark rounded px-2 md:px-5 border-b-2 border-r-2 border-light flex items-center hover:opacity-80 transition-colors   font-black text-xs md:text-sm ">
          <PiUserCircleLight className="text-xl mr-1" />
          login
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-dark text-light border border-primary z-[100]">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center   font-bold">
            login
          </DialogTitle>
        </DialogHeader>
        <LoginForm setDialogOpen={setDialogOpen} />
        <DialogClose asChild>
          <Link
            href="/forgotPassword"
            className="text-primary underline hover:text-primary/90 text-sm"
          >
            Forgot Password
          </Link>
        </DialogClose>
        <div className="before:border-t flex before:flex-1 items-center before:border-light after:border-t after:flex-1 after:border-light text-light">
          <p className="text-center   mx-4 font-normal text-sm">or</p>
        </div>
        <div className="w-full">
          <Button
            className="bg-primary text-light text-lg font-normal w-full py-5 hover:bg-primary/90 transition-colors  "
            onClick={handleGoogleClick}
            disabled={loading}
            aria-disabled={loading}
          >
            <FaGoogle className="mr-3 text-lg" />
            use google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
