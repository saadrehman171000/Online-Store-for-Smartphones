"use server";
import {
  blogSchema,
  brandValidator,
  contactValidator,
  orderValidator,
  productSchema,
} from "@/lib/validator";
import prisma from "@/util/prismadb";

import { NextResponse } from "next/server";
import * as z from "zod";

type contactRequest = z.infer<typeof contactValidator>;

export async function createContact(input: contactRequest) {
  try {
    const parsedBody = contactValidator.safeParse(input);
    if (!parsedBody.success) {
      return { success: false, error: parsedBody.error.format() };
    }
    const { data } = parsedBody;

    const newContact = await prisma.contact.create({
      data: {
        fullName: data.fullName,
        Email: data.Email,
        phoneNumber: data.phoneNumber,
        Message: data.Message,
      },
    });
    return { success: true, data: newContact };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getContactData() {
  try {
    const data = await prisma.contact.findMany();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getBrandNames() {
  try {
    const data = await prisma.brand.findMany();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getBrandbyId(id: number) {
  try {
    const data = await prisma.brand.findFirst({
      where: {
        id: id,
      },
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getProducts() {
  try {
    const data = await prisma.product.findMany();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

type productRequest = z.infer<typeof productSchema>;

export async function createProduct(input: productRequest) {
  try {
    const parsedBody = productSchema.safeParse(input);

    if (!parsedBody.success) {
      return { success: false, error: parsedBody.error.format() };
    }

    const { data } = parsedBody;

    const brand = await prisma.brand.findFirst({
      where: { brandName: data.brand },
    });

    if (!brand) {
      return { success: false, error: "Brand not found" };
    }

    const newProduct = await prisma.product.create({
      data: {
        name: input.name,
        price: input.price,
        stock: input.stock,
        images: input.images,
        color: input.color,
        description: input.description,
        brand: { connect: { id: brand.id } },
      },
    });

    return { success: true, data: newProduct };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getProductById(id: number) {
  try {
    const data = await prisma.product.findFirst({
      where: {
        id: id,
      },
      include: {
        brand: true,
      },
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getOrders() {
  try {
    const orderDetails = await prisma.orders.findMany({
      include: {
        user: true,
        product: true,
      },
    });
    return { success: true, data: orderDetails };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}
type OrderRequest = z.infer<typeof orderValidator>;

export async function createOrder(
  input: OrderRequest,
  userId: string,
  productId: string
) {
  try {
    const getUserId = await getUserByKindeId(userId);
    const id = getUserId.data?.id;

    if (!id) {
      return { success: false, error: "user not found" };
    }
    const parsedBody = orderValidator.safeParse(input);
    if (!parsedBody.success) {
      return { success: false, error: parsedBody.error.format() };
    }

    console.log("user id ", userId);
    const newOrder = await prisma.orders.create({
      data: {
        userId: id,
        productId: parseInt(productId),
        shippingAddress: input.shippingAddress,
        billingAddress: input.billingAddress,
        phoneNumber: input.phoneNumber,
        postcode: input.postcode,
      },
    });

    return { success: true, data: newOrder };
  } catch (error) {
    console.log(error);
    return { success: false, error: "something went wrong" };
  }
}
export async function getUserByKindeId(kindeId: string) {
  try {
    const data = await prisma.user.findFirst({
      where: {
        kindeId,
      },
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getOrderById(id: number) {
  try {
    const data = await prisma.orders.findFirst({
      where: {
        id: id,
      },
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getUserById(id: number) {
  try {
    const data = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

