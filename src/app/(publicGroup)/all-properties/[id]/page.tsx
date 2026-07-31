import React from 'react';
import { getPorpertyDetails } from '../../_actions/getAllProperty';
import PropertyDetails from '@/components/PropertyDetailsPage/PropertyDetails';
interface IParamsProps{
     params: Promise<{ id: string }> 
}
const PropertyDetailsPage = async ({ params }:IParamsProps) => {
    const {id}=await params
    const propertyDetailsRes=await getPorpertyDetails(id)

    return (
        <div>
            <PropertyDetails propertyDetailsRes={propertyDetailsRes}  />
        </div>
    );
};

export default PropertyDetailsPage;