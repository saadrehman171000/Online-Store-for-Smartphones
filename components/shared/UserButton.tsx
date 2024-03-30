import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import React from "react";

const UserButton = ({
  user,
  isAuthenticated,
}: {
  isAuthenticated: boolean;
  user: KindeUser;
}) => {
  return <div>UserButton</div>;
};

export default UserButton;
