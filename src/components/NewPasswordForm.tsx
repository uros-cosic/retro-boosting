"use client";
import { newPasswordSchema, newPasswordValues } from "@/lib/formUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { ImSpinner2 } from "react-icons/im";
import { updatePassword } from "@/lib/apiUtils";

function NewPasswordForm() {
  const form = useForm<newPasswordValues>({
    resolver: zodResolver(newPasswordSchema),
  });

  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const onSubmit = async (values: newPasswordValues) => {
    if (values.password !== values.passwordConfirm) {
      toast({
        title: "Password Error",
        description: "Passwords Should be the same",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    const data: any = await updatePassword(
      values.password,
      values.passwordConfirm
    );
    if (data.status === "success") {
      toast({
        title: "Password Changed",
        description: "Password Successfully Changed",
      });
    }
    setLoading(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-light space-y-10"
      >
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="bg-white text-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="passwordConfirm"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="bg-white text-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-primary text-white hover:bg-primary/90"
          disabled={loading}
          aria-disabled={loading}
        >
          {loading ? <ImSpinner2 className="text-xl animate-spin" /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default NewPasswordForm;
