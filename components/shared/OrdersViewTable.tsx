import { getOrderById, getOrders } from "@/actions/product/action";
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

const OrdersViewTable = async () => {
  const orderData = await getOrders();

  const handleStatus = (id: number) => {
    const data = getOrderById(id);
    console.log(data);
  };

  return (
    <div className="">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Product Price</TableHead>
            <TableHead>Product Description</TableHead>
            <TableHead>Shipping Address</TableHead>
            <TableHead>Billing Address</TableHead>
            <TableHead>Zip Code</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderData.data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.user.id}</TableCell>
              <TableCell>{item.user.firstName}</TableCell>
              <TableCell>{item.user.lastName}</TableCell>
              <TableCell>{item.user.email}</TableCell>
              <TableCell>{item.product.name}</TableCell>
              <TableCell>{item.product.price}</TableCell>
              <TableCell>{item.product.description}</TableCell>
              <TableCell>{item.shippingAddress}</TableCell>
              <TableCell>{item.billingAddress}</TableCell>
              <TableCell>{item.postcode}</TableCell>
              <TableCell>{item.createdAt.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrdersViewTable;
