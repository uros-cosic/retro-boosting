"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutValues, checkoutSchema } from "@/lib/formUtil";
import Logo from "./Logo";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { FaCreditCard } from "react-icons/fa";
import PayWithPaypal from "./PayWithPaypal";

function CheckoutForm() {
  const form = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    mode: "onSubmit",
  });

  const onSubmit = (values: CheckoutValues) => {
    // TODO: Pay With Card
  };

  return (
    <div className="text-black p-5 lg:py-10 lg:px-20 w-full flex justify-end">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full lg:w-4/5 space-y-5"
        >
          <Logo />
          <div className="w-full">
            <PayWithPaypal />
          </div>
          <div className="before:border-t flex before:flex-1 items-center before:border-grayed after:border-t after:flex-1 after:border-grayed text-gray-500">
            <p className="text-center   mx-4 font-normal text-sm">or</p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-base">
                  Contact Information
                </FormLabel>
                <FormControl>
                  <div>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      type="email"
                      className="bg-white text-black text-xs"
                    />
                    <div className="flex items-end space-x-2 py-2">
                      <Checkbox
                        id="newsletter"
                        className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white"
                      />
                      <Label htmlFor="newsletter" className="cursor-pointer">
                        Keep me up to date on news and exclusive offers
                      </Label>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-3 text-gray-500">
            <Button
              type="submit"
              className="bg-black text-white px-5 py-4"
              disabled={true}
              aria-disabled={true}
            >
              <FaCreditCard className="mr-2" />
              Pay With Card
            </Button>
            <p>coming soon...</p>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CheckoutForm;
