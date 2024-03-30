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
import { blogSchema } from "@/lib/validator";
import { Textarea } from "@/components/ui/textarea";
import { createBlog } from "@/actions/action";
import { FileUploader } from "./FileUploader";
import { useUploadThing } from "@/util/uploadthing";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("imageUploader");
  const initialValues = {
    title: "",
    description: "",
    image: "",
  };

  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof blogSchema>) {
    let uploadImageUrl = values.image;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) return;
      uploadImageUrl = uploadedImages[0].url;
    }
    console.log(values);
    const data = await createBlog({ ...values, image: uploadImageUrl });
    if (data) {
      toast.success("Blog created successfully");
      console.log(data);
      form.reset();
      router.push("/blog");
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Blog Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Title"
                  {...field}
                  className="rounded-2xl  placeholder:text-slate-400 w-[500px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Blog Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  {...field}
                  className="rounded-2xl placeholder:text-slate-400 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Integrate FileUploader component for image upload */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Blog Image</FormLabel>
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
          className="bg-black rounded-2xl text-white hover:bg-black hover:opacity-80 mb-14"
          type="submit"
        >
          {form.formState.isSubmitting ? "Submitting..." : "Create Blog"}
        </Button>
      </form>
    </Form>
  );
};

export default Blog;
