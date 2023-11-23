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
import { registerFormSchema, RegisterFormValues } from "@/lib/formUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (values: RegisterFormValues) => {
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
          name="username"
          render={({ field }) => (
            <FormItem className="border-b border-white flex items-center space-x-3">
              <FaUser className="text-xl text-primary" />
              <FormControl>
                <Input
                  placeholder="Username"
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
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem className="border-b border-white flex items-center space-x-3">
              <FaLock className="text-xl text-primary" />
              <FormControl>
                <Input
                  placeholder="Re-enter Password"
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
          register
        </Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
