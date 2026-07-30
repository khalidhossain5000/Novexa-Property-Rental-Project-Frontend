import React from "react";
import { getRentalRequestForLandlord } from "../../_actions/propertyActions";
import LandlordRentalRequest from "../_landlordComponents/LandlordRentalRequest/LandlordRentalRequest";

const RentalRequestForLandlordPage = async () => {
  const rentalReqLandlord = await getRentalRequestForLandlord();


  return (
    <div>
      <div className="mb-8">
        <h2 className="font-lora text-2xl font-bold text-foreground">
          Manage Rental Request
        </h2>

        <p className="mt-1 font-inter text-sm text-foreground/60">
          Review all Rental Request
        </p>
      </div>

      <LandlordRentalRequest rentalReqLandlord={rentalReqLandlord}/>
    </div>
  );
};

export default RentalRequestForLandlordPage;
