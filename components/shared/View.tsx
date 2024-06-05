import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  getBrandNames,
  getBrandbyId,
  getProducts,
} from "@/actions/product/action";

const View = async () => {
  const productData = await getProducts();
  const brands = await getBrandNames();

  const getBrandById = async (brandId: number) => {
    console.log("hello", brandId);
    const brandName = await getBrandbyId(brandId);
    console.log(brandName);
    return brandName.data?.brandName;
  };

  console.log(productData.data);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          {/* <TableHead>Image</TableHead> */}
          <TableHead>Color</TableHead>
          <TableHead>Brand</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productData.data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.brandId}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.stock}</TableCell>

            {/* <TableCell>{item.images}</TableCell> */}
            <TableCell>{item.color}</TableCell>
            <TableCell>{getBrandById(item.brandId)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default View;
