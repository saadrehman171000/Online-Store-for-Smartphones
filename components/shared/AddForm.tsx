"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

import { productSchema } from "@/lib/validator";
import { imageValidator } from "@/lib/validator";
import { brandValidator } from "@/lib/validator";
import { createProduct } from "@/app/api/products/route";

const AddForm = () => {
  const initialValues = {
    name: "",
    price: "",
    stock: "",
    images: "",
    color: "",
    brand: "",
    description: "",
  };

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof productSchema>) {}
  return (
    <div className="flex flex-col gap-10 items-start justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Product Name *</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Name"
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
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Product Price *</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="$500"
                        {...field}
                        className="max-w-sm rounded-2xl  placeholder:text-slate-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">
                      Product In Stock *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Stock of item"
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
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">
                      Product Images *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Images"
                        {...field}
                        className="max-w-sm rounded-2xl  placeholder:text-slate-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Product Color *</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Color"
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
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Product Brand *</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Brand Name"
                        {...field}
                        className="max-w-sm rounded-2xl placeholder:text-slate-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="bg-black text-white px-3 py-1 hover:bg-black hover:text-white rounded-2xl hover:opacity-80"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddForm;
