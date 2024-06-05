"use client";
import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import iphone15 from "@/public/goodphone.webp";
import { contactValidator } from "@/lib/validator";
import { createContact } from "@/actions/product/action";

const ContactMain = () => {
  const initialValues = {
    fullName: "",
    Email: "",
    phoneNumber: "",
    Message: "",
  };

  const form = useForm<z.infer<typeof contactValidator>>({
    resolver: zodResolver(contactValidator),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof contactValidator>) {
    const data = await createContact(values);
    if (data) {
      toast.success("Your request was sent");
      console.log(data);
      form.reset();
    } else {
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 mb-32">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-10 ">
        <div>
          <Image src={iphone15} alt="iphone" />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center gap-10 bg-white rounded-xl shadow-2xl px-28 py-10 "
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      {...field}
                      className="rounded-2xl placeholder:text-slate-500 w-[200px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                      className="rounded-2xl placeholder:text-slate-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="phone"
                      placeholder="Phone Number"
                      {...field}
                      className="rounded-2xl placeholder:text-slate-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      typeof="text"
                      placeholder="Message"
                      {...field}
                      className="rounded-2xl placeholder:text-slate-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-black rounded-xl hover:bg-black hover:opacity-80 text-white px-3 py-1">
              {form.formState.isSubmitting ? "Submitting..." : "Contact Us"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactMain;
