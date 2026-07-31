import React from "react";
import { getAllRentalReqForAdmin } from "../../_actions/adminActions";
import AdminRentalReq from "../_adminComponents/AdminAllRentalReq/AdminRentalReq";

const AdminAllRentalRequestPage = async () => {
  const rentalReqRes = await getAllRentalReqForAdmin();
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

      <AdminRentalReq rentalReqRes={rentalReqRes} />
    </div>
  );
};

export default AdminAllRentalRequestPage;
