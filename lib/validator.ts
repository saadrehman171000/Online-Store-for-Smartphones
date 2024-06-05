import * as z from "zod";

export const productSchema = z.object({
  name: z.string({ required_error: "Please enter name" }),
  price: z.string({ required_error: "Please enter price" }),
  stock: z.string({ required_error: "Please enter price" }),
  images: z.string({ required_error: "Upload some images" }),
  color: z.string({ required_error: "Please enter color" }),
  brand: z.string({ required_error: "Choose Brand Please" }),
  description: z.string({ required_error: "Description cannot be left empty" }),
});

export const orderValidator = z.object({
  
  shippingAddress: z.string({ required_error: "Address Field is required" }),
  billingAddress: z.string({ required_error: "Address Field is required" }),
  phoneNumber: z.string({ required_error: "Phone Number is required" }),
  postcode: z.string({required_error: "zip code is required"})
 
});

export const contactValidator = z.object({
  fullName: z.string({ required_error: "Full name is required" }),
  Email: z.string({ required_error: "Email is required" }),
  phoneNumber: z.string({ required_error: "Phone number is required" }),
  Message: z.string({ required_error: "Message is a required field " }),
});

export const imageValidator = z.object({
  url: z.string({ required_error: "Please enter images." }),
});

export const brandValidator = z.object({
  brandName: z.string({ required_error: "Please enter brand name" }),
});

export const blogSchema = z.object({
  title: z
    .string()
    .min(5, "Title should be at least 5 characters long")
    .max(100, "Title cannot be that long"),
  description: z
    .string()
    .min(10, "Description should be at least 10 characters long")
    .max(1000, "Cannot be more than a 1000 words"),
  image: z.string(),
});
