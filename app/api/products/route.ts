"use server";
import { brandValidator, imageValidator, productSchema } from "@/lib/validator";
import prisma from "@/util/prismadb";
import * as z from "zod";

type ProductsRequest = z.infer<typeof productSchema>;
type ImageRequest = z.infer<typeof imageValidator>;
type BrandRequest = z.infer<typeof brandValidator>;

export async function getFeaturedProducts() {
  try {
    const featuredProducts = await prisma.featuredProducts.findMany({
      include: {
        images: true,
      },
    });
    return { success: true, data: featuredProducts };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Something went wrong" };
  }
}

export async function createProduct(
  input: ProductsRequest,
  imageInput: ImageRequest,
  brandInput: BrandRequest,
  productId: number
) {
  try {
    const body = productSchema.safeParse(input);
    const imagebody = imageValidator.safeParse(imageInput);
    const brandBody = brandValidator.safeParse(brandInput);

    if (!body.success) {
      return { success: false, error: body.error.format() };
    }
    if (!imagebody.success) {
      return { success: false, error: imagebody.error.format() };
    }
    if (!brandBody.success) {
      return { success: false, error: brandBody.error.format() };
    }
    const { data } = body;
    const { data: imageData } = imagebody;
    const { data: brandData } = brandBody;

    const productImage = await prisma.productImages.create({
      data: {
        url: imageData.url,
        product: { connect: { id: productId } },
      },
    });

    const brandCreate = await prisma.brand.create({
      data: {
        brandName: brandData.brandName,
        products: { connect: { id: productId } },
      },
    });

    const product = await prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        stock: data.stock,
        images: { connect: { id: productImage.id } },
        color: data.color,
        brand: { connect: { id: brandCreate.id } },
        description: data.description,
      },
    });

    return {
      success: true,
      data: { product },
    };
  } catch (err) {
    console.log(err);
    return { success: false, err: "Something went wrong" };
  }
}
