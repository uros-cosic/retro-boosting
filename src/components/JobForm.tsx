"use client";
import { jobSchema, jobValues } from "@/lib/formUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ImSpinner2 } from "react-icons/im";
import { sendJobApplication } from "@/lib/apiUtils";
import { useToast } from "./ui/use-toast";

function JobForm() {
  const form = useForm<jobValues>({
    resolver: zodResolver(jobSchema),
  });
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const onSubmit = async (values: jobValues) => {
    setLoading(true);
    const data = await sendJobApplication(values);
    toast({
      title: "Application Sent",
      description: "Job Application Sent Successfully",
    });
    setLoading(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="John Doe"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  type="email"
                  {...field}
                  placeholder="Email"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="type"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="Booster/Arena Booster/Coach"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="currentRank"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Rank:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="Challenger"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="server"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Server:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="EUW"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="opgg"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>OP.GG Link:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="EUW"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="mainLanes"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main Lanes:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="MID, TOP"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="mainChampions"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Main Champions:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="Ahri, Tryndamere"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="country"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="Germany"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="languages"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="English, German"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="discord"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discord ID:</FormLabel>
              <FormControl>
                <Input
                  className="bg-white text-black"
                  {...field}
                  placeholder="Discord ID"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex w-full h-full items-end">
          <Button
            type="submit"
            className="w-full bg-black text-white border hover:bg-black/20"
            disabled={loading}
            aria-disabled={loading}
          >
            {loading ? (
              <ImSpinner2 className="text-xl animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default JobForm;
