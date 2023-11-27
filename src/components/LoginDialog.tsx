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
  const [loading, setLoading] = useState(false);

  const handleGoogleClick = async () => {
    // TODO
    setLoading(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-1/2 bg-black rounded px-2 md:px-5 border-b-2 border-r-2 border-secondary flex items-center hover:opacity-80 transition-colors uppercase font-normal text-xs md:text-sm ">
          <PiUserCircleLight className="text-xl mr-1" />
          login
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black text-white border border-primary">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center uppercase font-bold">
            login
          </DialogTitle>
        </DialogHeader>
        <LoginForm />
        <DialogClose asChild>
          <Link
            href="/forgotPassword"
            className="text-primary underline hover:text-primary/90 text-sm"
          >
            Forgot Password
          </Link>
        </DialogClose>
        <div className="before:border-t flex before:flex-1 items-center before:border-white after:border-t after:flex-1 after:border-white text-white">
          <p className="text-center uppercase mx-4 font-normal text-sm">or</p>
        </div>
        <div className="w-full">
          <Button
            className="bg-primary text-white text-lg font-normal w-full py-5 hover:bg-primary/90 transition-colors uppercase"
            onClick={handleGoogleClick}
            disabled={loading}
            aria-disabled={loading}
          >
            {loading ? (
              <ImSpinner2 className="text-lg text-center animate-spin" />
            ) : (
              <>
                <FaGoogle className="mr-3 text-lg" />
                use google
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
