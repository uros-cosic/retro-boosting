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
    <div className="py-10 px-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-white max-w-5xl mx-auto p-10 rounded-xl bg-primary uppercase space-y-5"
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
                    className="bg-gray-200 text-black"
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
                    className="bg-gray-200 text-black"
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
                    className="bg-gray-200 text-black"
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
                    className="bg-gray-200 text-black"
                    placeholder="question..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex items-center justify-center">
            <Button
              type="submit"
              className="bg-secondary text-white font-medium uppercase px-12 py-6 hover:bg-secondary/90 transition-colors"
            >
              send message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
