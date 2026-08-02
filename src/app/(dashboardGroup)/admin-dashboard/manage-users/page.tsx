import React from "react";
import { getAllUsers } from "../../_actions/adminActions";
import ManagerUsers from "../_adminComponents/ManagerUsers/ManagerUsers";

const ManageUsersPage = async () => {
  const userRes = await getAllUsers();

  console.log(userRes, "this is user res");
  return (
    <div className="p-4">
      <div className="mb-8 ">
        <h2 className="font-lora text-2xl font-bold text-foreground text-center md:text-left">
          Manage Users
        </h2>

        <p className="mt-1 font-inter text-sm text-foreground/60 text-center md:text-left">
          Review all Users, update status.
        </p>
      </div>

      <ManagerUsers userRes={userRes} />
    </div>
  );
};

export default ManageUsersPage;
