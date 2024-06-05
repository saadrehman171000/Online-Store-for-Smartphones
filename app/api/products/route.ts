import { brandValidator, imageValidator, productSchema } from "@/lib/validator";
import prisma from "@/util/prismadb";
import * as z from "zod";

type ProductsRequest = z.infer<typeof productSchema>;
type ImageRequest = z.infer<typeof imageValidator>;
type BrandRequest = z.infer<typeof brandValidator>;

export async function getFeaturedProducts(): Promise<{ success: boolean; data: ProductsRequest[] }> {
  try {
    const featuredProducts = await prisma.featuredProducts.findMany();
    return { success: true, data: featuredProducts };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Something went wrong" };
  }
}
