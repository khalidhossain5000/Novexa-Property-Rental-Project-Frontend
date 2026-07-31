import React from 'react';
import { getPorpertyDetails } from '../../_actions/getAllProperty';
interface IParamsProps{
     params: Promise<{ id: string }> 
}
const PropertyDetailsPage = async ({ params }:IParamsProps) => {
    const {id}=await params
    const propertyDetailsRes=await getPorpertyDetails(id)

    console.log(propertyDetailsRes,'this is the res')
    return (
        <div>
            
        </div>
    );
};

export default PropertyDetailsPage;