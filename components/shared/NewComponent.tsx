import React from "react";

interface NewComponentProps {
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
  CardNumber: string;
  cvc: string;
  productId: number;
  userId?: string;
}

const NewComponent = ({
  fullName,
  email,
  address,
  phoneNumber,
  CardNumber,
  cvc,
  userId,
  productId,
}: NewComponentProps) => {
  console.log("Received values:", fullName);
  console.log("Received userId:", userId);
  console.log("Received productId:", productId);
  return (
    <>
      <h1>helo</h1>
    </>
  );
};

export default NewComponent;
