import { IRentalReqResponse } from '@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes';
import React from 'react';
interface ILandlordRentalRequestProps{
    rentalReqLandlord:IRentalReqResponse
}
const LandlordRentalRequest = ({rentalReqLandlord}:ILandlordRentalRequestProps) => {
    const rentalReqData=rentalReqLandlord.data
    return (
        <div>
            
        </div>
    );
};

export default LandlordRentalRequest;