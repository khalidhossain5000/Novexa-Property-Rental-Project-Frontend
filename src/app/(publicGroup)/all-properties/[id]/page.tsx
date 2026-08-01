import React from 'react';
import { getPorpertyDetails } from '../../_actions/getAllProperty';
import PropertyDetails from '@/app/(publicGroup)/_components/PropertyDetailsPage/PropertyDetails';
import { getMe } from '@/service/getMe';
interface IParamsProps{
     params: Promise<{ id: string }> 
}
const PropertyDetailsPage = async ({ params }:IParamsProps) => {
    const {id}=await params
    const propertyDetailsRes=await getPorpertyDetails(id)
    const currentUser=await getMe()
    const currentUserId=currentUser?.data?.id
    return (
        <div>
            <PropertyDetails propertyDetailsRes={propertyDetailsRes}  currentUserId={currentUserId}/>
        </div>
    );
};

export default PropertyDetailsPage;