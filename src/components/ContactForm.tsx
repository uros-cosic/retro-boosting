"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormValues, contactFormSchema } from "@/lib/formUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";

function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = (values: ContactFormValues) => {
    // TODO: POST to backend, toast for success/error
  };

  return (
    <div className="py-10 px-1" id="contact">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-white max-w-3xl mx-auto p-5 rounded-xl bg-black shadow-xl uppercase space-y-5 border border-primary"
        >
          <h1 className="font-bold text-3xl">contact us</h1>
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
                    className="bg-white text-black  text-xs placeholder:text-black font-black"
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
                    className="bg-white text-black  text-xs placeholder:text-black font-black"
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
                    className="bg-white text-black  text-xs placeholder:text-black font-black"
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
                    className="bg-white text-black  text-xs placeholder:text-black font-black"
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
            className="bg-white text-black text-lg font-black w-full  py-5 hover:bg-white/90 transition-colors uppercase"
          >
            send message
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
