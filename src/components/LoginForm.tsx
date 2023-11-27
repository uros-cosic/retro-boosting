"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { loginFormSchema, LoginFormValues } from "@/lib/formUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { UserContent, UserContext } from "@/lib/UserContext";
import { UserDataInterface, handleLogin } from "@/lib/apiUtils";
import { ImSpinner2 } from "react-icons/im";

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useContext<UserContent>(UserContext);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (values: LoginFormValues) => {
    // temp - will pass values to handleLogin
    setLoading(true);
    const data: UserDataInterface | any = await handleLogin();
    if (data.status === "success") {
      setUser(data);
      window.location.assign("/");
    } else {
      // handle 404 / 500
    }
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full w-full flex flex-col space-y-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="border-b border-white flex items-center space-x-3">
              <FaEnvelope className="text-xl text-primary" />
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  {...field}
                  className="border-none rounded-none p-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="border-b border-white flex items-center space-x-3">
              <FaLock className="text-xl text-primary" />
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className="border-none rounded-none p-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-primary text-white text-lg font-normal w-full py-5 hover:bg-primary/90 transition-colors uppercase"
          disabled={loading}
          aria-disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="text-lg text-center animate-spin" />
          ) : (
            "login"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
