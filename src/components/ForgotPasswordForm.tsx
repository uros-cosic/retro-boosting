"use client";
import { ForgotPasswordValues, forgotPasswordSchema } from "@/lib/formUtil";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { FaEnvelope } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { handleForgotPassword } from "@/lib/apiUtils";

function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (values: ForgotPasswordValues) => {
    // temp - will pass values to handleLogin
    setLoading(true);
    const data: any = await handleForgotPassword();
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full w-full flex flex-col space-y-10 max-w-xl mx-auto"
      >
        <p className="text-center leading-8">
          Enter the email address of the account you forgot the password for.
          <br /> If the account with that email exists we will send you a
          password reset link to your mail.
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="border-b border-light flex items-center space-x-3">
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
        <Button
          type="submit"
          className="bg-primary text-light text-lg font-normal w-full py-5 hover:bg-primary/90 transition-colors  "
          disabled={loading}
          aria-disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="text-lg text-center animate-spin" />
          ) : (
            "send"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default ForgotPasswordForm;
