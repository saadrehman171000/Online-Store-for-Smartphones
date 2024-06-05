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
import { getContactData } from "@/actions/product/action";
import { revalidatePath } from "next/cache";

const GetContact = async () => {
  const getDataContact = await getContactData();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {getDataContact.data?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.Email}</TableCell>
            <TableCell>{item.phoneNumber}</TableCell>
            <TableCell>{item.Message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GetContact;
