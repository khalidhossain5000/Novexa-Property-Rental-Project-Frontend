import { getTenantRentalRequest } from '@/app/(publicGroup)/_actions/rentalRequestActions';
import React from 'react';
import MyRentalRequest from '../../_components/MyRentalReqPage/MyRentalRequest';

const MyRentalRequestPage = async () => {
    const myRentalReqRes=await getTenantRentalRequest()

    console.log(myRentalReqRes,'thisis rental req res')
    return (
        <div>
            <div className="mb-8">
        <h2 className="font-lora text-2xl font-bold text-foreground">
          My All Rental Request
        </h2>

        <p className="mt-1 font-inter text-sm text-foreground/60">
          Review all Rental Request that you requested to rent.
        </p>
      </div>
            <MyRentalRequest myRentalReqRes={myRentalReqRes} />
        </div>
    );
};

export default MyRentalRequestPage;