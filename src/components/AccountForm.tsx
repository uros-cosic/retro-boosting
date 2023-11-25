import React, { useState, useContext } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { UserContext, UserContent } from "@/lib/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountFormSchema, AccountFormValues } from "@/lib/formUtil";
import { Input } from "./ui/input";
import { FaUser, FaLock, FaPencilAlt } from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ImSpinner2 } from "react-icons/im";

function AccountForm() {
  const [loading, setLoading] = useState(false);

  const { user, setUser } = useContext<UserContent>(UserContext);

  const onSubmit = (values: AccountFormValues) => {
    setLoading(true);
    // TODO
  };

  //   TODO: IMAGE CHANGE

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    mode: "onSubmit",
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-full w-full flex flex-col space-y-5"
      >
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center">
              <div className="relative w-fit">
                <Avatar className="h-24 w-fit">
                  <AvatarImage
                    src={user.data.avatar}
                    className="bg-white h-full w-auto"
                  />
                  <AvatarFallback className="text-white">
                    {user.data.name}
                  </AvatarFallback>
                </Avatar>
                <Label
                  htmlFor={user.data.name + "-file"}
                  className="absolute bg-black text-white p-2 rounded-full border-white cursor-pointer border top-0 left-full transform -translate-x-full"
                >
                  <FaPencilAlt className="text-white" />
                </Label>
              </div>
              <FormControl>
                <Input
                  id={user.data.name + "-file"}
                  placeholder={user.data.name}
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  {...field}
                  className="hidden"
                />
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="border-b border-white flex items-center space-x-3">
              <FaUser className="text-xl text-primary" />
              <FormControl>
                <Input
                  placeholder={user.data.name}
                  {...field}
                  className="border-none rounded-none p-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />
        <div className="flex space-x-3">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="border-b border-white flex items-center space-x-3">
                <FaLock className="text-xl text-primary" />
                <FormControl>
                  <Input
                    placeholder="New Password"
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
                    placeholder="Confirm New Password"
                    type="password"
                    {...field}
                    className="border-none rounded-none p-0 focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="bg-primary text-white text-lg font-bold w-full py-5 hover:bg-primary/90 transition-colors uppercase"
          disabled={loading}
          aria-disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="text-lg text-center animate-spin" />
          ) : (
            "update me"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default AccountForm;
