"use client";
import React, { useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { productSchema } from "@/lib/validator";
import { Textarea } from "../ui/textarea";
import { FileUploader } from "./FileUploader";
import { useUploadThing } from "@/util/uploadthing";
import { createProduct } from "@/actions/product/action";

interface Brand {
  id: number;
  brandName: string;
}

const AddForm = ({ brands }: { brands: Brand[] }) => {
  console.log(brands);

  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("imageUploader");
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
  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
    form.setValue("brand", brandName);
  };

  async function onSubmit(values: z.infer<typeof productSchema>) {
    let uploadImageUrl = values.images;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) return;
      uploadImageUrl = uploadedImages[0].url;
    }
    console.log({
      ...values,
      images: uploadImageUrl,
      brandName: selectedBrand,
    });

    const data = await createProduct({
      ...values,
      images: uploadImageUrl,
      brand: selectedBrand,
    });
    if (data) {
      toast.success("Product added successfully");
      console.log(data);
      form.reset();
    } else {
      toast.error("Something went wrong");
    }
  }
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
                  <FormItem className="flex flex-col gap-2 items-center justify-center">
                    <FormLabel className="font-bold">Product Brand *</FormLabel>
                    <FormControl>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="bg-black text-white px-2 py-1 rounded-md">
                          {selectedBrand ? selectedBrand : "Select Brand"}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {brands?.map((item) => (
                            <DropdownMenuItem
                              key={item.id}
                              className="bg-white"
                              onClick={() => handleBrandSelect(item.brandName)}
                            >
                              {item.brandName}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Product Description *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      typeof="text"
                      {...field}
                      className="max-w-sm rounded-2xl placeholder:text-slate-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Image</FormLabel>
                <FormControl>
                  <FileUploader
                    imageUrl={field.value}
                    onFieldChange={field.onChange}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-black text-white px-3 py-1 hover:bg-black hover:text-white rounded-xl hover:opacity-80"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Add Product"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddForm;
