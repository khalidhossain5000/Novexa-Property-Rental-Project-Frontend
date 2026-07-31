import React from "react";
import { getAllPropertiesForAdmin } from "../../_actions/adminActions";
import AllPropertiesAdmin from "../_adminComponents/AllPropertiesAdmin/AllPropertiesAdmin";

const AdminAllPropertiesPage = async () => {
  const allAdminPropertiesRes = await getAllPropertiesForAdmin();
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-lora text-2xl font-bold text-foreground">
          Manage Users
        </h2>

        <p className="mt-1 font-inter text-sm text-foreground/60">
          Review all Users, update status.
        </p>
      </div>

      <AllPropertiesAdmin allAdminPropertiesRes={allAdminPropertiesRes} />
    </div>
  );
};

export default AdminAllPropertiesPage;
