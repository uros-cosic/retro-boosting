"use client";
import React, { useState } from "react";
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
import { ContactFormValues, contactFormSchema } from "@/lib/formUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { ImSpinner2 } from "react-icons/im";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (values: ContactFormValues) => {
    // TODO: POST to backend, toast for success/error sendContactMessage
    setLoading(true);
  };

  return (
    <div className="py-10 px-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-light max-w-3xl mx-auto p-5 rounded-xl bg-dark uppercase space-y-5 border border-primary shadow-base shadow-primary"
        >
          <h1 className="font-normal text-3xl">contact us</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-base">name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name..."
                    {...field}
                    className="bg-white text-black text-xs placeholder:text-black font-bold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-base">email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="email..."
                    {...field}
                    type="email"
                    className="bg-white text-black text-xs placeholder:text-black font-bold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-base">subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="subject..."
                    {...field}
                    className="bg-white text-black text-xs placeholder:text-black font-bold"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-base">
                  question
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-white text-black text-xs placeholder:text-black font-bold"
                    placeholder="question..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-white text-black text-lg w-full py-5 hover:bg-gray-100 transition-colors uppercase border"
            disabled={loading}
            aria-disabled={loading}
          >
            {loading ? (
              <ImSpinner2 className="text-lg text-center animate-spin" />
            ) : (
              "send message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
