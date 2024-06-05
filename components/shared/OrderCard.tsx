"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import iphone from "@/public/iphone-card-40-iphone15prohero-202309.jpeg";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  createOrder,
  getProductById,
  getUserById,
} from "@/actions/product/action";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { orderValidator } from "@/lib/validator";
import { Input } from "../ui/input";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useParams, usePathname } from "next/navigation";
import NewComponent from "./NewComponent";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface OrderCardProps {
  id: number;
  name: string;
  price: string;
  stock: string;
  images: string;
  color: string;
  description: string;
  brandName: string;
}

const OrderCard = ({
  id,
  name,
  price,
  stock,
  images,
  color,
  description,
  brandName,
}: OrderCardProps) => {
  const router = useRouter();

  const { user } = useKindeBrowserClient();
  const userId = user?.id ?? "";

  const productId = usePathname();
  const values = productId.split("/");
  const actualProductId = values[2];
  console.log(actualProductId);

  const initialValues = {
    shippingAddress: "",
    billingAddress: "",
    phoneNumber: "",
    postcode: "",
  };

  const form = useForm<z.infer<typeof orderValidator>>({
    resolver: zodResolver(orderValidator),
    defaultValues: initialValues,
  });
  async function onSubmit(values: z.infer<typeof orderValidator>) {
    console.log(values);
    const data = await createOrder({ ...values }, userId, actualProductId);
    console.log(data);
    if (data.success) {
      toast.success(`${user?.given_name}, your order has been placed`);
    } else {
      toast.error(`Sorry, ${user?.given_name} something went wrong!`);
    }
  }
  return (
    <div className="max-w-7xl mx-auto w-full p-5 px-10 mb-32">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between px-48 py-2">
        <Image
          src={images}
          alt="iphone"
          width={300}
          height={300}
          className="hidden md:block"
        />
        <div className="flex flex-col items-start justify-center gap-10 px-10 py-10">
          <h1 className="font-extrabold tracking-tighter text-3xl capitalize border-b-2 border-red-500 py-2">
            {name}
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <FormField
                control={form.control}
                name="shippingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">
                      Shipping Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Shipping Address"
                        {...field}
                        className="md:max-w-sm w-[300px] rounded-2xl  placeholder:text-slate-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="billingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Billing Address</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Billing Address"
                        {...field}
                        className="max-w-sm rounded-2xl  placeholder:text-slate-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Zip Code</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Zip Code"
                        {...field}
                        className="max-w-sm rounded-2xl  placeholder:text-slate-400"
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
                        type="text"
                        placeholder="Phone Number"
                        {...field}
                        className="max-w-sm rounded-2xl  placeholder:text-slate-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="tracking-tighter bg-black text-white rounded-xl hover:bg-black hover:opacity-80"
              >
                {form.formState.isSubmitting
                  ? "Placing Order..."
                  : "Place Order"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
