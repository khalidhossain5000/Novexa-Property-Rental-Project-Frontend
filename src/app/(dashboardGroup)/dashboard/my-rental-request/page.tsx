import { getTenantRentalRequest } from "@/app/(publicGroup)/_actions/rentalRequestActions";
import MyRentalRequest from "../../_components/MyRentalReqPage/MyRentalRequest";

const MyRentalRequestPage = async () => {
  const myRentalReqRes = await getTenantRentalRequest();
 
  return (
    <div>
      <div className="mb-8 p-4 ">
        <h2 className="font-lora text-2xl text-center md:text-left font-bold text-foreground">
          My All Rental Request
        </h2>

        <p className="mt-1 font-inter text-center md:text-left text-sm text-foreground/60">
          Review all Rental Request that you requested to rent.
        </p>
      </div>
      <MyRentalRequest myRentalReqRes={myRentalReqRes} />
    </div>
  );
};

export default MyRentalRequestPage;
