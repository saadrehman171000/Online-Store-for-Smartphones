"use server";
import { blogSchema } from "@/lib/validator";
import prisma from "@/util/prismadb";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { NextResponse } from "next/server";
import * as z from "zod";

type BlogRequest = z.infer<typeof blogSchema>;


export async function createBlog(input: BlogRequest) {
  try {
    const parsedBody = blogSchema.safeParse(input);

    if (!parsedBody.success) {
      return { success: false, error: parsedBody.error.format() };
    }

    const { data } = parsedBody;

    const newBlog = await prisma.blog.create({
      data: {
        title: data.title,
        description: data.description,
        image: data.image,
      },
    });

    return {
      success: true,
      data: { newBlog },
    };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}

export async function getBlogs() {
  try {
    const data = await prisma.blog.findMany();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}



export async function getBlogId(id: number) {
  try {
    const data = await prisma.blog.findFirst({
      where: {
        id: id,
      },
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error: "something went wrong" };
  }
}
