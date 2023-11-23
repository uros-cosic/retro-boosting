"use client";
import React from "react";
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
import Link from "next/link";

function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (values: LoginFormValues) => {
    // todo
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
          className="bg-primary text-white text-lg font-bold w-full py-5 hover:bg-primary/90 transition-colors uppercase"
        >
          login
        </Button>
        <Link
          href="/forgotPassword"
          className="text-primary underline hover:text-primary/90 text-sm"
        >
          Forgot Password
        </Link>
      </form>
    </Form>
  );
}

export default LoginForm;
